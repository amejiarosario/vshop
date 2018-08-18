<template>
  <section class="marketplace">
    <div class="card" v-for="product in products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      products: state => state.products.all,
    }),
  },
};
</script>
