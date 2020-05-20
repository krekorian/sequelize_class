var db = require('../config/connection')
console.log("db user user-raw_controller.js")
// console.log(db);

exports.getUser = function (req, res) {
    console.log("reaching get user-raw controller");

    db.sequelize.query("SELECT * from tbl_users",{
        type:db.sequelize.QueryTypes.SELECT
    }).then(response=>{
          res.status(200).json({
                  status:1,
                  message:"Users Found",
                  data:response
            })
    }).catch(error=>{
        console.log(error)
    })
}