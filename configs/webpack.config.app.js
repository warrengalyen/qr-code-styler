const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.resolve(__dirname, "./..");
const srcPath = path.resolve(rootPath, "src");
const appPath = path.resolve(rootPath, "app");
const distPath = path.resolve(rootPath, "dist");

const config = {
    entry: appPath + "/index.js",
    output: {
        path: distPath,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: appPath,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                include: appPath,
                loader: "file-loader",
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: appPath + "/index.html",
        })
    ],
    resolve: {
        alias: {
            "qr-code-styler": srcPath + "/index.js",
        }
    }
};