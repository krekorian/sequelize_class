module.exports = function (app) {
    console.log('reaching index.js inside routes')
    // console.log(app)
    const dashboard = require('./dashboard');
    const createExpense = require('./createExpense');
    const user = require('./user');
    const bulk_user = require('./bulk-user')
    const user_jwt = require('./user-jwt')

    app.use('/', dashboard);
    app.use('/createExpense', createExpense);
    app.use('/user', user);
    app.use('/bulk-user', bulk_user);
    app.use('/user-jwt', user_jwt)

    //other routes..
}