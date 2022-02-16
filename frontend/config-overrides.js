// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }
const path = require('path')
const { override, babelExclude} = require('customize-cra')
module.exports = override(babelExclude([path.resolve("./node_modules/mapbox-gl/dist/mapbox-gl.js")]));