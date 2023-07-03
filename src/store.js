import Vue from "vue";
import Vuex from "vuex"
import auth from "./module/auth";
import dealer from "./module/dealer";
import purchase from "./module/purchase";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
    },
    getters:{
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        auth,
        dealer,
        purchase
    }
})