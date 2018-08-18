import Vue from 'vue';
import Vuex from 'vuex';

import cart from './cart';
import products from './products';
import createLogger from '../utils/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
