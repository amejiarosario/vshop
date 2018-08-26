import Vue from 'vue';
import colors from 'vuetify/es5/util/colors';
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
  VBadge,
  VCard,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

// https://vuetifyjs.com/en/theme-generator
const blueGreyOrangeTheme = {
  primary: colors.blueGrey.base,
  secondary: colors.blueGrey.lighten2,
  accent: colors.amber.darken1,
  error: colors.deepOrange.darken1,
  warning: colors.yellow.darken4,
  info: colors.blue.base,
  success: colors.green.base,
};

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
    VBadge,
    VCard,
  },
  theme: blueGreyOrangeTheme,
});
