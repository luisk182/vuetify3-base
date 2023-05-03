import { MutationTree } from "vuex";
import { AuthState } from "./types";

export enum SessionMutations {
  SET_TOKEN = "SET_TOKEN",
  SET_LOGIN = "SET_LOGIN",
  SET_LOADING = "SET_LOADING",
  SET_LOGINERROR = "SET_LOGINERROR",
}

export const mutations: MutationTree<AuthState> = {
  [SessionMutations.SET_TOKEN](state, payload: string) {
    state.token = payload;
  },
  [SessionMutations.SET_LOGIN](state, payload: boolean) {
    state.logged_in = payload;
  },
  [SessionMutations.SET_LOADING](state, payload: boolean) {
    state.loading = payload;
  },
  [SessionMutations.SET_LOGINERROR](state, payload: boolean) {
    state.login_error = payload;
  },
};
