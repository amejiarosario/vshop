export default {
  namespaced: true,

  state: {
    all: [
      {
        id: 1, name: 'Building an E-Commerce Application with Vue (eBook)', price: 9.85, inventory: false,
      },
      {
        id: 2, name: 'Building an E-Commerce Application with MEAN', price: 5.40, inventory: 10,
      },
      {
        id: 3, name: 'vShop Mugs', price: 6.35, inventory: 10,
      },
      {
        id: 4, name: 'vShop T-shirts', price: 15.50, inventory: 10,
      },
    ],
  },

  getters: {
    getProductById: state => id => state.all.find(item => item.id === id),
  },

  mutations: {
    setProducts(state, products) {
      state.all = products;
    },

    decrementProductInventory(state, { id }) {
      const product = state.all.find(item => item.id === id);
      product.inventory -= 1;
    },
  },

  actions: {

  },
};
