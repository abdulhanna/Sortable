const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/index.js',  // Adjust the entry point if needed
  output: {
    filename: 'bundle.js',  // Adjust the output filename if needed
    path: path.resolve(__dirname, 'dist'),  // Adjust the output path if needed
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Add .jsx to the list of extensions
  },
};
