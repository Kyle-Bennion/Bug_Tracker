import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes:[]
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs){
      state.bugs = bugs
    },
    setActiveBug(state,bug){
      state.activeBug = bug
    },
    addBug(state, bug){
      state.bugs.push(bug)
    },
    setNotes(state, notes){
      state.notes = notes
    }
  },
  actions: {
    //#region Auth0
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    //#region Bugs
    async getAllBugs({commit}){
      try {
        let res = await api.get("bugs")
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createBug({commit, dispatch},bugData){
      let res = await api.post('bugs',bugData)
      commit('addbug',  res.data)
      dispatch('getAllBugs')
      dispatch('getActiveBug', res.data.id)
    },
    async getActiveBug({commit},bugId){
      try {
        let res = await api.get("bugs/" + bugId)
        commit("setActiveBug", res.data)
        router.push({name: "ActiveBug", params: {id: res.data.id}})
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    //#region Notes
    async getAllNotesByBugId({commit}, bugId){
      try {
        let res = await api.get('bugs/' + bugId + '/notes')
        console.log(res)
        commit('setNotes', res.data)
      } catch (error) {
        console.error(error);
      }
}
    //#endregion
  }

});
