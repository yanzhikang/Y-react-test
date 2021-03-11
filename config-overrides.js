
// const {injectBabelPlugin} = require('react-app-rewired');
// const {
//     override,
//     // ...
//     addWebpackAlias
// } = require('customize-cra')
// const path = require('path')
// module.exports = function override(config, env) {
//     addWebpackAlias( {
//         ...config.resolve.alias,
//         "@": path.resolve(__dirname, 'src'),
//         "@pages": path.resolve(__dirname, 'src/pages')
//     })
//     // return config;
// };
// module.exports = override(
//     // ...
//     // 路径别名
//     addWebpackAlias({
//                 "@": path.resolve(__dirname, 'src'),
//                 "@pages": path.resolve(__dirname, 'src/pages')
//     })
//   )

const {
    override,
    // ...
    addWebpackAlias
  } = require('customize-cra')
  const path = require('path')
  
  module.exports = override(
    // ...
    // 路径别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src')
    })
  )