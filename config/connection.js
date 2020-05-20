var Sequelize = require("sequelize");
var db = {}
// console.log(Sequelize)
console.log("running connection.js")

const dbpass = fs.readFileSync('.env').toString()
console.log(dbpass)

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("node_orm", "root", dbpass, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(function (success) {
    console.log("successfully connected to database")
    // console.log(success)    >>>  success is undefined
}).catch(function (error) {
    console.log("error connecting to database")
    console.log(error)
})

var User = sequelize.define('tbl_users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rollNo: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM("1", "0"),
        defaultValue: "1"
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }

}, {
    modelName: "User",
    timestamps: false
})

sequelize.sync();

db.User = User;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exports the connection for other files to use
module.exports = db;
