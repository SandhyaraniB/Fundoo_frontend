<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Collaborator:</md-dialog-title>
       <md-button class="md-icon-button" @click="collaborator()" >
          <md-icon class="icon">person_add</md-icon>{{this.emailid}}
        </md-button>
       <div>
          
        <md-button class="md-icon-button" @click="addcollaborator(newmail)">
          <md-icon class="icon">person_add</md-icon>
        </md-button>
        <input type="text" v-model="newmail" placeholder="newemailid" style="border:none;outline:none;width:auto;">
        </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button  class="md-icon-button" @click="showDialog = true">
        <md-icon class="icon">person_add</md-icon>
        <md-tooltip md-direction="bottom">collaborator</md-tooltip>
    </md-button>
  </div>
</template>

<script>
import { METHODS } from 'http';
import axios from "axios";
  export default {
    // emailid:localStorage.getItem("emailid"),
    props:["note"],
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
      emailid:'',
      newmail:''
    }),
    methods: 
   {
        collaborator(){
     
        this.emailid=localStorage.getItem("emailid");
        console.log('====================================');
        console.log("ahghshag",this.emailid);
        console.log('====================================');
      
    },
    addcollaborator(newmail) {
       
     console.log('====================================');
     console.log("eeeeeee"+newmail);
     console.log('====================================');
      this.noteid = this.note.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
    //   http://localhost:8080/note/addingCollaborator/49?emailId=s%40gmail.com
       axios.post('http://localhost:8080/note/addingCollaborator/'+this.noteid+'?emailId='+newmail ,'',{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
      // NoteService.AddingCollaborator(noteid, emailid, token).catch(error => {
      //   console.log("====================================");
      //   console.log("error" + error);
      //   console.log("====================================");
      // });
    },
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>
