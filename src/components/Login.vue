<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal image header">
        <div class="content">Login</div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="Email" v-model="email">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="password" placeholder="Password" v-model="password">
            </div>
          </div>
          <button @click="login" class="ui fluid large teal submit button">Login</button>
        </div>
      </form>
      <div class="ui message">Need an account? <router-link to="/signup">Sign Up</router-link></div>
    </div>
  </div>
</template>
 
<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(){
    return {
      email: "",
      password:""
    }
  },
  methods: {
    login: function(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
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