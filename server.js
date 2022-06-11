const express = require('express');
const webpush = require('web-push');
const session = require('express-session');
const flash = require('req-flash');
const cors = require('cors');
const middleware = require('./src/scripts/utils/middleware');
const mongoose = require('mongoose');
const { PORT, MONGODB_URI } = require('./src/scripts/global/config');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');


const router = require('./src/scripts/routes/router-app');
const routerLogin = require('./src/scripts/routes/router-login');
const routerSignin = require('./src/scripts/routes/router-register');
const routerEntries = require('./src/scripts/routes/router-entries');

const app = express();

console.log('connecting to mongoDB');
const mongodb_config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(MONGODB_URI, mongodb_config)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.error('error connecting to mongo db', error.message);
  });

app.use(cors());
app.use(express.json());

/* * Use url parsing */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* * Use view Engine */
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('views', path.join(__dirname, './src/scripts/views/pages'));

/* * Configurasi session  */
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRETPASSWORD,
    name: 'secretName',
    cookie: {
      sameSite: true,
      maxAge: 600000,
    },
  })
);
app.use(flash());

// * Static File
app.use(express.static('public'));
app.use('/', [
  express.static(path.join(__dirname, './node_modules/jquery/dist')),
  express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')),
  express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')),
  express.static(path.join(__dirname, './node_modules/ejs')),
  express.static(path.join(__dirname, './src/public')),
]);

// * Inisialisasi router
app.use('/', router);
app.use('/login', routerLogin);
app.use('/signin', routerSignin);
app.use('/entries', routerEntries);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
