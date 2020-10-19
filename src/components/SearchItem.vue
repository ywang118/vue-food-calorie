<template>
    <div  class="column">
    <div v-if="product == 0">
        <h3> 0 results found for "{{this.searchWord}}"</h3>
        <hr>
        <p>Sorry, your search for "{{this.searchWord}}" did not match any documents. Here are some tips to help improve your search:</p>
        <ul>
            <li>Make sure you've spelled the search term correctly. </li>
            <li>Try using different words that mean the same thing.</li>
            <li>Try using more general search terms.</li>
            <li>Try other food name</li>
        </ul>
    </div><!-- </div> end of v-if -->
    <div v-else>
        
        <div class="card stacked segment">
            <div class="image custum-image  ui clearing padded vertical segment">
                <img :src="product.image">
            </div> 
            <div class="custom-content">
                <div class="content">
                    <div class="header">{{product.label}} </div>
                    
                    <div class="meta">
                        <span class="date">amount per serving </span>
                    </div>
                    <div class="description row">{{product.nutrients.CAL}} <b>Cal</b></div>
                </div>

                <div class="extra content">
                
                    <div class="ui input">
                        <input type="number" placeholder="Quantity"  v-model="quantity">
                    </div>    
                        <button :disabled="quantity <=0" size='tiny'  @click="onClick" type="submit" class="small ui primary button">Submit</button>
                        
                
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:["product"],
    data:function(){
        return {
            quantity:0
        }
    },
    computed: {
        searchWord(){
            return this.$store.getters.word
        }
    },
    methods:{
        onClick(){
            // console.log(this.product)
            const order = {
                foodId: this.product.foodId,
                orderCal: this.product.nutrients.CAL,
                quantity: this.quantity,
            }
            this.$store.dispatch('addNewToCart',order)
            this.quantity =  0
        
        }
    }
    
}
</script>

<style  scoped>
    .custom-right {
            margin-left: 20px;
            margin-right: 0;
        }
        .custom-des{
            padding-right:10%;
            padding-left:10%;
        }
        input{
            width:100px
        }
        /* .custom-content{
            text-align: center;
       
        }
        #quantity {
            text-align: center
        }
    */
</style>