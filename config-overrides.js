const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
//https://github.com/timarney/react-app-rewired/
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#faad14' },
  }),
  addWebpackAlias({
    ["@components"]: path.resolve(__dirname, "src/components"),
    ["@pages"]: path.resolve(__dirname, "src/pages"),
    ["@utils"]: path.resolve(__dirname, "src/utils"),
    ["@src"]: path.resolve(__dirname, "src")
  })
);