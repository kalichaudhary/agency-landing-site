if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /flexboxgrid/
    });
    return config;
  },
};