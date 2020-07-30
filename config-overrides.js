const {
  override,
  fixBabelImports,
  disableEsLint,
  addLessLoader,
  addWebpackPlugin,
  addWebpackAlias
} = require('customize-cra');

const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path')

module.exports = override(
  disableEsLint(), // disabled in webpack
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    // ['@']: path.resolve(__dirname, 'src')
    "components": path.resolve(__dirname, "src/components/"),
    "layouts": path.resolve(__dirname, "src/layouts/"),
    // "store": "./redux/store",
    // "reducers": "./redux/reducers",
    // "actions": "./redux/actions",
    // "sagas": "./redux/sagas",
    "utils": path.resolve(__dirname, "src/utils/"),
    // "static": "./static"
  }),
  fixBabelImports("antd", {
    libraryDirectory: "es",
    style: true
  }),
  fixBabelImports("lodash", {
    libraryDirectory: "",
    camel2DashComponentName: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#4ab19d', // primary color for all components
      '@link-color': '#4ab19d', // link color
      '@success-color': '#52c41a', // success state color
      '@warning-color': '#faad14', // warning state color
      '@error-color': '#f5222d', // error state color
      '@font-size-base': '14px', // major text font size
      '@heading-color': '#333333', // heading text color
      '@text-color': '#444444', // major text color
      '@text-color-secondary': '#555555', // secondary text color
      '@disabled-color': '#666666', // disable state color
      '@border-radius-base': '4px', // major border radius
      '@border-color-base': '#d9d9d9', // major border color
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
    },
  }),
);