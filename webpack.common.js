const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
		// publicPath: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			Popper: [ 'popper.js', 'default' ]
		})
	],
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true
					}
				}
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
};
