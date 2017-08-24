module.exports = (app, passport) => {
    app.get("/", (request, response) => {
        response.render("index.ejs");
    });

    app.get("/login", (request, response) => {
        response.render("login.ejs", { message: request.flash("loginMessage") }); 
    });

    app.get("/signup", (request, response) => {
        response.render("signup.ejs", { message: request.flash("signupMessage") });
    });

    app.get("/profile", isLoggedIn, (request, response) => {
        response.render("profile.ejs", {
            user: request.user
        });
    });

    app.get("/logout", (requqest, response) => {
        request.logout();
        request.redirect("/");
    });

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/profile",
        failureRedirect: "/signup",
        failureFlash: true
    }));

    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/profile",
        failureRedirect: "/login",
        failureFlash: true
    }));
}

const isLoggedIn = (request, response, next) => {
    if(request.isAuthenticated()) {
        return next();
    }

    response.redirect("/");
}