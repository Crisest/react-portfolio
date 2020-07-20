/* craco.config.js */
const CracoLessPlugin = require('craco-less');

const primary = '#1BC0DA'
const offWhite = '#F7F7F7'
const grey = '#35393C'
const darkgrey = "#35393C"

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "primary-color": primary,
              "body-background": offWhite,
              "component-background": offWhite,
              //menu
              "menu-dark-bg": darkgrey,
              "layout-sider-background": darkgrey,
              //button
              "btn-danger-bg": darkgrey,

              "white": offWhite
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};