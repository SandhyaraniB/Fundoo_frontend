<template>
  <div>
    
    <div @click="flagchange" v-if="flag" style="margin:14px">
      <md-card style="width: 600px; height: 54px;">
        <div> 
          
          <input type="text"  placeholder="Take a note..." style="margin: 10px;border:none;width:350px;height:30px;">
          <md-button class="md-icon-button" style="margin-left:20px;">
            <md-icon>list</md-icon>
            <md-tooltip md-direction="bottom">new list</md-tooltip>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>create</md-icon>
            <md-tooltip md-direction="bottom">new note with drawing</md-tooltip>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>crop_original</md-icon>
            <md-tooltip md-direction="bottom">new note with image</md-tooltip>
          </md-button>
        </div>
      </md-card>
    </div>

    <div v-else>
      <md-card class="takenote">
        <div>
          <input type="text" v-model="title" name="title" placeholder="title" class="titleone" style="border: none;" >
           
          <md-button class="md-icon-button">
            <md-icon>location_on</md-icon>
            <md-tooltip md-direction="bottom">pin</md-tooltip>
          </md-button>
        </div>
        <div>
          <input type="text" v-model="content" name="content" placeholder="description" class="titletwo" style="border: none;">
        </div>
       <div>
        <iconlist></iconlist>
       </div>
        <!-- <div class="icon"> -->
          <!-- <md-button class="md-icon-button">
            <md-icon>notifications</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>person_add</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>color_lens</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>crop_original</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>unarchive</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>  @click="flagchange" -->
          <!-- <div> -->
          
          <md-button class="close" @click="createnote()">
            Close
            <md-tooltip md-direction="bottom">close</md-tooltip>
          </md-button>
          <!-- </div> -->
         
        <!-- </div> -->
        <md-ripple>
         
        </md-ripple>
      </md-card>
    </div>
     <md-button class="md-icon-button" @click="getnotes()">
            <md-icon>location_on</md-icon>
            <md-tooltip md-direction="bottom">pin</md-tooltip>
          </md-button>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  border-radius: 10px;
  display: flex;
  width: 420px;
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
  width: 500px;
}
.titleone{
  margin-top: 15px;
  width: 80%;
}
.titletwo{
  // margin-top: 15px;
  width: 80%;
  margin-left: -50px;
}
.icon{
  margin-left: -25px;
}

.close{
  margin-top: -40px;
  margin-left: 80%;
  
}
</style>

<script>
import iconlist from './../components/iconlist'
import {NoteService} from '/home/admin1/Desktop/fundoo/src/Service/NoteService.js'
export default {
  // flag: true,

  data() {
     return {
    title:'',
     content:'',
     flag: true,
    } 
  },
 
  methods: {
    flagchange() {
      this.flag = !this.flag;
      // alert(this.flag);
    },
     createnote(){
       
      
      const data={
        title:this.title,
        content:this.content
        
      }
      // alert("STARTS...."+data.title)
      const token={
       token:localStorage.getItem('token')
      }
       alert("title"+token.token);
    //  console.log('dattaaaaaaaaa')
      // userService.login(data)
      NoteService.CreateNote(data,token)
      .then('created successfully')
        .catch(error => {
      alert(error)
      }) 

  },
   getnotes(){
     //console.log('====================================');
     console.log("werwerwt");
     //console.log('====================================');
     console.log('====================================');
     console.log();
     console.log('====================================');
       const token={
       token:localStorage.getItem('token')
      }
      alert(token.token)
      NoteService.GetAllNotes(token)
      .then('cards')
      
        .catch(error => {
      //alert(error)
      }) 

    }
  },
  components:{
    iconlist
  }
};
</script>
