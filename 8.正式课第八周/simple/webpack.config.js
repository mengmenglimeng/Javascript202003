// 当运行webpack,在当前项目需要这个webpack.config.js配置文件来配置webpack;
// webpack运行时基于node的；也就是这个js最后是在node环境下运行的；
// webpack的打包，压缩，编译这个规则都是通过这个webpack.config.js;
module.exports = {
    // production : 生产模式 压缩的代码
    mode:"development",// 开发模式 （不压缩）;
    // mode:"production",
    devtool:"eval-source-map",// 浏览器调试
    entry:__dirname+"/app/main.js",// 这个地方用绝对路径，webpack处理文件的入口
    output:{
        path:__dirname+"/public",//打包之后的文件存储的路径
        filename:"bundle.js"// 打包之后的js的文件名；
    }
    // 多入口和多出口配置方式
    // entry:{
    //     main:__dirname+"/app/main.js",
    //     greeter:__dirname+"/app/greeter.js"
    // },
    // output:{
    //     path:__dirname+"/public",
    //     filename:'[name].js'
    // }
}