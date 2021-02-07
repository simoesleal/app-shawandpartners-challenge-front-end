<template>
  <v-app-bar
    id="header"
    app
    fixed
    clipped-left
    elevation="1"
    :color="'#657b52'"
  >
    <v-app-bar-nav-icon color="white" @click.stop="setMenuDrawer" />
    <v-toolbar-title>
      <span class="my-text-header">S&P</span>
    </v-toolbar-title>
    <BaseLinearProgress
      :active="this.$store.state.Loader.linearLoaderStatus"
      :color="'lime lighten-4'"
      bottom
      fixed
      indeterminate
    />
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TheHeader",

  computed: {
    ...mapState("Loader", ["linearLoaderStatus"]),
  },

  methods: {
    ...mapActions("HeaderLayout", ["setMenuDrawer"]),
  },
};
</script>

<style scoped>
.my-text-header {
  color: white;
}
</style>
