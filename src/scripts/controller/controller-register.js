const User = require('../models/user');
const bcrypt = require('bcrypt');

const signinPage = async (request, response) => {
  response.render('signin', {
    layout: '../layout/main-layout',
    page: 'signin',
    title: 'SiCovid19 | SignIn',
  });
};

const saveRegister = async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    email: body.email,
    name: body.name,
    passwordHash,
  });
  try {
    const savedUser = await user.save();

    request.flash('success', 'User successfully registered');
    response.redirect('/login');
  } catch (exception) {
    next(exception);
  }
};

module.exports = {
  signinPage,
  saveRegister,
};
