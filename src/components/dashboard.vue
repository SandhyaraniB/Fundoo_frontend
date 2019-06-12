<template>
  <div>
    <div style=" margin-right: 500px;">
      <CreateNote v-on:createnotee="createnotes($event)"></CreateNote>
    </div>
    <div style=" height:-webkit-fill-available;">
      <!-- <note v-on:gett="getting($event)"></note> -->
       <note :allNotes="allNotes"
       v-on:deletereminder="deletereminder($event)"
       v-on:deletedlabelfromnote="deletelabelfromnote($event)"
       v-on:trashingnote="trashnote($event)"></note>
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
  mounted() {
    this.getnotes();
    console.log("in mounted before");
  },
  methods: {
    createnotes() 
    {
      this.getnotes();
    },
    deletereminder(){
      this.getnotes();
    },
    deletelabelfromnote(){
      this.getnotes();
    },
    trashnote(){
      this.getnotes();
    },
    async getnotes() {
      console.log("after emit in get notes");
      const token = {
        token: localStorage.getItem("token")
      };
       this.allNotes = [];
       await axios
            .get("http://localhost:8080/note/getAllNotes", {
             headers: { token: token.token }
             })
          .then(res => {
          console.log("== in axios ", res.data);
          this.allNotes = res.data;
          // this.$emit("gett");

          console.log("====================================");
          console.log("Get All Notes", this.allNotes);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
    },
   }
  
  
};
</script>
