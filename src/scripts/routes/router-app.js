const express = require('express');
const { homePage, forumPage } = require('../controller/controller-app');

const verifyUser = require('../utils/verify');

const router = express.Router();

// * Home Page
router.get('/', /* verifyUser.isLogin, */ homePage);
router.get('/home', /* verifyUser.isLogin, */ homePage);

// * Forum  Page
router.get('/forum', verifyUser.isLogin, forumPage);

module.exports = router;
