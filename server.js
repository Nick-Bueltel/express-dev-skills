const express = require('express'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');
const logger = require('morgan')
const methodOverride = require('method-override');

const app = express(); 

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// app.get('/', function(req, res) {
//     res.send('<h1>Dev Skills Lab</h1>');
// });

// app.listen(3001, function () {
//     console.log('Listening on 3000');
// });

module.exports = app;