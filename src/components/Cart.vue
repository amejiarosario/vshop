<template>
  <section class="cart">
    <table>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.quantity }} x {{ product.name }}</td>
          <td>${{ product.price }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Total of {{ cartTotalItems }} items for</td>
          <td>${{ cartTotalPrice }}</td>
        </tr>
      </tfoot>
    </table>

    <div>
      <button @click="checkout(products)">Checkout</button>
      <span v-show="status"> Checkout: {{ status }}</span>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'cart',

  computed: {
    ...mapState('cart', [
      'status',
    ]),
    ...mapGetters('cart', {
      products: 'cartProducts',
      cartTotalPrice: 'cartTotalPrice',
      cartTotalItems: 'cartTotalItems',
    }),
  },

  methods: {
    ...mapActions('cart', [
      'checkout',
    ]),
  },
};
</script>
