const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configure template Engine and Main Template File
app.engine('.hbs', exphbs.engine({
     extname: '.hbs',
      defaultLayout: "main",
    }));
// Setting template Engine
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page 1'});
});
app.get('/about-us', (req, res) => {
    res.render('about-us');
});

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});