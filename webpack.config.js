const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './entry/main.js',
  output: { path: path.resolve(__dirname, 'public/build') },
  mode: devMode ? 'development' : 'production',
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  module: {
    rules: [jsRule(), cssRule(), staticFilesRule()]
  }
};

function jsRule() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
        sourceMap: devMode
      }
    }
  };
}

function cssRule() {
  return {
    test: /\.s?css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
          sourceMap: devMode,
          url: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: devMode,
          plugins: [require('autoprefixer')(), require('cssnano')()]
        }
      },
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: { sourceMap: true }
      }
    ]
  };
}

function staticFilesRule() {
  return {
    test: [
      /\.txt$/,
      /\.jpe?g$/,
      /\.png/,
      /\.gif$/,
      /\.webp/,
      /\.svg$/,
      /\.eot$/,
      /\.ttf$/,
      /\.woff2?$/
    ],
    use: {
      loader: 'url-loader',
      options: { limit: 512, name: '[name].[ext]' }
    }
  };
}
