var Sequelize = require("sequelize");
const fs =require('fs')

var dbJWT = {};

const file=fs.readFileSync('.env').toString()


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("orm_jwt", "root", file, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// console.log("before creating sequelize dbJWT   <<<<<<")

sequelize.authenticate().then(function (success) {
    console.log("successfully connected to database orm_jwt    <<<<<<<")
    // console.log(success)    >>>  success is undefined
}).catch(function (error) {
    console.log("error connecting to database orm_jwt")
    console.log(error)
});


var User = sequelize.define('tbl_users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }

}, {
    modelName: "User",
    timestamps: false
})

sequelize.sync();

dbJWT.User = User;
dbJWT.sequelize = sequelize;
dbJWT.Sequelize = Sequelize;

// Exports the connection for other files to use
module.exports = dbJWT;
