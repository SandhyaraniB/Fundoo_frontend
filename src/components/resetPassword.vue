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
                <input type="text" v-model="password"  style="margin-left:17px"/>
                <span>{{password}}</span>
            </div>
         <md-card-content>
           <div class="form-group">
                <label for="confirmpassword">Confirmpassword:</label>
                <input type="confirmpassword" v-model="confirmpassword" style="margin-left:5px" />
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
     // var token=localStorage.get
    axios
      .post('http://localhost:8080/user/resetPassword/{token}',data)
      .then(response => {
        this.confirmpassword=response.data;
       })
      .catch(error => {
       alert(error)
      })
  }
}
}
</script>
