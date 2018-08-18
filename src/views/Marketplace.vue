<template>
  <section class="marketplace">
    <div class="card" v-for="product in products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
      <button :disabled="!product.inventory"
              @click="addProductToCart(product)">
        Add to cart
      </button>
    </div>

    <hr>

    <cart-summary></cart-summary>

    <hr>

    <cart></cart>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CartSummary from '@/components/CartSummary.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'marketplace',

  components: {
    CartSummary,
    Cart,
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
