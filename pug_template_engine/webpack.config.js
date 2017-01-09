module.exports = {
    entry: "./frontend/app.js",
    output: {
        path: __dirname + "/public/scripts/",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" }
        ]
    }
};