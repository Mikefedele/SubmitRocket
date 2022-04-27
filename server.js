// Require supporting NPM modules
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Initialize required variables
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/auth');

// Initialize the Express.js server
const app = express();
const PORT = process.env.PORT || 3001;

// Ensure that the dotenv environment variables are available to create a session
require('dotenv').config();

// Setup sessions
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        // Stored in milliseconds (86400 === 1 day)
        maxAge: 86400
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Helpers if needed for time/date etc.
const hbs = exphbs.create({ helpers });

// Initialize template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Invoke helper middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(
            `\nServer running on port ${PORT} 🚀. Visit http://localhost:${PORT} and create an account!`
        )
    );
});
