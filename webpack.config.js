const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js",".jsx"]
    },
    entry: path.join(__dirname,"src","index.js"),
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"src","index.html")
        }),
        new Dotenv()
    ],
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        historyApiFallback: true
    }
}