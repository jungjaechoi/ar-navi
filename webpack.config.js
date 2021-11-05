const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: "./server/assets/js/main.js",
        jqeury: "./server/assets/vendor/jquery/jquery.min.js",
        bootstrap: "./server/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        counterup: "./server/assets/vendor/counterup/counterup.min.js",
        carousel: "./server/assets/vendor/owl.carousel/owl.carousel.min.js",
        aos: "./server/assets/vendor/aos/aos.js"
    }, 
    mode: "development",
    plugins: [new MiniCssExtractPlugin({
        filename: "css/styles.css",
    })],
    output: {
        filename: "[name]_bundle.js",
        path: path.resolve(__dirname, "assets", "js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", {targets: "defaults"}]],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};