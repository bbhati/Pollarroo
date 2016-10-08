var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack-dev-server/client?http://bbhati-ltm2.internal.salesforce.com:8080',
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
			{
				test: /\.js$/, loaders: ['react-hot-loader'] , exclude: /node_modules/
			}, 
			{
				test:  /\.js$/, loader: 'babel', query: {presets: ['react', 'es2015']}, exclude: /node_modules/ 
			},
      { test: /\.json$/, loader: 'json' }
		]        
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
