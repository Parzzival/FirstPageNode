const { renderFile } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');


//setting
app.set('port', 3000);
// configuration for the rout
app.set('views', path.join(__dirname, 'views'));
// configuration for use ejs -> html
app.engine('html', require('ejs').renderFile);
// view motor for use ejs
app.set('view engine', 'ejs');

//middlewares
//app.all();

//routes
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')));
//listening server
app.listen(app.get('port'), () =>{
    console.log('on server', app.get('port'));
})