const User = require('../models/user');
const bcrypt = require('bcrypt');

const signinPage = async (request, response) => {
  response.render('signin', {
    layout: '../layout/main-layout',
    page: 'signin',
    message: request.flash('info'),
    classAlert: request.flash('classAlert'),
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
    await user.save();
    request.flash('info', 'Pendaftaran berhasil!');
    request.flash('classAlert', 'alert-success');
    return response.redirect('/login');
  } catch (exception) {
    request.flash('info', 'Username sudah terdaftar!');
    request.flash('classAlert', 'alert-danger');
    return response.redirect('/signin');
  }
};

module.exports = {
  signinPage,
  saveRegister,
};
