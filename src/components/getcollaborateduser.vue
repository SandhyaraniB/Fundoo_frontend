<template >
  <div class="getcollaboratedusers">
    <div v-for= "users in alllcollaboratedusers" v-bind:key="users">
      <div>
          <md-button style="margin-right: 100px;">
           <md-icon class="icon">person_add</md-icon>
           {{users.emailId}}
           <md-icon>
           <img src="./../assets/xicon.png" @click="deletecollaborateduser(users.emailId)"></md-icon>
          </md-button>
     </div>
    </div>
    </div>

</template>
<script>
// import iconlist from "./../components/iconlist";

import axios from 'axios'
export default {
 props: ["note"],
data() {
  this.getcollaboratedusers()
     return {
       noteid: this.note.noteid,
   alllcollaboratedusers:[]
    } 
  },
  components: {
    // iconlist
  },
  methods: {
    getcollaboratedusers() {
      const token = {
        token: localStorage.getItem("token")
      };
      this.noteid = this.note.noteid;
       console.log('====================================');
       console.log("token"+token.token+"noteid:"+this.noteid);
       console.log('====================================');
    axios.get('http://localhost:8080/note/getAllCollaborator/'+this.noteid)
    .then(res => {
      this.alllcollaboratedusers=res.data;
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("collllll",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { 
      console.log('====================================');
          console.log("error"+error);
          console.log('====================================');
      }
      )
    },
     deletecollaborateduser(newmail)
    {
      console.log('====================================');
      console.log("emailid"+newmail);
      console.log('====================================');
      this.noteid = this.note.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
       axios.delete('http://localhost:8080/note/deleteCollaborator/'+this.noteid+'?emailId='+newmail ,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
      // NoteService.AddingCollaborator(noteid, emailid, token).catch(error => {
      //   console.log("====================================");
      //   console.log("error" + error);
      //   console.log("====================================");
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
.getlables{
  display: flex;
flex-direction: column;
}

</style>