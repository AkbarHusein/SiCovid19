const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const loginPage = async (request, response) => {
  response.render('login', {
    layout: '../layout/main-layout',
    page: 'login',
    title: 'SiCovid19 | Login',
  });
};

const loginAuth = async (request, response) => {
  const body = request.body;

  const user = await User.findOne({
    username: body.username,
  });

  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
    name: user.name,
  };

  const token = jwt.sign(userForToken, process.env.SECRETPASSWORD, {
    expiresIn: '1h',
  });

  request.session.accessToken = token;
  request.session.username = user.username;
  request.session.loggedin = true;

  response.redirect('/');
};

const logout = async (request, response) => {
  request.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    // Hapus cokie yang masih tertinggal
    response.clearCookie('secretname');
    response.redirect('/login');
  });
};

module.exports = { loginPage, loginAuth, logout };
