var path = require('path')
module.exports = {
	entry: path.resolve(__dirname, 'www/app/app.js'),
	output: {
		path: path.resolve(__dirname, 'www/build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			 { test: /\.js$/, exclude: [/lib/, /node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
			 { test: /\.less$/, loader: 'style!css!less' },
			 { test: /\.css$/, loader: 'style!css' }
		]
	}
}
