import Vue from "vue";
import Vuex from "vuex";
import HeaderLayout from "./modules/HeaderLayout";
import User from "./modules/User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    HeaderLayout,
    User,
  },
});
