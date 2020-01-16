require('dotenv').config();
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = {
    init(app, express) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());
        app.use(session({
            secret: process.env.COOKIE_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1.21e+9 },
        }));
        app.use(logger('dev'));
    },
};