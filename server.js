// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Public Dir
// =============================================================
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// API Routes
// =============================================================
const routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Starts the server to begin listening
// =============================================================
const PORT = process.env.PORT || 3000;
console.log("Application Listening on " + PORT);
