<template>
  <v-app id="app">
    <TheHeader />
    <TheMenu />
    <TheMain />
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheMenu from "./components/layout/TheMenu";
import TheMain from "./components/layout/TheMain";
import TheFooter from "./components/layout/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMenu,
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
