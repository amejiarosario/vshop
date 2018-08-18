
import { mapGetters } from 'vuex';
<template>
  <span class="cart-summary">
    {{ products.length }} items for ${{ total }}
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartSummary',

  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
};
</script>

