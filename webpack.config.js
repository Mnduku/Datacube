
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none',
  module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          // keep original filenames and copy images to `dist/img/`
          filename: './[name][ext]', 
        },
        },
        
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            // keep original filenames and copy images to `dist/img/`
            filename: './[name][ext]', 
          },
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader'],
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader'],
        },
      ],
  }
};

