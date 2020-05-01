const express = require('express');

//import {Express} from 'express'

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


//Express middleware
//Rest call goes through waterfall of functionsnpm 
app.use(logger('dev'));     //logging the request endpoint
app.use(express.json());    //parse body of request
app.use(express.urlencoded({ extended: false }));   //parse the url of the request
app.use(cookieParser());    //parse the cookie
app.use(express.static(path.join(__dirname, 'public')));    //static hoisting

app.use('/', indexRouter);
app.use('/users', usersRouter);

const omdbRouter = require('./routes/omdb');
app.use('/omdb', omdbRouter);
module.exports = app;

