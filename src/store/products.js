export default {
  namespace: true,
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
  mutations: {

  },
  actions: {

  },
  getters: {
    getProductById: state => id => state.all.find(item => item.id === id),
  },
};
