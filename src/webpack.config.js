const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
