<template>
  <div class="hello">
    <h1>Calorie  Calculator</h1>
    <h4>Do you know how many calories you need?</h4>
    <h6>Generally, the recommended daily calorie intake is 2,000 calories a day</h6>
    <h4>Let's calculate how much you  take on  daily basis:</h4>

    <hr>

    <p>Your daily calorie need: {{dailyCal}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed:{
    dailyCal(){
      return this.$store.getters.dailyCal
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
