<template>
  <v-app id="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheMain from "./components/layout/TheMain";
import TheFooter from "./components/layout/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style>
#app {
  background: #f5f5f5;
}
</style>
