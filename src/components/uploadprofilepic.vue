<template>
  <div style="height:auto">
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>UploadProfilepic</md-dialog-title>
   <input type="file" v-on:change="getimage($event)">
   <!-- <img :src="avatar" alt="img"> -->
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button @click="uploadimage()">upload</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button  class="md-icon-button" @click="showDialog = true">
        <md-icon class="icon">home</md-icon>
        <md-tooltip md-direction="bottom">uploadimage</md-tooltip>
    </md-button>
  </div>
</template>

<script>
import { METHODS } from 'http';
import axios from 'axios';
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
      avatar:null
    }),
    methods:
    {
      getimage(event)
      {
        this.avatar=event.target.files[0]
        console.log('====================================');
        console.log(this.avatar);
        console.log('====================================');
       
       },
      
     uploadimage()
     {
       const fd=new FormData();
       fd.append('file',this.avatar)
       console.log('====================================');
       console.log("fileeeeeee"+fd);
       console.log('====================================');
       const token={
         token:localStorage.getItem("token")
       }
       console.log('====================================');
       console.log("ttttttttttttt"+token.token);
       console.log('====================================');
      //  '?emailId='+newmail ,
       axios.post("http://localhost:8080/user/uploadprofilepic"+'?file='+fd,{headers: { token:token.token }
        })
        .this(response => {
          console.log("====================================");
          console.log(response.data.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });
       
     }
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>