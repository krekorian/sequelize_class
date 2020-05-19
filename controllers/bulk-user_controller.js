var db = require('../config/connection')
console.log("db user bulk-user_controller.js")
console.log(db.User);

exports.postBulkUser = function (req, res) {
    console.log("reaching  controller")
    console.log(req.body)
    db.User.bulkCreate([
        {
            "name": "user1",
            "email": "user1@gmail.com",
            "rollNo": 51,
            "status": "1"
        },
        {
            "name": "user2",
            "email": "user2@gmail.com",
            "rollNo": 52,
            "status": "1"
        },
        {
            "name": "user3",
            "email": "user3@gmail.com",
            "rollNo": 53,
            "status": "1"
        },
        {
            "name": "user4",
            "email": "user4@gmail.com",
            "rollNo": 54,
            "status": "1"
        }
    ]).then(function (response) {
        res.status(200).json({
            status: 1,
            message: "bulk user have been created successfully"
        })
    }).catch(function (error) {
        console.log("error creating user");
        console.log(error)
    })


}