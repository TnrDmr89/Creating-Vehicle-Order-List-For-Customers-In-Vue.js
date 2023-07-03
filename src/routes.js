import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Dealer from './component/Dealer'
import PurchaseSave from './component/PurchaseSave'
import PurchaseTable from './component/PurchaseTable'

Vue.use(VueRouter)

const routes = [
    {path:"/login",component:Login},
    {path:"/signup",component:SignUp},
    {path:"/addDealer", component:Dealer},
    {path:"/purchaseTable", component:PurchaseTable},
    {path:"/addPurchase",component:PurchaseSave},

]

export const router = new VueRouter({
    mode:"history",
    routes,
})