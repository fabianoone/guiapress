const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const categoriesController    = require('./categories/CategoriesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category'); 
// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then( ()=> {
        console.info('App Connected to the database.')
    }).catch( (error) => {

    });

app.use('/', categoriesController);

app.get('/', (req, res) => {
    return res.render('index')
}); 

app.listen(5000, ()=>{
    console.info('App is running')
})