import Home from './components/Home.vue'
import ProductShow from './components/ProductShow.vue'
import Search from './components/Search.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import UserProduct from './components/UserProduct.vue'
export const routes=[
    {path:'/',component: Home},
    {path:'/product',component: ProductShow},
    {path:'/search',component: Search},
    {path:'/signup',component: Signup},
    {path:'/login',component: Login},
    {path:'/userproduct',component: UserProduct}

];