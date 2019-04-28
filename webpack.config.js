const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const HtmlWebpackPlugin  = require('html-webpack-plugin');//自动生成 index.html

module.exports = {
    entry : {
      main : path.resolve(__dirname,'./src/index.js'),
   },
    output:{
        path:path.resolve(__dirname,'./dist/'),
        filename: 'js/bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {test: /\.css$/,
              exclude:/^node_modules$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                  { loader: 'css-loader', options: {sourceMap: true,importLoaders: 1 } }
                ]
              })
            },
          {test: /\.sass$/,
            exclude:  /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                { loader: 'css-loader', options: {sourceMap: true,importLoaders: 1 }},
                { loader: 'sass-loader'},
              ]
            })
          },
            {test:/\.(png|jpg|gif|svg)(\?.*)?$/,
              exclude: /node_modules/,
              use: [
                {
                  //加载url-loader;
                  loader : 'url-loader',
                  options : {
                    //20000,当然css文件体积更大;
                    limit : 20000,
                    outputPath:'images/',
                    publicPath: '../images/',
                    name: '[name].[hash:7].[ext]'
                  }
                },
                {
                  //压缩图片(另一个压缩图片：image-webpack-loader);
                  loader : 'img-loader?minimize&optimizationLevel=5&progressive=true'
                },
              ]
            },
            {
              test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
              exclude: /node_modules/,
              use: [
                {
                  //加载url-loader ;
                  loader : 'file-loader',
                  options : {
                    limit: 20000,
                    outputPath:'media/',
                    name: '[name].[hash:7].[ext]'
                  }
                }
              ]
            },
            {
              test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
              exclude: /node_modules/,
              use: [
                {
                  //加载file-loader ;
                  loader : 'file-loader',
                  options : {
                     limit: 20000,
                    outputPath:'fonts/',
                    //设置字体;
                    name:'[name].[hash:7].[ext]'
                  }
                }
              ]
            },
            {test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react','stage-0'],
                  compact: 'false',
                  plugins: [
                    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
                  ]
                }
              }
            }
        ]
    },
  plugins:[
    new ExtractTextPlugin({filename:'css/[name].css'}),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      title:"demo",
      filename: '/index.html', //生成的html存放路径，相对于 path
      template:path.join(__dirname,'src/index.html'), //html模板路径
      hash: true,    //为静态资源生成hash值
    }),
  ],
  resolve: {
    extensions: [ '.js', '.json','.sass','jsonp'],//后缀名自动补全
  },
  devServer:{
    contentBase: path.join(__dirname, 'dev'), //设置启动文件目录;
    inline:true,//开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
    hot: true,//设置热更新(可在package.json scripts 里设置 npm run xxx);
    port:8000,//设置端口号；
    /*open:true, //自动拉起浏览器*/
  }
};
