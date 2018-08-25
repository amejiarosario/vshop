export default {
  namespaced: true,

  state: {
    all: [
      {
        id: 1,
        name: 'Building an E-Commerce Application with Vue.js and Node',
        price: 9.85,
        inventory: false,
        author: 'Adrian Mejia',
      },
      {
        id: 5,
        name: 'Algorithms and Data Structures for Beginners',
        price: 9.85,
        inventory: false,
        author: 'Adrian Mejia',
      },
      {
        id: 2,
        name: 'Building an E-Commerce Application with MEAN',
        price: 5.40,
        inventory: 10,
        author: 'Adrian Mejia',
        description: 'MEAN stands for MongoDB, Express, AngularJS, and Node.js. It is a combination of a NoSQL database, MongoDB, with a couple of JavaScript web application frameworks, namely Express.js and Angular.js. These run on Node.js.',
        images: [
          'https://images-na.ssl-images-amazon.com/images/I/51LgqoHIRML.jpg',
          'https://via.placeholder.com/350x150/ccc/0f0?text=Something+cool+for+you',
        ],
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
