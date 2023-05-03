import { GetterTree } from "vuex";
import { RootState } from "../types";
import { AuthState } from "./types";

export const getters: GetterTree<AuthState, RootState> = {
  getSessionToken(state): string {
    return state.token;
  },
  getLogin(state): boolean {
    return state.logged_in;
  },
  getLoading(state): boolean {
    return state.loading;
  },
  getLoginError(state): boolean {
    return state.login_error;
  },
};
