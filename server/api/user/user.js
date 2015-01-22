var passport = require("passport");
var localStrategy = require('../../auth/localStrategy');
var createToken = require('../../auth/jwt');

exports.init = function(app){
  app.use(passport.initialize());

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.use('local-register', localStrategy.register);
  passport.use('local-login', localStrategy.login);

  app.post('/auth/register', passport.authenticate('local-register'), function(req, res){
    createToken(req.user, res);
  });
  app.post('/auth/login', passport.authenticate('local-login'), function(req, res){
    createToken(req.user, res);
  });
};
