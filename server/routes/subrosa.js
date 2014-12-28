'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Subrosa, app, auth, database) {

  app.get('/subrosa/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/subrosa/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/subrosa/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/subrosa/example/render', function(req, res, next) {
    Subrosa.render('index', {
      package: 'subrosa'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
