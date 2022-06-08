const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './www'
    },
    plugins: [
        new DefinePlugin({
            _DEBUG: true
        })
    ]
});
