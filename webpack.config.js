require('webpack');

var path = require('path');
var MinifyPlugin = require("babel-minify-webpack-plugin");

var config = {
    entry: './src/BootstrapCookieConsent.js',

    output: {
        library: 'BootstrapCookieConsent',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bootstrap-cookie-consent.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?![js\-cookie])/,
                use: ['babel-loader']
            }
        ]
    },

};

var devConfig = Object.assign({}, config, {
    mode: 'development',
    output: Object.assign({}, config.output, {
        filename: 'bootstrap-cookie-consent.dev.js'
    }),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        openPage: 'demo.html',
        port: 3000
    },
});
var prodConfig = Object.assign({}, config,{
    mode: 'production',
    output: Object.assign({}, config.output, {
        filename: 'bootstrap-cookie-consent.js'
    }),
    optimization: {
		minimize: false
	}
});
var minConfig = Object.assign({}, config,{
    mode: 'production',
    output: Object.assign({}, config.output, {
        filename: 'bootstrap-cookie-consent.min.js'
    }),
    plugins:
        [
            new MinifyPlugin({}, {comments: false})
        ]
});

// Return Array of Configurations
module.exports = [
    devConfig, prodConfig, minConfig,
];
