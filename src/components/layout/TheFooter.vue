<template>
  <v-footer app :color="'#657b52'" id="the-footer" inset>
    <span class="text-caption ma-1 my-text-footer font-weight-bold"
      ><span>S&P</span> &copy; {{ new Date().getFullYear() }}</span
    >
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
#the-footer {
  justify-content: flex-end;
  padding-right: 10px;
}

.my-text-footer {
  color: #aac173;
}
</style>
