const router = require('express').Router();

const controllerRegister = require('../controller/controller-register');
const verifyUser = require('../utils/verify');

router.get('/', verifyUser.isLogout, controllerRegister.signinPage);
router.post('/register', verifyUser.isLogout, controllerRegister.saveRegister);

module.exports = router;
