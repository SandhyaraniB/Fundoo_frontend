<template>
  <div>
    <md-card md-with-hover>
         <md-card-content>
          <button style="background-color:#87ceeb" @click="Verify">verify</button>
          
        <!-- <router-link to="/register" class="btn btn-link">Click to register</router-link> -->
        </md-card-content>

      
    </md-card>
  </div>
</template>

<style  scoped>
  .md-card {
    width: 100px;
    height:100px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
import axios from 'axios'
export default {

  methods: {
    Verify(){
     const token=this.$route.params.token;
     alert("Token"+token)
     axios
      .get('http://localhost:8080/user/validateEmailId/',{ headers: {token:this.$route.params.token} })
      .then(response => {
       alert("successfully  verified");
      
         this.emailId=response.blog
})
      .catch(error => {
      alert(error)
      })
  }
}
}
</script>