import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VTextField,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VTextField,
  },
  theme: {
    primary: '#344955', // Bue 700 | #37474F blue-grey darken-3
    secondary: '#F9AA32', // Orange 500 | amber #FFC107
    accent: '#82B1FF', // amber accent-1 #FFE57F
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FF5722', // FFC107 |  red lighten-4 #FFCDD2 | deep-orange  #FF5722
  },
});
