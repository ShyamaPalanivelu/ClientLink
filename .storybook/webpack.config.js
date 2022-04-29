const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  // fonts
  config.plugins.push(
    new CopyWebpackPlugin({patterns: [
      { 
        from: path.resolve(__dirname, '../src/styles/fonts/OpenSauce'),
        to: 'fonts/OpenSauce' 
      },
    ]}),
  );

  return config;
};
