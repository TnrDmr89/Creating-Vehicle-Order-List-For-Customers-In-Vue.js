import axios from "axios";
import auth from "./auth";
import { URL } from "../URL"


const state = {
    personList: [],
    storeList: []
}
const getters = {
    getPersonsList(state) {
        return state.personList[0];
    },
    getStoreList(state) {
        return state.storeList[0];
    }
}
const mutations = {
    savePersonList(state, person) {
        if (state.personList.length == 1) {
            state.personList[0].push(person)
        }
        else {
            state.personList.push(person)
        }
    },
    saveStoreList(state, payload) {
        state.storeList.push(payload)
    },
    deletePersonList(state){
        state.personList = [];
    },
    deleteStoreList(state){
        state.storeList=[]
    }
}
const actions = {
    savePerson({ commit }, person) {
        axios.post(URL.PERSON_SAVE_API, person,{headers:{ Authorization: 'Bearer ' + auth.state.token}})
            .then(response => {
                commit("savePersonList",person)
            })
    },
    getPersonsFromDB({ commit, state }) {
        axios.get(URL.PERSON_GETALL_API_RESTCONTROLLER,{headers:{ Authorization: 'Bearer ' + auth.state.token }})
            .then(response => {
                commit("savePersonList", response.data)
            })
    },
    getStoreFromDB({dispatch, commit }) {
        axios.get(URL.STORE_GETALL_API_RESTCONTROLLER,{headers:{ Authorization: 'Bearer ' + auth.state.token }})
            .then(response => {
                commit("saveStoreList", response.data);
            })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}