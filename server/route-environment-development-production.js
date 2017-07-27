const app = require('./app-setup.js');

app.get("/", function(req, res) {
        if (process.env.PORT) {// check to see if we are working in production
            res.render("index", {environment: "heroku"}); // Render the main donation page using pug
        } else {
            res.render("index", {environment: "development"}); // Render the main donation page using pug
        }
    }
    //res.sendFile(path.join(__dirname, 'client', 'index.html'))
    // res.render("index.html", {stripeData.publishableKey})
);