<template>
  <div>
    <div style=" margin-right: 500px;">
      <CreateNote v-on:createnote="createnotes($event)"></CreateNote>
    </div>
    <div style=" height:-webkit-fill-available;  margin-top: 228px;margin-top: -50px; ">
      <note></note>
    </div>
  </div>
</template>

<script>
import CreateNote from "./CreateNote";
// import cards from './cards'
import note from "./note";
import axios from "axios"
import {getnotes} from "/home/admin1/Desktop/fundoo/src/Service/noteservice.js"
// import reminder from './reminder'
export default {
  data() {
    // this.getnotes()
        return {
      fromChild: "" // This value is set to the value emitted by the child
    };
  },
  components: {
    CreateNote,
    // cards,
    note
    // reminder
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    createnotes() {
      this.getnotes();
    },
   async getnotes() {
    // alert('lll')
      const token = {
        token: localStorage.getItem("token")
      };
      // alert(token.token);
      // NoteService.GetAllNotes(token)
      //   .then("cards.")
      //   .catch(error => {
      //     alert(error);
      //   });
       
    await getnotes(token.token)
    .then(res => {
      this.allNotes=res.data;
      if (res){
          console.log('====================================');
        console.log("Get All Notes",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { 
      console.log('====================================')
      console.log("error"+error)
      console.log('====================================')})
    },
   }
  
};
</script>
