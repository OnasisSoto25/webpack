var path = require('path');
const config ={
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: './bundle.js'
    }
};

module.exports = config;