<template>
  <section class="marketplace">
    <div class="card" v-for="product in products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    },
  },
};
</script>
