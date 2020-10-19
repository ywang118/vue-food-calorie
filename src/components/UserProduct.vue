<template>
 <div >

 
    <div class="ui segment custom-padding">
      <h4  class="ui statistic">You have consumed 
        <h1 class="value">{{this.cartTotal}}</h1> 
        <div class="label">calories</div>
      </h4>
    <br>
   
      <div class="value">
        
        <h1>{{   dailyCal}}</h1> 
      </div>  
          <h3>
            <div class="label">calories</div>
            left to reach average calories need 
          </h3>
     
    </div>
   
    <div  v-if="items.length > 0">
      <table class="ui table">
        <thead>
          <tr>
            <th></th>
            <th>Food</th>
            <th></th>             
            <th class="right aligned">Amount</th>
            <th class="right aligned">Calorie</th>       
          </tr>
        </thead>     
        <tbody>
            <list-item  :key="p.foodId" v-for="p in items" :product="p"></list-item >
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3"></th>
            <th class="left aligned">TOTAL Calories:</th>
            <th class="right aligned"><h3>{{ cartTotal }} Calories</h3></th>
          </tr>
        </tfoot>
      </table>   
      <!-- <div class="ui basic segment">
        <button class="ui huge red button" @click="emptyCart()">
          <i class="times icon"></i> Empty Cart
        </button>
        <router-link to="/cart/confirmation" tag="button" class="huge teal toggle ui button">Checkout <i class="arrow right icon"></i></router-link>
      </div>   -->
    </div>  
   
    <div v-else class="info column custom-icon" ><p><i class="massive red frown outline icon"></i><br/>Please add some food</p></div>
    
  </div>
 

</template>

<script>
import {mapGetters} from 'vuex'
import ListItem from  './ListItem.vue'
export default {
  name: 'UserProduct',
  computed: {
    ...mapGetters({
      items: 'cartLists',
      cartTotal:'cartTotal'
    }),
     dailyCal(){
      return this.$store.getters.dailyCal
    }
  },
  components:{
    listItem: ListItem,
   
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-padding  {
 height: 300px;
  width: 50%;
  background-color: powderblue;
  margin: auto;
  text-align: center;
}
.custom-icon {
  margin-left:45%;
  margin-top: 10%;
}
</style>
