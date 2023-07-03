import axios from "axios"
import { URL } from "../URL"
import { router } from "../routes";


const state = {
    token:null,
    isAuthenticated: false,
}

const getters = {
    getToken(state) {
        return state.token;
    }
}

const mutations = {
    setIsAuthenticated(state) {
        if (!state.isAuthenticated) {
            state.isAuthenticated = true;
            setTimeout(() => {
                state.isAuthenticated = false;
                if (router.currentRoute.path != '/signup') {
                    router.push("/signup")
                }
            }, 30*60*1000)
            
        }
        else {
            state.isAuthenticated = false
        }
    },
    setToken(state, payload) {
        state.token = payload
    },
    deleteToken(state) {
        state.token = null;
    },
}

const actions = {

    signUp({ commit, state }, user) {
        axios.post(URL.SIGNUP, user)
            .then(response => {
                router.push("/login")
            })
    },
    login({ dispatch, commit, state }, user) {
        axios.post(URL.LOGIN, user)
            .then(response => {
                commit("setToken", response.data);
                commit("setIsAuthenticated");
                dispatch("getStoreFromDB");
                dispatch("getPersonsFromDB");
                router.push("/addPurchase");
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
