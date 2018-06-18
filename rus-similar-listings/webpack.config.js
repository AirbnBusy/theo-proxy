const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		path: DIST_DIR,
		filename: 'similar-listings.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader"
        }
			},
			{
				test: /\.css$/,
				use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
			}
		]
	}
};
