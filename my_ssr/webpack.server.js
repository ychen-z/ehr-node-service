const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
            // 服务端渲染不能用 style-loader，因为 node 没有 document 对象，无法插入 style 标签
            // 服务端本来就不能渲染 dom，只是提供 html/css/js 代码给浏览器，交给浏览器去渲染
            // 服务端返回的 html 源码里，没有 style 标签
            // 而在浏览器中的 html 源码里，有 style 标签，是通过 js 插入进去的
            'isomorphic-style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            'less-loader'
        ]
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(config, serverConfig)