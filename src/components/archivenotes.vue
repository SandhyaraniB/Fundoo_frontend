<template>
  <div class="cards">
   <div v-for= "result in allNotes" v-bind:key="result" class="getcards" >
   <!-- @click="showDialog = true"  -->
   <!-- //applying color for card result.colorChange put  in style with binding -->
     <md-card class="takenote" >
        <div>
          <input type="text" v-model="result.title" name="title" placeholder="title" class="titleone" style="border: none; outline=none ">
        </div>
        <div>
          <input type="text" v-model="result.content"  name="content" placeholder="description" class="titletwo" style="border: none; outline=none margin-left: 10px;">
        </div>
        <div>
        <iconlist :parentmessage=result.noteid style="color:white" ></iconlist>
        </div>
      </md-card >
    
    </div>
    <div>
     <md-dialog :md-active.sync="showDialog">
      <!-- <md-dialog-title>Preferences</md-dialog-title> -->
      <md-card class="takenote" >
        <div>
          <input type="text" v-model="title" name="title" placeholder="title" class="titleone" style="border: none; outline=none ">
        </div>
        <div>
          <input type="text" v-model="content"  name="content" placeholder="description" class="titletwo" style="border: none; outline=none margin-left: 10px;">
        </div>
        <div @click="noteinfo(noteid)">
        <iconlist :parentmessage=noteid style="color:white" ></iconlist>
        </div>
          <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
      </md-card >
     
    </md-dialog>
    </div>
</div>
</template>
<script>
import iconlist from "./../components/iconlist";
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import axios from 'axios'
export default {

data() {
 
  this.getnotes()
     return {
      showDialog: false,
      parentmessage:'',
     allNotes:[]
    } 
  },
  components: {
    iconlist,
  },
  methods: {
    // showDailogue(){
    //   this.Dialog=!this.Dialog  
    // },
     sendMessage() {
                // this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
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
      // console.log("Particular Note"+note)
       this.parentmessage = note
      console.log('====================================')
    }
  }
};
</script>
<style lang="scss" scoped>
.cards{
  display: flex;
}
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
  margin-left: 50px;
  margin-top: -400px;
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
 
  flex-direction:flex-row;
  //  flex-direction: column;
  
}
</style>