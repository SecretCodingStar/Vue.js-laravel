require('expose?Tether!../node_modules/tether/dist/js/tether.js');
require('expose?jQuery!../node_modules/jquery/dist/jquery.js');
require('bootstrap-loader');
require('font-awesome-webpack');

var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
