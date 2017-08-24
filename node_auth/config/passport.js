const LocalStrategy = require("passport-local").Strategy;
const User = require("../app/models/user");

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => {
            done(error, user);
        });
    });

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, (request, email, password, done) => {
        process.nextTick(() => {
            User.findOne({ "local.email": email }, (error, user) => {
                if (error) {
                    return done(error);
                }
                if (user) {
                    return done(null, false, request.flash("signupMessage", "That email is already taken."));
                } else {
                    const newUser = new User();

                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save((error) => {
                        if (error) {
                            throw error;
                        }
                        return done(null, newUser);
                    })
                }
            });
        });
    }));

    passport.use("local-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, (request, email, password, done) => {
        User.findOne({ "local.email": email}, (error, user) => {
            if (error) {
                return done(error);
            }

            if(!user) {
                return done(null, false, request.flash("loginMessage", "No user found:"));
            } 
            
            if (!user.validPassword(password)) {
                return done(null, false, request.flash("loginMessage", "Oops! Wrong password."));
            }

            return done(null, user);
        });
    }));
}