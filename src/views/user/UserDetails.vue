<template>
  <div id="user-detail">
    <DataPanel></DataPanel>
  </div>
</template>

/* */

<script>
import { mapState } from "vuex";
import DataPanel from "../../components/user_details/DataPanel";

export default {
  name: "UserDetails",

  components: {
    DataPanel
  },

  data: () => ({}),

  computed: {
    ...mapState("User", ["user", "repos"])
  },

  created() {
    if (!this.user && !this.repos) {
      this.$router.push({ name: "User" });
    }
  }
};
</script>

<style scoped></style>
