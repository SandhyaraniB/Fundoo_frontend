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
                <input type="emailId" v-model="emailId"  style="margin-left:17px"/>
                <span>{{emailId}}</span>
            </div>
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Forgotpassword">Forgotpassword <br></button>
          <div>
          </div>
          <router-link to="/resetPassword/:yut7gbhbhhh" class="Resetpassword">Click to Resetpassword</router-link>
         
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
  name: 'Forgotpassword',
data() {
    return {
     emailId:'',
     //password:'',
    };
  },
  methods: {
    Forgotpassword()
    {
      const data={
        emailId:this.emailId,
       // password:this.password
      }
      alert("fffffffffffffffff");
     axios
      .post('http://localhost:8080/user/forgotpassword',data)
      .then(response => {
        this.emailId=response.data;
        alert(response.data.satusmessage)
       alert("emailId is present in database");
       //  this.emailId=response.blog
})
      .catch(error => {
      alert(error)
      })
  }
}
}
</script>
