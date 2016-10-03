var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry:"./app/App.js",
    output:{
        path: path.resolve(__dirname, "public"),
        filename:"bundle.js"
    },
    resolve:{
        extensions: ['', '.js','.jsx','.scss']
    },
    module:{
        loaders:[
            {
                loaders: ['react-hot', 'babel-loader'],
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/,
                exclude:/node_modules/
            },
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: debug ? 
             [
                 new ExtractTextPlugin('main.css',{
                 allChunks: true
                })
             ] : 
             [
                 new webpack.optimize.DedupePlugin(),
                 new webpack.optimize.OccurenceOrderPlugin(),
                 new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
                 new ExtractTextPlugin('main.css',{
                    allChunks: true
                 })
             ]
}