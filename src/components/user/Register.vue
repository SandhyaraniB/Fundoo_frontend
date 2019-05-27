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
                <input type="text" v-model="emailId" name="emailId" style="margin-left:15px"/>
            </div>
             </md-card-action>
             <md-card-content>
           <div class="form-group">
                <label for="name">Username:</label>
                <input type="name" v-model="name" name="name" style="margin-left:-1px" />
            </div>
        </md-card-content>
        <md-card-content>
           <div class="form-group">
                <label for="mobileNumber">Number:</label>
                <input type="mobileNumber" v-model="mobileNumber" name="mobileNumber" style="margin-left: 8px;" />
            </div>
        </md-card-content>
        <md-card-content>
           <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" name="password" style="margin-left:4px" />
            </div>
        </md-card-content>
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Register">Register</button>
          <div>
          </div>
        <router-link to="/user/Login" class="btn btn-link">click to login</router-link>
        <div>
        </div>
        </md-card-content>

       </md-ripple>
    </md-card>
  </div>
</template>
<script>
import {userService} from '/home/admin1/Desktop/fundoo/src/Service/UserService.js'
export default {
  name: 'register',
data() {
    return {
     emailId:'',
     name:'',
     mobileNumber:'',
     password:'',
    };
  },
  methods: {
    Register(){
     alert(this.emailId)
     const data={
        emailId:this.emailId,
        name:this.name,
        mobileNumber:this.mobileNumber,
        password:this.password
      }
     //console.log('1213');
    userService.register(data)
      .then('registeration done')
      
      // this.$router.push('http://localhost:8081/user/Login')
        .catch(error => {
      alert(error)
      });
  }
}
}
</script>
<style  scoped>
  .md-card {
    width: 320px;
    height:350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>