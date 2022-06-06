const Handler = {
  homePage: async (req, res) => {
    res.render('home', {
      layout: '../layout/main-layout',
      page: 'home',
    });
  },
  forumPage: (req, res) => {
    res.render('forum', {
      layout: '../layout/main-layout',
      page: 'forum',
    });
  },
  loginPage: (req, res) => {
    res.render('login', {
      layout: '../layout/main-layout',
      page: 'login',
    });
  },
  signinPage: (req, res) => {
    res.render('signin', {
      layout: '../layout/main-layout',
      page: 'signin',
    });
  },
};

module.exports = Handler;
