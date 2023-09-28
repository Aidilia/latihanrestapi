const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000

//parse app/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./router');
routes(app);

app.listen(port, ()=>{
    console.log('Server is running on port ..');
})