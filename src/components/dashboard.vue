<template>
  <div>
    <!-- <div style=" margin-right: 500px;">
      <CreateNote v-on:createnotee="createnotes($event)"></CreateNote>
    </div> -->
    <div style=" height:-webkit-fill-available;  margin-top: 228px;margin-top: -150px; ">
      <note v-on:gett="getting($event)"></note>
    </div>
  </div>
</template>

<script>
import CreateNote from "./CreateNote";
// import cards from './cards'
import note from "./note";
import axios from "axios"
// import {getnotes} from "/home/admin1/Desktop/fundoo/src/Service/noteservice.js"
// import reminder from './reminder'
export default {
  data() {
    // this.getnotes()
        return {
      allNotes:[] // This value is set to the value emitted by the child
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
    createnotes(e) {
     this.getting();
     console.log('====================================');
     console.log("creatennnnnnnnnnnn",this.allNotes);
     console.log('====================================');
    },
    getting(e){
    this.allNotes.push(e)
     console.log('====================================');
     console.log("getttnotessssssssssss",this.allNotes);
     console.log('====================================');
    },
  //  async getnotes() {
  //   // alert('lll')
  //     const token = {
  //       token: localStorage.getItem("token")
  //     };
  //     // alert(token.token);
  //     // NoteService.GetAllNotes(token)
  //     //   .then("cards.")
  //     //   .catch(error => {
  //     //     alert(error);
  //     //   });
       
  //   // await getnotes(token.token)
  //  await  axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
  //   .then(res => {

  //     this.allNotes=res.data;

  //     if (res){
  //         console.log('====================================');
  //       console.log(" dashboard",res);
  //       console.log('====================================');
        
        
  //     }
  //   }).catch(error => { 
  //     console.log('====================================')
  //     console.log("error"+error)
  //     console.log('====================================')})
  //   },
   },
   mounted(){
this.getting();
   }
  
};
</script>
