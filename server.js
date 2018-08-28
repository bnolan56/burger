// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(PORT, function (error, response) {
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on ${PORT}`);
})

// console.log("Application Listening on " + PORT);
