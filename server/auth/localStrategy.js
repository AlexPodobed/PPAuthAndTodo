var User = require('../api/user/user.model');
var LocalStrategy = require('passport-local').Strategy;
var strategyOptions = {usernameField: 'email',  passReqToCallback: true};

exports.login = new LocalStrategy(strategyOptions, function (req, email, password, done) {
  var searchUser = {
    email: email
  };

  User.findOne(searchUser, function (err, user) {
    if (err) return done(err);

    if (!user){
      return done(null, false, {message: "Wrong email/password"});
    }

    user.comparePasswords(password, function (err, isMatch) {
      if (err) return done(err);

      if (!isMatch)
        return done(null, false, {message: "Wrong email/password"});

      return done(null, user);
    })
  });
});

exports.register = new LocalStrategy(strategyOptions, function (req, email, password, done) {
  var searchUser = {
    email: email
  };
  User.findOne(searchUser, function (err, user) {
    if (err) return done(err);

    if (user)
      return done(null, false, {message: "Email already exist"});

    var newUser = new User({
      email: email,
      password: password,
      name: req.body.name
    });

    newUser.save(function (err) {
      done(null, newUser);
    });
  });
});
