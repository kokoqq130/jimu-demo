module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          chrome: '49',
          ios: '10',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
