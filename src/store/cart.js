export default {
  namespaced: true,

  state: {
    status: null, // null, successful, failed
    items: [], //  [{ productId, quantity }]
  },

  getters: {
    cartProducts: (state, getters, rootState) => state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(item => item.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity,
      };
    }),

    cartTotalPrice: (state, getters) => getters.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0), /* eslint-disable-line max-len */
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
  },
};
