import Vue from 'vue'
import Vuex from 'vuex'
import products from '../data/products';

Vue.use(Vuex)

 const  state=  {
       products: [],
       productNowSelected:  {},
       cartItems: [],
       dailyCal:  2000
   }


const mutations = {
    'SET_PRODUCTS'(state, products){
        state.products = products
    },
   

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
    // REMOVE_ITEM_FROM_PRODUCTS(state,product){
    //     const record = state.cartItems.find(e=> e.foodId==product.foodId)
    //     if (record.quantity >= product.quantity){
    //         record.quantity -= product.quantity;
    //     } else{
    //         state.cartItems.splice(state.cartItems.indexOf(record),1)
    //     }
    //     state.dailyCal += product.orderCal* product.quantity
    // }
}



const actions = {
    addToCart: ({commit,state},product)=>  {
        const cartItem = state.cartItems.find(
            element => element.foodId === product.foodId
          );
    
          if (!cartItem) {
            commit("ADD_CART", product);
          } else {
            commit("INCREMENT_ITEM_QUANTITY", cartItem);
          }
    },
    fetchProducts: ({commit})=> {
        commit('SET_PRODUCTS',products)
    },
    selectProduct:({commit}t)=>{
        
         commit()
    },
    removeFromCart({commit},product){
        const cartItem = state.cartItems.find(
            element => element.foodId === product.foodId
          );
          if (cartItem) {
            if (cartItem.quantity <= 1) {
              const itemIndex = state.cartItems.findIndex(x => x.foodId === product.foodId);
              commit("REMOVE_CART", itemIndex);
            } else {
              commit("DECREMENT_ITEM_QUANTITY", cartItem);
              state.dailyCal += product.orderCal
            }
          }

    }

}

const getters= {
    products: state=> {
        return state.products
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
                image: record.image
            }
        })
       
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