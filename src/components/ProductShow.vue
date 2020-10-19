<template>
<div>
  <div class="ui link cards ui equal width grid">
      <app-product :key="p.id" v-for="p in products" :product="p"></app-product>
  </div>
</div>
</template>

<script>

import Product from './Product.vue'
export default {
  components: {
    appProduct:Product
  },

  computed:{
    
    products(){
      return this.$store.getters.products
    }
    // changeData:function(){
    //    return this.products.forEach(p=> {
    //     return p.nutrients.forEach(o=>o.toLowerCase())
    //   })
    // }
    
  }
  
 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
