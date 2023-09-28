const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var morgan = require('morgan');

const port = 3000

//parse app/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var routes = require('./router');
routes(app);

//daftarkan menu routes
app.use('/auth', require('./middleware'));

app.listen(port, ()=>{
    console.log('Server is running on port 3000');
})