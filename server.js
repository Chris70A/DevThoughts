const express = require('express');                                         // Import express module
const path = require('path');                                               // Import path module
const session = require('express-session');                                 // Import session module
const exphbs = require('express-handlebars');                               // Import Handlebars module

const app = express();                                                      // Initialize express app
const PORT = process.env.PORT || 3001;                                      // Set server port



const SequelizeStore = require('connect-session-sequelize')(session.Store);          // Set up session store


const sess = {                                                 // Session configuration
  secret: 'Super secret secret',                              // Set session secret
  cookie: {                                                   // Configure cookie
    maxAge: 300000,
    httpOnly: true, 
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));                                       // Apply session middleware

const hbs = exphbs.create({ helpers });                       // Create handlebars instance

app.engine('handlebars', hbs.engine);                         // Set handlebars engine                  
app.set('view engine', 'handlebars');                         // Set view template

app.use(express.json());                                      // Parse JSON requests
app.use(express.urlencoded({ extended: false }));             // Parse URL-encoded data
app.use(express.static(path.join(__dirname, 'public')));      // static assets

app.use(require('./controllers'));                           // Use app controllers

app.listen(PORT, () => {                                      // Start server listening
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });                           // Sync Sequelize models
});

