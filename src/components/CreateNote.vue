<template>
  <div class="create" >
    <div @click="flagchange" v-if="flag" >
      <md-card style="width: 600px;margin-left: 130px; height:50px;margin-top: -70px;">
        <!-- <div> -->
        <textarea-autosize placeholder="Take a note..." class="takenote" style="margin:10px;margin-left: -200px;"></textarea-autosize>
        <md-button class="md-icon-button" style="margin-left:400px;margin-top:-53px;">
          <md-icon>list</md-icon>
          <md-tooltip md-direction="bottom">new list</md-tooltip>
        </md-button>
        <md-button class="md-icon-button" style="margin-top:-53px;">
          <md-icon>create</md-icon>
          <md-tooltip md-direction="bottom">new note with drawing</md-tooltip>
        </md-button>
        <md-button class="md-icon-button" style="margin-top:-53px;">
          <md-icon>crop_original</md-icon>
          <md-tooltip md-direction="bottom">new note with image</md-tooltip>
        </md-button>
        <!-- </div> -->
      </md-card>
    </div>

    <div v-else>
      <md-card
        class="takenote"
        style="margin-left: 130px;width: 600px; height: auto; margin-top: -70px;" >
        <div>
          <textarea-autosize v-model="title" name="title" placeholder="title" class="titleone"></textarea-autosize>
          <md-button class="md-icon-button" @click="pin()">
            <md-icon>
              <img src="../assets/pinBeforeClick.svg" >
            </md-icon>
            <md-tooltip md-direction="bottom">pin</md-tooltip>
          </md-button>
        </div>
        <div>
          <textarea-autosize
            v-model="content"
            name="content"
            placeholder="description"
            class="titletwo"
          ></textarea-autosize>
        </div>
      
        <div >
          <iconlist ></iconlist>
        </div>
        <md-button class="close" @click="createnote()" >
          Close
          <md-tooltip md-direction="bottom">close</md-tooltip>
        </md-button > 
       
      </md-card>
    </div>
   
  </div>
</template>

<script>
import iconlist from "./../components/iconlist";
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import {createNote} from "/home/admin1/Desktop/fundoo/src/Service/noteservice.js"
// import cards from "./cards"
import axios from 'axios'
export default {
  data() {
    return {
      title: "",
      content: "",
      flag: true,
    };
  },
components:{
  // cards
},
  methods: {
    flagchange() {
      this.flag = !this.flag;
    },
   async createnote() 
   {
      const data = {
        title: this.title,
        content: this.content
         };
      const token = {
        token: localStorage.getItem("token")
        };
    var notes= await createNote(data, token.token);
    this.$emit("createnotee",notes)
    this.flag = !this.flag;
   
    }
  },
  components: {
    iconlist
  }
};
</script>
<style lang="scss" scoped>
.create {
  // display: flex;
}
.md-card {
  border-radius: 10px;
  // display: flex;
  width: 420px;
  height: 105px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  color: aliceblue;
}
.card-title {
  flex-direction: column;
  border: none;
}
.card-note {
  // display: flexbox;
  border: none;
}
.takenote {
  // flex-direction: column;
  // display: flex;
  width: 600px;
}
.titleone {
  // flex-direction: column;
  margin-top: 15px;
  width: 80%;
  border: none;
  outline: none;
}
.titletwo {
  // flex-direction: column;
  // margin-top: 15px;
  width: 80%;
  margin-left: -50px;
  border: none;
  outline: none;
}
.icon {
  // display: -webkit-flex;
  margin-left: -25px;
}

.close {
  margin-top: -40px;
  margin-left: 80%;
}
.takenote {
  width: 350px;
  height: 30px;
  border: none;
  outline: none;
}
</style>


