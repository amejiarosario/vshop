
import { mapGetters } from 'vuex';
<template>
  <span class="cart-summary">
    {{ totalItems }} items for ${{ totalPrice }}
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartSummary',

  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      totalPrice: 'cartTotalPrice',
      totalItems: 'cartTotalItems',
    }),
  },
};
</script>

