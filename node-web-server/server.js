const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear()});
hbs.registerHelper('screamIt', (text) => {  return text.toUpperCase();});

app.use((req, res, next) =>  {
    var now = new Date().toISOString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
      if (err){
          throw err;
      }
    });
    next();
});

app.use((req, res, next) =>  {
    console.log(req.path, '- Second  custom middleware');
    //res.render('maintenance.hbs');
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
   console.log('Rendering home page'); 
   res.render('home.hbs',{
     pageTitle: 'Home Page',
     welcomeMessage: 'Welcome to my website'
   });

   
});

app.get('/about', (req,res) =>{
    console.log('Rendering about page');
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
 
 });

app.get('/bad', (req,res) =>{
   res.send({
      errorMessage: 'Unable to handle request'
   });

});



app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});
