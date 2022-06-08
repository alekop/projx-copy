const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    entry: path.resolve(appDirectory, "src/index.ts"), //path to the main .ts file
    output: {
        filename: "all.js", //name for the javascript file that is created/compiled in memory
        path: path.resolve('./dist'),
        clean: true
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            fs: false,
            path: false
        }
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                // exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: ["image-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'www/index.html'})
    ]
};

