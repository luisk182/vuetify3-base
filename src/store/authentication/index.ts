import { Module } from "vuex";
import { RootState } from "../types";
import { AuthState } from "./types";
import { getters } from "./getter";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: AuthState = {
  token: "",
  logged_in: false,
  loading: false,
  login_error: false,
};

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
