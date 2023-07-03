import axios from "axios";
import { URL } from "../URL"
import auth from "./auth";


const state = {
    dealerByStoreList:[]
}
const getters = {
    getDealerByStore(state){
        return state.dealerByStoreList[0];
    }
}
const mutations = {
    saveDealerByStoreList(state,payload){
        state.dealerByStoreList.push(payload)
    }
}
const actions = {
    saveDealer({ commit }, dealer) {
        axios.post(URL.DEALER_SAVE_RESTCONTROLLER,dealer,
            {
                headers:
                {
                    Authorization: 'Bearer ' + auth.state.token
                }
            })
    },
    getDealerByStore({commit,state},selectedStore){
        state.dealerByStoreList = [];
        axios.get(
            URL.DEALERBYSTORE_GET_RESTCONTROLLER,
            {
                params:
                {
                    id:selectedStore.id
                },
                headers:
                { 
                    Authorization: 'Bearer ' + auth.state.token 
                }
            }
            )
        .then(response=>{
            commit("saveDealerByStoreList",response.data)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}