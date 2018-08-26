<template>
  <v-app>

    <v-toolbar dark color="primary">
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

      <v-toolbar-title class="white--text">
        <span class="title ml-3 mr-5">Quveta</span>

        <v-text-field
          solo-inverted
          flat
          hide-details
          label="Search"
          prepend-inner-icon="search"></v-text-field>
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer> -->

    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer></v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',
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
