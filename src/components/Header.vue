
<template>
    <div class="ui inverted white menu">     
      <router-link to="/" class="item">Home</router-link>
      <router-link to="/product" class="item">Product</router-link>
      <router-link to="/search" class="item">Search</router-link>
      <router-link to="/userproduct" class="item">Your calories</router-link>
    
      <div class="right menu">
        <router-link to="/login" class="ui item">
          
            <i class="hand point right outline">
            </i> 
            <div class="large ui orange label">Calorie: {{dailyCal}}</div>
        </router-link>
      </div>
    </div>
</template>



<script>
export default {
  name: 'Header',
  computed : {
    dailyCal(){
      return this.$store.getters.dailyCal
    }
  }
 
}
</script>

<style scoped>
  a{
    font-size: 20px;
  }
</style>
