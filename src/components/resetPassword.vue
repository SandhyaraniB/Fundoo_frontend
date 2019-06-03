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
                <label for="password">Password:</label>
                <input type="text" v-model="password"  style="margin-left:1px"/>
                <!-- <span>{{password}}</span> -->
            </div>
         <!-- <md-card-content>
           <div class="form-group">
                <label for="confirmpassword">Confirmpassword:</label>
                <input type="confirmpassword" v-model="confirmpassword" style="margin-left:75px" />
            </div>
        </md-card-content> -->
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
    width: 300px;
    height:200px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>

import axios from 'axios'
export default {
     name: 'Resetpassword',
  data () {
    return {
     password:'',
     confirmpassword:''
      
    }
  },


 methods: {

    Resetpassword() {
      const data={
        password:this.password,
        confirmpassword:this.confirmpassword
      }
      alert("qwertqwer")
     // var token=localStorage.get
    //axios.post('http://localhost:8080/user/resetPassword/{token}',data)
    axios.put(`http://localhost:8080/user/resetPassword`,data,{ headers: {token:this.$route.params.token} })
      .then(response => {
      
        console.log('====================================');
        console.log(reponse.data.message);
        console.log('====================================');
       })
      .catch(error => {
          console.log('====================================');
          console.log("error"+error);
          console.log('====================================');      })
  }
}
}
</script>

// axios.put(`${BASE_URL}/resetpassword`,data,{ headers: {token:this.$route.params.token} })
