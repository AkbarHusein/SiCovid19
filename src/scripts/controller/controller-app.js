const Handler = {
  homePage: async (req, res) => {
    res.render('home', {
      layout: '../layout/main-layout',
      page: 'home',
      title: 'SiCovid19 | Home',
      url: '/',
      username: req.session.username,
    });
  },
  forumPage: (req, res) => {
    res.render('forum', {
      layout: '../layout/main-layout',
      page: 'forum',
      title: 'SiCovid19 | Forum',
      url: '/',
      username: req.session.username,
    });
  },
};

module.exports = Handler;
