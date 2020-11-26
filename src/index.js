var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose= require('mongoose');

mongoose.connect("mongodb://localhost/berlinStreetsDB", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

var userRouter = require('./routes/userRoutes')
var mapRouter = require('./routes/mapRoutes')

app.use('/user', userRouter);
app.use('/map', mapRouter);
app.listen(2000);