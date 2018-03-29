const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglify-js-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./src/index.js'],
    output: {path: path.resolve(__dirname, "builds"), filename: 'bundle.js'},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader!sass-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "stylesheets/style.css",
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]
};