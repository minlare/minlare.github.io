const webpack = require('webpack');

module.exports = {
    entry: './minlare.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};