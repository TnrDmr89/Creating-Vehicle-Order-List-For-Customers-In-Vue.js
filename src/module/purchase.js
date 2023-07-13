import axios from "axios";
import auth from "./auth";
import { URL } from "../URL"


const state = {
    personList: [],
    storeList: [],
    isError: null,
    errorMessage:null,
}
const getters = {
    getPersonsList(state) {
        return state.personList[0];
    },
    getStoreList(state) {
        return state.storeList[0];
    },
    getIsError(state){
        return state.isError;
    },
    getErrorMessage(state){
        return state.errorMessage;
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
    },
    deletePersonOfList(state,payload){
        console.log("commit delete")
        for(var person of state.personList[0]){
            if(person.personTC === payload){
                state.personList[0].splice(state.personList[0].indexOf(person),1)
            }
        }
        state.isError=false;
        setTimeout(()=>{
            state.isError = null;
            state.errorMessage = null;
        },1500)
        console.log(state.isError)

    }
}
const actions = {
    savePerson({ commit }, person) {
        axios.post(URL.PERSON_SAVE_API, person,{headers:{ Authorization: 'Bearer ' + auth.state.token}})
            .then(response => {
                commit("savePersonList",person)
            })
    },
    deletePerson({ commit, state }, tc) {
        axios.delete(URL.DELETEPURCHASE_RESTCONTROLLER,
            {
                params:
                {
                    tc: tc
                },
                headers:
                {
                    Authorization: 'Bearer ' + auth.state.token
                }
            }
        ).then(()=>{
            commit("deletePersonOfList",tc)
        }).catch(err=>{
            if(err.response.data.errorCode === "600"){
                state.isError = true;
                state.errorMessage=err.response.data.errorMessage
                setTimeout(()=>{
                    state.isError = null;
                    state.errorMessage = null;
                },1500)
            }
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