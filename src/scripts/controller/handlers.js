const Handler = {
  homePage: async (req, res) => {
    res.render('home', {
      layout: '../layout/main-layout',
      page: 'home',
      title: 'SiCovid19 | Home',
    });
  },
  forumPage: (req, res) => {
    res.render('forum', {
      layout: '../layout/main-layout',
      page: 'forum',
      title: 'SiCovid19 | Forum',
    });
  },
  loginPage: (req, res) => {
    res.render('login', {
      layout: '../layout/main-layout',
      page: 'login',
      title: 'SiCovid19 | Login',
    });
  },
  signinPage: (req, res) => {
    res.render('signin', {
      layout: '../layout/main-layout',
      page: 'signin',
      title: 'SiCovid19 | SignIn',
    });
  },
  /* * Login */
  login: (req, res) => {
    console.log(req.body);
  },
  /* * Signin */
  signin: (req, res) => {
    console.log(req.body);
  },
};

module.exports = Handler;
