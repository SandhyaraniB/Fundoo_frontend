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
                <label for="name">Username:</label>
                <input type="name" v-model="name" name="name" style="margin-left:5px" />
            </div>
        </md-card-content>
        <md-card-content>
           <div class="form-group">
                <label for="mobileNumber">mobileNumber:</label>
                <input type="mobileNumber" v-model="mobileNumber" name="mobileNumber" style="margin-left:5px" />
            </div>
        </md-card-content>
        <md-card-content>
           <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" name="password" style="margin-left:5px" />
            </div>
        </md-card-content>
        <md-card-content>
          <button style="background-color:#87ceeb" @click="Register">Register</button>
          <div>
          </div>
        <router-link to="/Login" class="btn btn-link">click to login</router-link>
        <div>
        </div>
        </md-card-content>

       </md-ripple>
    </md-card>
  </div>
</template>





// import axios from 'axios'
// export default {
//   name:'Register',
//   data () {
//     return {
      
//      emailId:'',
//      name:'',
//      mobileNumber:'',
//      password:'',
      
//     };
//   },


//  methods: {

//     Register() {
//       const data={
//         emailId:this.emailId,
//         name:this.name,
//         mobileNumber:this.mobileNumber,
//         password:this.password
//       }
//     axios
//       .post('http://localhost:8080/user/register',data)
//       .then(response => {
//          alert(response.data.satusmessage); 
//          })
//       .catch(error => {
//        alert(error)
//       })
//   }
// }
// }

<script>
import axios from 'axios'

export default {
  name: 'Register',
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
      var url=new URL('localhost')
      alert(window.localhost)
      alert(url)
    //  console.log('1213');
    
      const data={
        emailId:this.emailId,
        name:this.name,
        mobileNumber:this.mobileNumber,
        password:this.password
      }
      axios
      .post('http://localhost:8080/user/register',data)
      .then(response => {
        alert('registered...')
        //  alert(window)
        alert(response.data.message)
      //  console.log('result');
        
})
      .catch(error => {
        // console.log('error');
        
      alert(error)
      })
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