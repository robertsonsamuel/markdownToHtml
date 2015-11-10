var express = require('express');

var bodyParser = require('body-parser')
var morgan = require('morgan')
var marked = require('marked');

var app = express();

// set view to jade
app.set('view engine', 'jade');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.render('pad');
});

app.post('/endpoint',function(req,res){
   incomingMarkdown = req.body.string;
   console.log(incomingMarkdown);
   html = marked(incomingMarkdown);
   console.log(html);
   res.send(html);



});

app.use('/', function(req,res){
  res.setHeader('Content-Type','text/plain');
  next();
});


var port = 3000;
app.listen(port);
