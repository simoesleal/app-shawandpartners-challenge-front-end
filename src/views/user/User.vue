<template>
  <div id="user">
    <SearchField></SearchField>
    <DataPanel></DataPanel>
    <div v-if="users && users.length > 1">
      <NavigationButton></NavigationButton>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchField from "../../components/user/SearchField";
import DataPanel from "../../components/user/DataPanel";
import NavigationButton from "../../components/user/NavigationButton";

export default {
  name: "User",

  components: {
    SearchField,
    DataPanel,
    NavigationButton
  },

  data: () => ({}),

  computed: {
    ...mapState("User", ["users", "initialSince", "initialPerPage"])
  },

  methods: {
    ...mapActions("User", ["getListOfUsers", "resetStore"])
  },

  created() {
    if (!this.users || this.users.length === 0) {
      this.getListOfUsers({
        since: this.initialSince,
        per_page: this.initialPerPage
      });
    } else if (this.users.length === 1) {
      this.resetStore();
      this.getListOfUsers({
        since: this.initialSince,
        per_page: this.initialPerPage
      });
    }
  }
};
</script>

<style scoped></style>
