var passport = require('passport')
var User = require('../models/user')
var LocalStrategy = require('possport-local').Strategy


passport.serializeUser(function(user, done) {
	done(null, user.id)
})

passport.deserializeUser(function(id, done) {
	User.findId(id, function(err, user) {
		done(err, user)
	})
})