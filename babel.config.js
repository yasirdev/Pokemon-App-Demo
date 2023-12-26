module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@reduxStore': './src/reduxStore',
          '@shared': './src/shared',
          '@views': './src/views',
        },
      },
    ],
  ],
};
