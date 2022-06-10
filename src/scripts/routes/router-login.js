const router = require('express').Router();

const controllerLogin = require('../controller/controller-login');
const verifyUser = require('../utils/verify');

router.get('/', verifyUser.isLogout, controllerLogin.loginPage);
router.get('/logout', controllerLogin.logout);
router.post('/auth', controllerLogin.loginAuth);

module.exports = router;
