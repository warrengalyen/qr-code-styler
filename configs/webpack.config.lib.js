const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.resolve(__dirname, "./..");
const srcPath = path.resolve(rootPath, "src");
const libPath = path.resolve(rootPath, "lib");
const appPath = path.resolve(rootPath, "app");

const config = {
    entry: srcPath + "/index.js",
    output: {
        path: libPath,
        filename: "bell-qr-code-styler.js",
        libary: "BellQrCodeStyler",
        libaryTarget: "umd",
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: appPath,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.devtool = "inline-source-map";
        config.mode = argv.mode;
    }

    if (argv.mode === "production") {
        config.devtool = "source-map";
        config.mode = argv.mode;
    }

    return config;
}