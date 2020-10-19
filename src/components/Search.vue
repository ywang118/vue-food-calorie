<template>
  <div >
    <div class="search-header">
      
      <h3>Can't find your food?</h3>
      <h5>Try search by yourself</h5>
      
      <div class="ui search">
        
          <div class="ui icon input">
            <form @submit.prevent="onSubmit" >
              <input class="prompt" type="text" v-model="searchValue" placeholder="e.g.,tea"/>
            </form>
          <i class="search icon"></i>
        </div>
        <hr>
      </div>
      
    </div>  
    <div class="ui two column centered grid">
      <SearchItem :product="getProduct" ></SearchItem>
    </div>
  </div>
</template>

<script>
// import  axios from 'axios'
import SearchItem from './SearchItem.vue'
export default {
  name: 'Search',
  components:{
    SearchItem: SearchItem
  },
  data:function(){
    return {
      searchValue: '',
    }
  },
  methods: {
    onSubmit() {
      let config = {
        headers: { "x-rapidapi-host":"edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key":"02e1f6c7a2msh0681382b5297264p1038bejsna69969ce0aad"},
        params: {
          ingr: this.searchValue
        },
      }
      this.$store.dispatch('fetchItems',config)
      // axios.get('https://rapidapi.p.rapidapi.com/parser',config)
      //   .then(res=>{
      //     console.log(res.data)
      //   }) 
      this.searchValue =  ''   
    },
  },
  computed:{
    getProduct(){
      return this.$store.getters.productNowSelected
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-header{
  text-align: center;
}
input{
  padding: 20px;
  height: 30px;
  width:auto;
  margin-top:10px;
  margin-bottom: 20px;
}

</style>
