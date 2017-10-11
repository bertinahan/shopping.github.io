var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var drinks=[{name:'Cocktail1', price:10,img:"products/11.jpg"},
  {name:'Cocktail2', price:11,img:"products/12.jpg"},
  {name:'Cocktail3', price:11,img:"products/13.jpg"},
  {name:'Cocktail4', price:11,img:"products/14.jpg"},
  {name:'Cocktail5', price:11,img:"products/15.jpg"},
  {name:'Cocktail6', price:11,img:"products/16.jpg"},];
  response.render('pages/index',
  {drinks:drinks});
});
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
