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
        <md-card-content>
           <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" name="password" style="margin-left:5px" />
            </div>
        </md-card-content>
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Login">Sign in</button>
          <div>
          </div>
        <router-link to="/forgotpassword" class="btn btn-link">forgot password</router-link>
        <div>
        </div>
        <!-- <router-link to="/register" class="btn btn-link">Click to register</router-link> -->
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
    /* display:flex, */
    
  }
</style>

<script>
// import axios from 'axios'
// import {userService} from '/home/admin1/Desktop/fundoo/src/Service/UserService.js'
import axios from 'axios'
export default {
  name: 'Login',
data() {
    return {
     emailId:'',
     password:'',
    };
  },

  methods: {
    Login(){
      
      const data={
        emailId:this.emailId,
        password:this.password
      }
    //  console.log('dattaaaaaaaaa')
      // userService.login(data)
      // .then('loginSuccess')
      //   .catch(error => {
      // alert(error)
      // }) 

      axios
    .post('http://localhost:8080/user/login',data)
    .then(res => {
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("AAAAAAAAAA",res);
        console.log('====================================');
        localStorage.removeItem('token');
        localStorage.setItem('token',res.data.token);
        
      }
      
    }).catch(error => { alert(error)})
}

  }
}

</script>
