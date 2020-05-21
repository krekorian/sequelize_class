var db = require('../config/connection')
console.log("db user user_controller.js")
console.log(db.User);

exports.postUser = function (req, res) {
    console.log("reaching post user controller")
    console.log(req.body)
    db.User.create(req.body).then((response) => {
        res.status(200).json({
            status: 1,
            message: "user have been created successfully"
        })
    }).catch((error) => {
        console.log("error creating user")
    })


}


exports.getUser = function (req, res) {
    console.log("reaching get user controller")
    db.User.findAll(
        {
            where: {
                status: "1",
                email: {
                    [db.Sequelize.Op.like]: '%.co%'
                }
            }
        }
    ).then(function (users) {
        res.status(200).json({
            status: 1,
            message: "User found",
            data: users
        })
    }).catch(function (error) {
        console.log(error)
    })
}

exports.updateUser=function(req,res){
    db.User.update({
        name:req.body.name,
        email:req.body.email,
        rollNo:req.body.rollNo
    },{
        where:{
            id:req.body.id
        }
    }).then(response=>{
        res.status(200).json({
            status:1,
            message:"User has been updated successfully"
        })
    }).catch(error=>{
        res.status(500).json({
            status:0,
            message: "Failed to update user",
            data:error
        })
    })
}


exports.deleteUser=function(req,res){
    db.User.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.status(200).json({
            status:1,
            message:"User has been deleted successfully"
        })
    }).catch(error=>{
        res.status(500).json({
            status:0,
            message:"Failed to delete user",
            data:error
        })
    })
}