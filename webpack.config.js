// IMPORTS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// LOADERS
const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'babel-loader'
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
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [typescriptLoader, cssLoader]
    },
    plugins: [htmlPlugin]
};