require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const expressLayouts = require('express-ejs-layouts');
const expressSessions = require('express-session');
const path = require('path');

// Middlewares used to pass DATA through Forms and Pages
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Templating Engines
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine','ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// Handling Error 404
app.get("*", (req,res) => {
    res.status(404).render('error');
});

app.listen(port, () => {
    console.log(`Successfully running on port ${port} \n`);
});

