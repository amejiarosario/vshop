import api from './api';

export default {
  namespaced: true,

  state: {
    items: [], //  [{ id, quantity }]
    status: null, // null, successful, failed
    details: null, // status details
  },

  getters: {
    cartProducts: (state, getters, rootState) => state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(item => item.id === id);
      return {
        name: product.name,
        price: product.price,
        quantity,
      };
    }),

    cartTotalPrice: (state, getters) => getters.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0), /* eslint-disable-line max-len */

    cartTotalItems: (state, getters) => getters.cartProducts.reduce((total, product) => total + product.quantity, 0), /* eslint-disable-line max-len */
  },

  mutations: {
    pushProductToCart(state, { id }) {
      state.items.push({
        id,
        quantity: 1,
      });
    },

    incrementItemQuantity(state, { id }) {
      const cartItem = state.items.find(item => item.id === id);
      cartItem.quantity += 1;
    },

    setCartItems(state, { items }) {
      state.items = items;
    },

    setCheckoutStatus(state, { status, details }) {
      state.status = status;
      state.details = details;
    },
  },

  actions: {
    addProductToCart({ state, commit }, product) {
      commit('setCheckoutStatus', { status: null });

      if (product.inventory > 0) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          commit('pushProductToCart', { id: product.id });
        } else {
          commit('incrementItemQuantity', cartItem);
        }
        // remove 1 item from stock
        commit('products/decrementProductInventory', { id: product.id }, { root: true });
      }
    },

    checkout({ commit, state }, products) {
      const savedCartItems = [...state.items];
      commit('setCheckoutStatus', { status: null });
      // empty cart
      commit('setCartItems', { items: [] });
      api.buyProducts(
        products,
        () => commit('setCheckoutStatus', { status: 'successful' }),
        () => {
          commit('setCheckoutStatus', { status: 'failed' });
          // rollback to the cart saved before sending the request
          commit('setCartItems', { items: savedCartItems });
        },
      );
    },

    paymentReceived({ commit }, transaction) {
      commit('setCheckoutStatus', { status: 'successful', details: transaction.id });
      commit('setCartItems', { items: [] });
      console.log({ transaction });
    },

    paymentFailed({ commit }, error) {
      commit('setCheckoutStatus', { status: 'failed', details: error.message });
    },
  },
};
