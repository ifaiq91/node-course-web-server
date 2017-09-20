const express = require('express');
const hbs = require('hbs');
const logger = require('./utils/logger');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

//logging requests
app.use((req, resp, next)=>{
    var logData = `${req.method} - ${req.originalUrl}`;
    logger.log(logData);
    next();
});


app.get('/', (req, resp) => {
    // resp.send('Hello Express!');
    resp.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to Home'
    })
    ;
})
;

app.get('/about', (req, resp) => {
    resp.render('about.hbs', {
        pageTitle: 'About'
    });
})
;

app.get('/bad', (req, resp) => {
    resp.send({
        errorMessage: 'Error Handling Message'
    });
})
;

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
