import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './component/authentication/Login'
import SignUp from './component/authentication/SignUp'
import DealerSave from './component/saveProcess/DealerSave'
import PurchaseSave from './component/saveProcess/PurchaseSave'
import PurchaseTable from './component/PurchaseTable'
import CancelPurchase from './component/deletePurchase/CancelPurchase'
import Home from './homePage/Home'

Vue.use(VueRouter)

const routes = [
    {path:"/login",component:Login},
    {path:"/signup",component:SignUp},
    {path:"/addDealer", component:DealerSave},
    {path:"/purchaseTable", component:PurchaseTable},
    {path:"/addPurchase",component:PurchaseSave},
    {path:"/deletePurchase",component:CancelPurchase},
    {path:"/home",component:Home}

]

export const router = new VueRouter({
    mode:"history",
    routes,
})