const path = require('path')

module.exports = {
    entry: "./src/client",
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/static/"
    }
};
