const express = require('express');
const {
  homePage,
  forumPage,
  loginPage,
  signinPage,
  login,
  signin,
} = require('../controller/handlers');

const router = express.Router();

// * Home Page
router.get('/', homePage);
router.get('/home', homePage);
// * Forum  Page
router.get('/forum', forumPage);
// * Login Page
router.get('/login', loginPage);
router.post('/login', login);
// * SignIn Page
router.get('/signin', signinPage);
router.post('/signin', signin);

module.exports = router;
