<template>
  <v-app>

    <v-toolbar dark color="primary" app absolute clipped-left>
      <!-- https://vuetifyjs.com/en/examples/layouts/googleKeep -->
      <!-- <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon> -->

      <router-link to="/">
        <img src="https://orig00.deviantart.net/43a2/f/2014/025/b/e/mesh_cube_icon_by_sascha_snowstorm-d73pi5f.png" height="38px">
      </router-link>
      <span class="title ml-3 mr-5">Quveta</span>

      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search">
      </v-text-field>

      <v-spacer></v-spacer>

      <cart-summary></cart-summary>

    </v-toolbar>

    <v-content>
      <v-container grid-list-lg>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer></v-footer>

  </v-app>
</template>

<script>
import CartSummary from '@/components/CartSummary.vue';

export default {
  name: 'App',

  components: {
    CartSummary,
  },

  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
