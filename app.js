var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
app.set('view engine', 'ejs');
//middleware
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to ports
app.listen(3000);
console.log('You are listening to port 3000');
