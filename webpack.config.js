const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:  'babel-loader',
            },
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from:'./src/img', to:'img'} 
            ]
        }),
    ],
    mode: 'development',
    output: {
        clean: true
    },
    devServer: {
        static: './dist'
    }
};