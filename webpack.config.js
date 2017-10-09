const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, './src/app.module.ts'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api/v1.0': {
        target: 'http://localhost:3000',
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
