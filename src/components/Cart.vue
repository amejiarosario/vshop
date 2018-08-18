<template>
  <table>
    <tbody>
      <tr v-for="product in cartProducts" :key="product.id">
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'cart',

  computed: {
    ...mapGetters('cart', {
      cartProducts: 'cartProducts',
      cartTotalPrice: 'cartTotalPrice',
      cartTotalItems: 'cartTotalItems',
    }),
  },
};
</script>
