<template >
  <div >
   <div v-for= "result in allNotes" v-bind:key="result" class="getcards" @click="noteinfo(result.noteid)">
      <!-- //applying color for card result.colorChange put  in style with binding -->
      <md-card class="takenote">

        <div>
          <input type="text" v-model="result.title" name="title" placeholder="title" class="titleone" style="border: none; outline=none ">
        </div>
        <div>
          <input type="text" v-model="result.content"  name="content" placeholder="description" class="titletwo" style="border: none; outline=none margin-left: 10px;">
        </div>
        <!-- <iconlist @clicked="onClickChild(result.noteid)"></iconlist> -->
        <!-- <button @click="noteinfo" class="btn btn-info">Send Child A Message</button> -->
        <iconlist :parentmessage="parentmessage" style="color:black" @click="noteinfo"></iconlist>
      </md-card>
    </div>
  
    
  </div>
  <!-- <div>
     <v-container>
      <v-layout>
        <v-flex xs12 sm6 md4 ma-5 v-for="result in allNotes" v-bind:key="result">
          <md-card flat class="elevation-20 test">
           
             <v-card-title primary-title class="pa-4"> -->
               <!-- <div>
                  <h3 class="headline mb-0">{{result.title}}</h3>
                  
               </div>
           </v-card-title> -->
          <!-- </md-card>
        </v-flex>
      </v-layout>
   </v-container>
  </div> --> 
</template>
<script>
import iconlist from "./../components/iconlist";
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import axios from 'axios'
export default {

data() {
  this.getnotes()
     return {
      parentmessage:'',
   allNotes:[]
    } 
  },
  components: {
    iconlist,
  },
  methods: {
     sendMessage() {
                this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
            },
    onClickButton (event) {
      this.$emit('clicked', event)
    },
    getnotes() {
      const token = {
        token: localStorage.getItem("token")
      };
      // alert(token.token);
      // NoteService.GetAllNotes(token)
      //   .then("cards.")
      //   .catch(error => {
      //     alert(error);
      //   });
       
    axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
    .then(res => {
      this.allNotes=res.data;
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("Get All Notes",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { alert(error)})
    },
    noteinfo(note){
      console.log('====================================')
      console.log("Particular Note"+note)
       this.parentmessage = note
      console.log('====================================')
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card {
  border-radius: 10px;
  display: flex;
  width: 250px;
  height: 105px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  color: aliceblue;
}
.card-title {
  border: none;
}
.card-note {
  border: none;
}
.takenote {
  width: 275px;
  margin-left: 200px;
}
.titleone {
  margin-top: 15px;
  margin-right:55px;
  width: 70%;
  border: none;
}
.titletwo {
  // margin-top: 15px;
  width: 70%;
  margin-left: -55px;
  border: none;
}
.icon {
  margin-left: -25px;
}

.close {
  margin-top: -40px;
  margin-left: 80%;
}
.getcards{
  display:flex-row;
  // flex-direction:flex-row;
  
}
</style>