var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config ={
    mode: 'development',
    entry: {
      home: path.resolve(__dirname, 'src/js/index.js') ,
      contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './[name].js',
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
                test: /\ .json$/,
                use: 'json-loader'
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
            },
            {
                // Aqui van con los loaders
                // test: que tipo de archivo quiero reconocer,
                // use que loader se va  a encargar del archivo
                test: /\.scss$/,
                // use:[
                //     'style-loader','css-loader'
                // ]
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [
        //aqui van los plugins
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    optimization: {
        splitChunks: {
            name: "common",
            chunks: "initial"
        }
    }
};

module.exports = config;