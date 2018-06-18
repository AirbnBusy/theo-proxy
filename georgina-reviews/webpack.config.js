var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};


// module.exports = {
//   entry: {
// +     vendor: ['styled-components'],
//     app1: './src/app.1.js',
//     app2: './src/app.2.js',
//   },
//   plugins: [
// +     new webpack.optimize.CommonsChunkPlugin({
// +       name: "vendor",
// +       minChunks: Infinity,
// +     }),
//   ]
// }
//