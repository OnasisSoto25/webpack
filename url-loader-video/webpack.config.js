var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config ={
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/index.js') ,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './bundle.js',
        publicPath: "./dist/"
    },
    module:{
        rules:[
            {
                test: /\.(jpg|png|png|woff|eot|ttf|svg)$/,
                use:{
                    loader: "url-loader",
                    options: {
                        limit: 100000
                    }
                }
            },
            {
                test: /\.(mp4| webm)$/,
                use:{
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                // Aqui van con los loaders
                // test: que tipo de archivo quiero reconocer,
                // use que loader se va  a encargar del archivo
                test: /\.js$/,
                // use:[
                //     'style-loader','css-loader'
                // ]
                use: {
                    loader: 'babel-loader',
                }
            },
            //Css loaders
            {
                // Aqui van con los loaders
                // test: que tipo de archivo quiero reconocer,
                // use que loader se va  a encargar del archivo
                test: /\.css$/,
                // use:[
                //     'style-loader','css-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        //aqui van los plugins
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
};

module.exports = config;