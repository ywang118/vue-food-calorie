<template>
   
  <tr>
    <td class="collapsing"><img :src="product.image" class="ui image"></td>
    <td>
      <h4 class="ui header">{{ product.name }}
       <div class="sub header"> calories:{{ product.cal}}</div>
      </h4></td>
    <td><button class="mini ui compact circular red icon button" @click="removeOne(product)"><i class="times icon"></i></button></td>      
    <td class="right aligned">{{ product.quantity }}  serving(s)</td>
    <td class="right aligned">
      <h4 class="ui header">  {{product.subTotal}}
        <div v-if="product.quantity > 1">({{ product.cal }}per serving)</div>
      </h4></td>
  </tr>
</template>

<script>

    export default {
        props:['product'],
        computed: {
         
      },
     
      methods:{
    removeOne(product){
     
      console.log()
       this.$store.dispatch("removeSingleItem",product)  
       
    }
  }
    }
</script>

<style scoped>
img{
  width: 54px;
  height: 81px;
}
h4 div{
  color: #666;
  font-size: .6em;
}
</style>
<span v-if="totalCart > 0">
