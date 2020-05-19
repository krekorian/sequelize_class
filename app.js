const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 8000 || process.env.PORT;

app.use(bodyParser.json())
require('./routes/index')(app)



app.listen(port, function () {
    console.log(`Server is listening to port ${port}`)
})