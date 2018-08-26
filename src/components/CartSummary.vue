
import { mapGetters } from 'vuex';
<template>
  <span class="cart-summary">
    <router-link to="/checkout">
      <v-badge right overlap color="orange">
        <span slot="badge" v-if="totalItems">{{ totalItems }}</span>
        <v-icon>
          shopping_cart
        </v-icon>
      </v-badge>
    </router-link>
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

