<template>
  <section class="marketplace">
    <div class="card" v-for="product in products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
      <button @click="addProductToCart(product)">Add to cart</button>
    </div>

    <hr>

    <cart-summary></cart-summary>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CartSummary from '@/components/CartSummary.vue';

export default {
  name: 'marketplace',

  components: {
    CartSummary,
  },

  computed: {
    ...mapState({
      products: state => state.products.all,
    }),
  },

  methods: {
    ...mapActions('cart', [
      'addProductToCart',
    ]),
  },
};
</script>
