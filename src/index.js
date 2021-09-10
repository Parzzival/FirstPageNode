const express = require('express')
const app = express();

//setting
app.set('port', 3000);
//middlewares
//app.all();

//routes
app.get('/', (req, res) =>{
    res.send('hello world')
});

//static files
//listening server
app.listen(app.get('port'), () =>{
    console.log('on server', app.get('port'));
})