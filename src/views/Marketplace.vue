<template>
  <v-layout wrap>
    <v-flex md4 xl3 v-for="product in products" :key="product.id">
      <v-card>
        <!-- <v-card-text>one</v-card-text> -->
        <v-card-media
          :src="'https://placeimg.com/360/200/tech?id=' + product.id"
          height="200px"></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.name }}</h3>
            <div>Consequat est reprehenderit quis et reprehenderit enim.
              Cupidatat dolor adipisicing velit veniam anim adipisicing elit.
              Cupidatat quis aliquip cupidatat aliquip. Veniam laboris ipsum eu
              deserunt est aliquip laborum exercitation occaecat do labore. </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat class="title" color="info">
            {{ product.price | currency }}
          </v-btn>

          <v-btn flat color="accent"
            :disabled="!product.inventory"
            @click="addProductToCart(product)">

            <span v-if="product.inventory">Add to Cart</span>
            <span v-else style="text-decoration: line-through">Sold out</span>

          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Cart from '@/components/Cart.vue';

export default {
  name: 'marketplace',

  components: {
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
