<template>
  <div>
      <h3>Sign Up</h3>
    <input type="text" placeholder="Email" v-model="email">
    <br />
    <input type="password" placeholder="Password" v-model="password">
    <br/>
    <button @click="login">Sign up</button>
    <p>Have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>
 
<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data(){
    return {
      email: "",
      password:""
    }
  },
  methods: {
    login: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
          .then(user=> {
            console.log(user)
          },
          err=>{
            alert(err)
          })
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>