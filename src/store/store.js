import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import products from '../data/products';

Vue.use(Vuex)

 const  state=  {
       products: [],
       productNowSelected:  null,
       cartItems: [],
       dailyCal:  2000,
       word: ''
       
   }


const mutations = {
    'SET_PRODUCTS'(state, products){
        state.products = products
    },
   
    // SET_PRODUCT(state, product){
    //     state.productNowSelected = product
    // },
    ADD_CART(state,product){
        state.cartItems.push({
            foodId: product.foodId,
            productCal:product.orderCal,
            quantity:1
        });
    },
    INCREMENT_ITEM_QUANTITY(state, updateitem) {
        updateitem.quantity++;
    },


    DECREMENT_ITEM_QUANTITY(state, updateitem) {
        updateitem.quantity--;
    },
    REMOVE_CART(state, itemIndex) {
        state.cartItems.splice(itemIndex, 1);
       
    },
    // SET_POST(state,post){
    //     state.productNowSelected = 'post'
    // },
    LOAD_ITEM(state,data){
        if (data.data.parsed.length == 0){
            state.productNowSelected = 0;
            state.word=data.data.text
            console.log("0 found")
        } else {
           
            state.productNowSelected = {
                foodId:data.data.parsed[0].food.foodId,
                label:data.data.parsed[0].food.label,
                nutrients:{CAL:data.data.parsed[0].food.nutrients.ENERC_KCAL},
                image:data.data.parsed[0].food.image
            }
            const item=state.products.find(e=>e.foodId==data.data.parsed[0].food.foodId)
            if(!item){
                state.products.push({
                foodId:data.data.parsed[0].food.foodId,
                label:data.data.parsed[0].food.label,
                nutrients:{CAL:data.data.parsed[0].food.nutrients.ENERC_KCAL},
                image:data.data.parsed[0].food.image
            })
            }
        }

    },
    ADD_NEW_TO_CART(state,{foodId,orderCal,quantity}){
        const record = state.cartItems.find(e=>e.foodId==foodId);
        
        if (record){
            record.quantity += quantity
        } else {
            state.cartItems.push({
                foodId,
                productCal:orderCal,
                quantity
            })
        }
        state.dailyCal -= orderCal * quantity
    }
   
    
}



const actions = {
    
    searchResult:({commit},word)=>{
        commit('SEARCH_RESULT',word)
    },
    fetchItems:({commit},config)=>{
        axios.get('https://rapidapi.p.rapidapi.com/parser',config)

            .then(res=> {
                console.log(res)
                commit('LOAD_ITEM',res)
            })
            .catch(error=> console.log(error))
    },
    removeSingleItem:({commit,state},product)=>{
        const item = state.cartItems.find(c=>c.foodId == product.foodId)
        const itemIndex  = state.cartItems.indexOf(item)
        
        commit('REMOVE_CART',itemIndex)
        console.log('delete item cal:', item.productCal)
        console.log('delete item  quantity:', item.productCal)
        state.dailyCal += item.productCal *  item.quantity
    },
    addToCart: ({commit,state},product)=>  {
        const cartItem = state.cartItems.find(
            element => element.foodId === product.foodId
          );
    
          if (!cartItem) {
            commit("ADD_CART", product);
          } else {
            commit("INCREMENT_ITEM_QUANTITY", cartItem);
          }
          state.dailyCal -= product.orderCal
    },
    fetchProducts: ({commit})=> {
        commit('SET_PRODUCTS',products)
    },
    selectProduct:({commit})=>{
        
         commit()
    },
    removeFromCart({commit},product){
        const record= state.cartItems.find(
            element => element.foodId === product.foodId
          );
          if (record) {
            if (record.quantity <= 1) {
             const itemIndex = state.cartItems.indexOf(record)
              commit("REMOVE_CART", itemIndex);
            } else {
              commit("DECREMENT_ITEM_QUANTITY", product);
              
            }
            state.dailyCal += product.orderCal
          }

    },
    addNewToCart:({commit},product)=>{
        commit('ADD_NEW_TO_CART',product )
    }


}

const getters= {
    word: state=>{
        return state.word
    },
    products: state=> {
        return state.products
    },
    productNowSelected: state=>{
        return state.productNowSelected
    },
    dailyCal (state) {
        return state.dailyCal;
    },
    cartLists(state){
        return state.cartItems.map(p=>{
            const record = state.products.find(e=>e.foodId == p.foodId);
            return {
                foodId: p.foodId,
                quantity: p.quantity,
                name: record.label,
                cal: record.nutrients.CAL,
                image: record.image,
                subTotal: p.quantity * record.nutrients.CAL
            }
        })
       
    },
    cartTotal: state => {
        let total = 0;
        state.cartItems.forEach(product => {
          total += product.productCal * product.quantity;
        });
        return total;
    },
}


const store = new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations
  })
  
  export default store