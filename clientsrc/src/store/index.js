import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"
import ns from "../store/NotificationService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    addBug(state, bug) {
      state.bugs.push(bug)
    },
    editBug(state, bug) {
      let oldIndex = state.bugs.findIndex(b => b.id == bug.id)
      state.bugs.splice(oldIndex, 1, bug)
    },
    setNotes(state, notes) {
      state.notes = notes
    },
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
    async getAllBugs({ commit }) {
      try {
        let res = await api.get("bugs")
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createBug({ commit, dispatch }, bugData) {
      let res = await api.post('bugs', bugData)
      commit('addbug', res.data)
      dispatch('getAllBugs')
      dispatch('getActiveBug', res.data.id)
      ns.toast("Bug Created", 3000, "success")
    },
    async getActiveBug({ commit }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId)
        commit("setActiveBug", res.data)
        router.push({ name: "ActiveBug", params: { id: res.data.id } })
      } catch (error) {
        console.error(error);
      }
    },
    async editBug({ commit }, bugData) {
      try {
        let res = await api.put('bugs/' + bugData.id, bugData)
        commit("editBug", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async changeStatus({ dispatch }, bugStatus) {
      try {
        if (await ns.confirmAction("Are you sure you want to close this Bug?", "Alright Fine Its Closed")) {
          let res = await api.put('bugs/' + bugStatus.id, { closed: bugStatus.closed })
          dispatch('getActiveBug', bugStatus.id)
        }
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    //#region Notes
    async getAllNotesByBugId({ commit }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId + '/notes')
        console.log(res)
        commit('setNotes', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createNote({ dispatch }, noteData) {
      try {
        await api.post('/notes', noteData),
          dispatch('getAllNotesByBugId', noteData.bug)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote({ dispatch }, noteProp) {
      try {
        if (await ns.confirmAction("Do you want to delete this note?", "Delorted")) {
          await api.delete('/notes/' + noteProp.id)
          dispatch('getAllNotesByBugId', noteProp.bug)
        }
      } catch (error) {
        console.error(error);
      }
    }

    //#endregion
  }

});
