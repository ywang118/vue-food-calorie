<template>
  
    <div class="four wide column">
        <div class="card">
            <div class="image custum-image  ui clearing padded vertical segment">
                <img :src="product.image">
            </div>
            <div class="custom-content">
                <div class="ui header">{{product.label}} </div>
                <div class="meta">
                    <span class="date">amount per serving </span>
                </div>
                <div class="description row">{{product.nutrients.CAL}} <b>Cal</b></div>
            </div>

            <div class="extra content custom-des">
                <div class="ui grid">
                <div class="four column row">
                    <button :disabled="quantity<1 " @click="removeFromCart" class="left floated column  ui mini button">
                        -
                    </button>
                    <span class="column"> {{this.quantity}}</span>
                    <button  @click="addToCart" class="right floated column  ui mini  positive button ">+</button>
                </div>
                 </div>     
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
            quantity:0, 
            number: 0,
        }
    },
    props:['product'],
    computed:{
        ...mapState(['cartItems']),
       
     
    },
  
    methods:{
        removeFromCart(){
           
            this.quantity -= 1
            const product=  {
                foodId: this.product.foodId,
                orderCal: this.product.nutrients.CAL,
                quantity: this.quantity,
               
            }
            this.$store.dispatch("removeFromCart", product);
            
        },

        addToCart(){
            
            this.quantity += 1
            console.log(this.product.nutrients)
            const product=  {
                foodId: this.product.foodId,
                orderCal: this.product.nutrients.CAL,
               quantity: this.quantity,
            }
            
        
            this.$store.dispatch('addToCart',product)
      
        },
      
    }
}
</script>

<style scoped>
        .custom-right {
            margin-left: 20px;
            margin-right: 0;
        }
        .custom-des{
            padding-right:10%;
            padding-left:10%;
        }
        input{
            width:40px
        }
        .custom-content{
            text-align: center;
        }
        #quantity {
            text-align: center
        }
</style>