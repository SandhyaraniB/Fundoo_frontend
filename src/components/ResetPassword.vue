<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <form>
        <md-card-header>
          <div class="md-title" style="color:cornflowerblue">Fundoo</div>
          <div class="md-subhead"></div>
        </md-card-header>
           <div class="form-group">
                <label for="emailId">EmailId:</label>
                <input type="text" v-model="emailId"  style="margin-left:17px"/>
                <span>{{emailId}}</span>
            </div>
         <md-card-content>
           <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" style="margin-left:5px" />
            </div>
        </md-card-content>
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Resetpassword">ResetPassword <br></button>
          <div>
          </div>
        </md-card-content>
        </form>
       </md-ripple>
    </md-card>
  </div>
</template>

<style  scoped>
  .md-card {
    width: 320px;
    height:350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>

import axios from 'axios'
export default {
  data () {
    //alert(this.emailId);
    return {
    emailId:'',
     password:'',
      
    }
  },


 methods: {

    Resetpassword() {
      const data={
        emailId:this.emailId,
        password:this.password
      }
    axios
      .post('http://localhost:8080/user/resetPassword/{token}',data)
      .then(response => {
        alert("successfully reset the done");
       this.emailId=response.blog
       })
      .catch(error => {
       alert(error)
      })
  }
}
}
</script>
