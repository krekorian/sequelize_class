var dbJWT = require('../config/connection-jwt')
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const JwtConfig = require('../config/jwt-config')

exports.postUser = function (req, res) {
    //console.log(req.body)
    let name = req.body.name;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 10);
    let status = req.body.status;

    dbJWT.User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (user) {
            res.status(200).json({
                status: 0,
                message: "User already exist"
            })
        } else {
            dbJWT.User.create({
                name: name,
                email: email,
                password: password,
                status: status
            }).then((response) => {
                res.status(200).json({
                    status: 1,
                    message: "User has been registered successfully"
                })
            }).catch((error) => {
                res.status(500).json({
                    status: 0,
                    data: error
                })
            })
        }

    }).catch((error) => {
        console.log(error)
    })


}


exports.loginUser = function (req, res) {
    console.log(req.headers.host)    // to check URL in this case it is localhost:8000
    // console.log(req.client._handle)
    dbJWT.User.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let userToken = JWT.sign({
                    email: user.email,
                    id: user.id
                }, JwtConfig.secret, {
                    expiresIn: JwtConfig.expiresIn,    //in milliseconds
                    notBefore: JwtConfig.notBefore,   //we can use this token after 1 min
                    audience: JwtConfig.audience,
                    issuer: JwtConfig.issuer,
                    algorithm: JwtConfig.algorithm
                });
                res.status(200).json({
                    status: 1,
                    message: "user logged in successfully",
                    token: userToken
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message: "Password didn't match"
                })
            }
        } else {
            res.status(500).json({
                status: 0,
                message: "User does not exist"
            })
        }
    }).catch((error) => {
        console.log(error)
    })
}


exports.validate = function (req, res) {

    let userToken = req.headers.authorization
    if (userToken) {
        JWT.verify(userToken, JwtConfig.secret, (error, decoded) => {
            console.log(decoded);
            if (error) {
                res.status(500).json({ message: "JWT error" })
                console.log(error)
            } else {
                res.status(200).json({ message: "JWT decoded" })
            }
        })
    } else {
        res.status(500).json({
            status: 0,
            message: "Please provide authentication token value"
        })
    }
}

exports.profile = function (req, res) {
    // console.log(req.)
    res.status(200).json({
        status: 1,
        userdata: req.Userdata,
        message: "Token value parsed"
    })
}