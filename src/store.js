import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      homeLoaded: false
    },
    mutations: {
      changeLoaded (state, bool) {
        state.homeLoaded = bool;
      }
    },
    getters: {
        getLoaded: (state) => {
            return state.homeLoaded;
        }
    }
});