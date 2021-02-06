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
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TheHeader",
  methods: {
    ...mapActions("HeaderLayout", ["setMenuDrawer"]),
  },
  computed: {},
};
</script>

<style scoped>
.my-text-header {
  color: white;
}
</style>
