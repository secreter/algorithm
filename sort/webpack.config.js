module.exports = {
  entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "index.js"//打包后输出文件的文件名
  },
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module:{
  	loaders: [
  		{
  			test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015']
        }
  		}
  	]
  }
}