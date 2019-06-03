<template>
  <div class="cards" style="margin-top:-250px;">
   <div v-for= "result in allNotes" v-bind:key="result" class="getcards" >
   <!-- @click="showDialog = true"  -->
   <!-- //applying color for card result.colorChange put  in style with binding -->
   <div v-if="result.trashed==false" >
     <md-card md-with-hover style="width: fit-content;height: auto;">
        <!-- <md-ripple style=" height: 180px;"> -->
        <div >
          <textarea-autosize v-model="result.title" name="title" placeholder="title" class="titleone" style="border: none; outline:none; ">
          </textarea-autosize>

          <!-- <md-icon style="margin-top: -90px; margin-left: 250px;" @click="pin()">
              <img src="../assets/pin.svg">
            </md-icon> -->
            <md-button md-menu-trigger class="md-icon-button" @click="pin(result.noteid)" style="margin-top: -45px; margin-left: 250px;">
         <md-icon >
              <img src="../assets/pin.svg">
            </md-icon> 
      </md-button>
        </div>
        <div>
       <textarea-autosize
           v-model="result.content" 
           name="content" placeholder="description"
            class="titletwo" 
            style="border: none; outline:none;">
       </textarea-autosize>
        </div>
        <div v-if="result.reminder!=null">
        <md-chip class="md-accent" md-deletable>{{result.reminder}}</md-chip>
        </div>
        <div>
        <iconlist :parentmessage=result.noteid style="color:white" class="iconlist"></iconlist>
        </div>
        <!-- <div> -->
    <!-- <md-chip>Static</md-chip> -->
    <!-- <md-chip class="md-primary" md-deletable>Deletable</md-chip> -->
    
    <!-- <md-chip md-disabled>Disabled</md-chip> -->
  <!-- </div> -->
   <!-- </md-ripple> -->
      </md-card >
   </div>
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
  <!-- </div> -->
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
   pin(noteid){
  // this.noteid = this.parentmessage;
     const token = {
        token: localStorage.getItem("token")
      };
        console.log('====================================');
        console.log("noteid ......"+noteid);
        console.log('====================================');  
    axios.put('http://localhost:8080/note/pinnote/'+noteid,{},{ headers: {token:token.token} })
    .then(res => {
       //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log(res.sendMessage);
        console.log('====================================');
        
        
    
    }).catch(error => { 
      console.log('====================================')
      console.log("error"+error)
      console.log('====================================')})
    },
    
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
    }).catch(error => { 
      console.log('====================================')
      console.log("error"+error)
      console.log('====================================')})
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
  display: grid;
/* flex-direction:row wrap; */
grid-template-columns: repeat(3, 3fr);
grid-auto-rows: 158px;
grid-gap: 30px;
}
.md-card {
  border-radius: 10px;
  display: flex;
  width: 250px;
  height: 105px;
  margin: px;
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
  margin-top: -350px;

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
.iconlist{
  margin-left: -15px
}
.md-card{
    display: inline-block;
}
</style>