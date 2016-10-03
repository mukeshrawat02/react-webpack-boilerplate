module.exports = {
    entry:"./app/App.js",
    output:{
        path: __dirname,
        filename:"./public/bundle.js"
    },
    resolve:{
        extensions: ['', '.js']
    }
}