import router from "@/router";
import { login } from "@/services/login";
// import { useCookies } from "vue3-cookies";
import { ActionTree } from "vuex";

import { RootState } from "../types";
import { AuthState } from "./types";

// const { cookies } = useCookies();

export const actions: ActionTree<AuthState, RootState> = {
  async loginUser({ commit }, user) {
    commit("SET_LOADING", true);
    commit("SET_LOGINERROR", false);
    const data = await login(user.email, user.password);
    if (data) {
      const company_id = data.session.user.company
        ? data.session.user.company.id
        : "";
      const company_name = data.session.user.company
        ? data.session.user.company.name
        : "";

      await commit("SET_LOGIN", true);
      await commit("SET_USERID", data.session.user.id, { root: true });
      await commit("SET_USEREMAIL", data.session.user.email, { root: true });
      await commit("SET_USERFIRSTNAME", data.session.user.first_name, {
        root: true,
      });
      await commit("SET_USERLASTNAME", data.session.user.last_name, {
        root: true,
      });
      await commit("SET_USERROLE", data.session.user.roles, { root: true });
      await commit("SET_COMPANYID", company_id, { root: true });
      await commit("SET_COMPANYNAME", company_name, { root: true });
      await commit("SET_PRODUCTS", data.session.user.company_products, {
        root: true,
      });
    }
    commit("SET_LOADING", false);
  },
  logOut({ commit }) {
    /* cookies.remove("token", "/", ".axelerate.io");
    commit("SET_LOGIN", false);
    commit("SET_USERID", "", { root: true });
    commit("SET_USEREMAIL", "", { root: true });
    commit("SET_USERFIRSTNAME", "", { root: true });
    commit("SET_USERLASTNAME", "", { root: true });
    commit("SET_USERROLE", "", { root: true });
    commit("SET_COMPANYID", "", { root: true });
    commit("SET_COMPANYNAME", "", { root: true });
    router.push("/login"); */
  },
  logOutJSE({ commit }) {
    /* cookies.remove("token", "/", ".axelerate.io");
    commit("SET_LOGIN", false);
    commit("SET_USERID", "", { root: true });
    commit("SET_USEREMAIL", "", { root: true });
    commit("SET_USERFIRSTNAME", "", { root: true });
    commit("SET_USERLASTNAME", "", { root: true });
    commit("SET_USERROLE", "", { root: true });
    commit("SET_COMPANYID", "", { root: true });
    commit("SET_COMPANYNAME", "", { root: true });
    window.location.replace(process.env.VUE_APP_JSE_URL); */
  },
  setLoginError({ commit }, value: boolean) {
    // commit("SET_LOGINERROR", value);
  },
};
