import HttpConnection from "../../rest/index";
import { GET_USERS } from "../../rest/uri/User";
import { HTTP_OK, SERVICE_UNAVAILABLE_DETAILS } from "../../utils/Constants";

const initialState = () => ({
  users: null,
  user: null,
  repos: null,
  uriFilters: "",
});

const state = initialState;

const mutations = {
  RESET(state) {
    const clearState = initialState();
    Object.keys(clearState).forEach((key) => {
      state[key] = clearState[key];
    });
  },

  SET_URI_FILTERS: (state, value) => {
    if (value) {
      if (state.uriFilters.length <= 0) {
        state.uriFilters = `?${value}`;
      } else {
        state.uriFilters += `&${value}`;
      }
    } else {
      state.uriFilters = "";
    }
  },

  SET_USERS: (state, value) => {
    state.users = value;
  },

  SET_USER: (state, value) => {
    state.user = value;
  },

  SET_REPO: (state, value) => {
    state.repos = value;
  },
};

const actions = {
  resetStore: ({ commit }) => commit("RESET"),

  /**
   * @description create the URI for the specific filters.
   */
  async setUriFilters({ commit }, payload) {
    const { since, per_page } = payload;
    if (since) commit("SET_URI_FILTERS", `since=${since}`);
    if (per_page) commit("SET_URI_FILTERS", `per_page=${per_page}`);
  },

  /**
   * @description Get the list of users from github.
   */
  async getListOfUsers({ commit, dispatch, state }, { since, per_page }) {
    commit("SET_URI_FILTERS", null);
    commit("SET_USERS", null);
    dispatch("Loader/setStatus", true, { root: true });
    dispatch("setUriFilters", { since, per_page });
    let response;
    try {
      response = await HttpConnection.connection.get(
        `${GET_USERS}${state.uriFilters}`
      );
      commit("SET_URI_FILTERS", null);
      if (response && response.data.code === HTTP_OK) {
        dispatch("Loader/setStatus", false, { root: true });
        const users = response.data.payload;
        commit("SET_USERS", users);
      }
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert(SERVICE_UNAVAILABLE_DETAILS);
      }
      return false;
    }
  },

  /**
   * @description Get the details of an user from github.
   */
  async getUser({ commit, dispatch }, username) {
    commit("SET_USERS", null);
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.get(
        `${GET_USERS}/${username}`
      );
      commit("SET_URI_FILTERS", null);
      if (response && response.data.code === HTTP_OK) {
        dispatch("Loader/setStatus", false, { root: true });
        const listOfUsers = [];
        const users = response.data.payload;
        listOfUsers.push(users);
        commit("SET_USERS", listOfUsers);
      }
      return true;
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert(SERVICE_UNAVAILABLE_DETAILS);
      }
      return false;
    }
  },

  /**
   * @description Get the details of an user from github.
   */
  async getUserDetails({ commit, dispatch }, username) {
    commit("SET_USER", null);
    commit("SET_REPO", null);
    dispatch("Loader/setStatus", true, { root: true });
    let response;
    try {
      response = await HttpConnection.connection.get(
        `${GET_USERS}/${username}/complete`
      );
      commit("SET_URI_FILTERS", null);
      if (response && response.data.code === HTTP_OK) {
        dispatch("Loader/setStatus", false, { root: true });
        const { user, repos } = response.data.payload;
        commit("SET_USER", user);
        commit("SET_REPO", repos);
      }
      return true;
    } catch (error) {
      dispatch("Loader/setStatus", false, { root: true });
      const { response } = error;
      if (response && response.data.error) {
        alert(response.data.message);
      } else {
        alert(SERVICE_UNAVAILABLE_DETAILS);
      }
      return false;
    }
  },
};

const getters = {
  firstUserId: (state) => {
    if (state.users && state.users.length) {
      return state.users[0].id;
    }
  },
  lastUserId: (state) => {
    if (state.users && state.users.length) {
      let lastPos = state.users.length - 1;
      return state.users[lastPos].id;
    }
  },

  getNumberOfRepos: (state) => {
    if (state.repos && state.repos.length) return state.repos.length;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
