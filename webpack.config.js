var webpack = require('webpack');

var basePass = '/webroot';
var paths = {
    script: basePass + '/js',
    css: basePass + '/css',
    dist: basePass + '/dist'
};
module.exports = {
    context: __dirname + '/webroot',
    entry: {
        js: './js/app.js'
    },
    output: {
        path: __dirname + '/webroot/dist',
        filename: './js/app.js'
    },
    plugins: [
        new webpack.ProvidePlugin(
            {
                jQuery: "jquery",
                $: "jquery"
            }
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'url-loader'
            }
        ]
    },
    devtool: 'inline-source-map'
};
