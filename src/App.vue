<template>
  <v-app>
    <v-toolbar
      app
      dark
    >
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      fixed: true,
      title: 'Vuetify.js '
    }
  },
}
</script>

