const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    stats: 'detailed',
    optimization: {
        // Type name mangling screws up things like getComponent(), which rely on types
        minimize: false
    }
});
