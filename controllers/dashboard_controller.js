const sequelize = require('../config/connection')

// console.log(sequelize)

exports.displayMain = function (req, res) {
    console.log("reaching controller")
    res.status(200).json({
        status: 1,
        page: 'dashboard'
    });
}

exports.postMain = function (req, res) {
    console.log("reaching controller")
    res.status(200).json("/");
}