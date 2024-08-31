const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "CategoryAdd",
  filename:"remoteEntry.js",
    exposes: {
      './CategoryAdd': './projects/micro-front-end/feature/category-add/category-add.component.ts',
    },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});