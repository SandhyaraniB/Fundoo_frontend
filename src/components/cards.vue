<template>
  <div class="cards" style="margin-top:-250px;">
   <div v-for= "result in allNotes" v-bind:key="result" class="getcards" >
   <div v-if="result.trashed==false">
     <md-card md-with-hover v-bind:style="{ backgroundColor: result.color }" style="width: 300px;
    height:auto;"   >
     
        <div @click="showDialog = true" >
        <div v-if="result.imageToNote!=null">
        <img src="result.imageToNote">
        </div>
          <input type="text" v-model="result.title" name="title" placeholder="title" class="titleone" style="border: none; outline:none;"
          v-bind:style="{ backgroundColor: result.color }" @click="update(result)">
            <md-button md-menu-trigger class="md-icon-button" @click="pin(result.noteid)" style="margin-top: -35px; margin-left: 250px;">
         <md-icon v-if="result.pinned='false'" >
            <img src="../assets/pinBeforeClick.svg" >
         </md-icon>
         <md-icon v-else> 
              <img src="../assets/pin.svg" >
            </md-icon> 
            
      </md-button>
        </div>
        <div v-bind:style="{ backgroundColor: result.color }" @click="showDialog = true" >
        <input type="text"
           v-model="result.content" 
           name="content" 
           placeholder="description"
            class="titletwo" 
            style="border: none; outline:none;"
            v-bind:style="{ backgroundColor: result.color }"
            @click="update(result)">
       
        </div>
        <div v-if="result.reminder!=null " style=" width: 100px;">
        <md-chip class="md-accent" md-deletable style="width: auto;margin-left:10px;">{{result.reminder}}</md-chip>
        </div>
        <div v-for="label in result.labell" v-bind:key="label">
        <div v-if="label.labelname!=null" style=" width: 50px;margin-left:10px;">
        <md-chip class="md-accent" md-deletable style="width: auto;">{{label.labelname}}</md-chip>
        </div>
        </div>
 
        <iconlist :parentmessage=result style="color:white; margin-top: 10px;" class="iconlist"></iconlist>
      </md-card >
   </div>
    <div>
     <md-dialog :md-active.sync="showDialog" style="width:400px;height:160px;">
     <updatenote :parentmessage=refval> </updatenote>
    </md-dialog>
    </div>
  </div>
</div>
</template>
<script>
import iconlist from "./../components/iconlist";
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import axios from 'axios'
import updatenote from "./updatenote";
export default {

data() {
 
  this.getnotes()
     return {
      showDialog: false,
      parentmessage:'',
     allNotes:[],
     refval:''
    } 
  },
  components: {
    iconlist,
    updatenote,
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
        console.log(res.message);
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
    update:function(note){
      this.showDialog=false;
      this.refval=note;
      // alert(note.noteid)
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
  margin-top: 45px;
  margin-left: -15px
}
.md-card{
    display: inline-block;
}
</style>