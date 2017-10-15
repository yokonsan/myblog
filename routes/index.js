module.exports = function (app) {
    app.get('/', function (req, res) {
      res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    // user page
    app.use('/user', require('./user'));
    // 404
    app.use(function(req, res) {
      if (!res.headersSent) {
        res.status(404).render('404');
      }
    });
  };
  