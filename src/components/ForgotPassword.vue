<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" style="color:cornflowerblue">Fundoo</div>
          <div class="md-subhead"></div>
        </md-card-header>
        <md-card-action>
           <div class="form-group">
                <label for="emailId">EmailId:</label>
                <input type="text" v-model="emailId" name="emailId" style="margin-left:17px"/>
            </div>
             </md-card-action>
        <!-- <md-card-content>
           <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" name="password" style="margin-left:5px" />
            </div>
        </md-card-content> -->
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Forgotpassword">Sumbit</button>
        <div>
        </div> 

        <router-link to="/resetpassword" class="btn btn-link">click to Resetpassword</router-link>
        </md-card-content>

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
  name: 'Login',
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
      alert(data);
     axios
      .post('http://localhost:8080/user/forgotpassword',data)
      .then(response => {
       alert("emailId is present in database");
         this.emailId=response.blog
})
      .catch(error => {
      alert(error)
      })
  }
}
}
</script>
