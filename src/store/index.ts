import Vuex, { StoreOptions } from 'vuex'
import { RootState } from "./types";

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // auth,
  },
};

export default new Vuex.Store<RootState>(store);
