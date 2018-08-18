import api from './api';

export default {
  namespaced: true,

  state: {
    status: null, // null, successful, failed
    items: [], //  [{ id, quantity }]
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

    setCheckoutStatus(state, status) {
      state.status = status;
    },
  },

  actions: {
    addProductToCart({ state, commit }, product) {
      commit('setCheckoutStatus', null);

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
      commit('setCheckoutStatus', null);
      // empty cart
      commit('setCartItems', { items: [] });
      api.buyProducts(
        products,
        () => commit('setCheckoutStatus', 'successful'),
        () => {
          commit('setCheckoutStatus', 'failed');
          // rollback to the cart saved before sending the request
          commit('setCartItems', { items: savedCartItems });
        },
      );
    },
  },
};
