// IMPORTS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// LOADERS
const jsLoader = {
    test: /\.jsx$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};
const cssLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
};


// PLUGINS
const htmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html'
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [jsLoader, cssLoader]
    },
    plugins: [htmlPlugin]
};