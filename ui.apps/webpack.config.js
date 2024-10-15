const path = require('path');

module.exports = {
  entry: './src/main/content/jcr_root/apps/aem-react-with-backend/clientlibs/clientlib-react/js/index.js',
  output: {
    filename: 'app.bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'src/main/content/jcr_root/apps/aem-react-with-backend/clientlibs/clientlib-react/js'),
    publicPath: 'src/main/content/jcr_root/apps/aem-react-with-backend/clientlibs/clientlib-react/'
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
    extensions: ['.js', '.jsx'],
  },
};