var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app/App.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename:"bundle.min.js"
    },
    resolve: {
        root: path.resolve(__dirname, "app"),
        alias: {
            layout: 'components/Layout',
            header: 'components/Header',
            footer: 'components/Footer'
        },
        extensions: ['', '.js']
    },
    module:{
        loaders: [
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets:['react','es2015','stage-0'],
                    plugins:['react-html-attrs','react-hot-loader/babel']
                },
                exclude:/node_modules/,
                include: path.join(__dirname, 'app') 
            },
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: 
       debug ? 
          [
             new ExtractTextPlugin('main.css',{
                 allChunks: true
             })
          ] : 
          [
             new webpack.optimize.DedupePlugin(),
             new webpack.optimize.OccurenceOrderPlugin(),
             new webpack.optimize.UglifyJsPlugin({ 
                 minimize: true,
                 mangle: false, 
                 sourcemap: false 
             }),
             new ExtractTextPlugin('main.css',{
                 allChunks: true
             })    
          ]
}