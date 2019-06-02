<template>
  <div style="width:100%;" class="iconlist">
    <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
    <!-- <md-menu style="margin-left:-5px;" class="mdreminder">
      <md-button md-menu-trigger class="md-icon-button" @click="reminder()">
        <md-icon class="icon">notifications</md-icon>
        <md-tooltip md-direction="bottom">Remind me</md-tooltip>
      </md-button>
      <md-menu-content style="width:200px;height:500px;">
        <md-menu-item>Reminder : </md-menu-item>
        <md-menu-item class="dates" @click="today()">Later today</md-menu-item>
        <md-menu-item class="dates" @click="tomorrow()">Tomorrow</md-menu-item>
        <md-menu-item class="dates">Next week</md-menu-item>
      </md-menu-content>
    </md-menu> -->

    <md-menu style="-5px">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">notifications</md-icon>
        <md-tooltip md-direction="bottom">Remind me</md-tooltip>
      </md-button>
      <md-menu-content style="width:200px;height:500px;">
        <span>Reminder:</span>
        <!-- <md-button> -->
           
          <md-menu-item class="more" @click="today()">Later today</md-menu-item>
        <!-- </md-button> -->
         <!-- <md-button> -->
          
          <md-menu-item class="moree" @click="tomorrow()">Tomorrow</md-menu-item>
          
           
          <md-menu-item class="moree" @click="weeklater()">weeklater</md-menu-item>
 
        <!-- </md-button> -->
        <!-- <md-button md-menuone-trigger @click="visible = !visible">add labels</md-button> -->
        <md-menuone-item v-if="visible" class="dropdown">
          <md-menuone-content style="margin-left:200px;">
            <md-menuone-item>
              
              <getlabelsfornote></getlabelsfornote>
            </md-menuone-item>
          </md-menuone-content>
        </md-menuone-item>
           <!-- </md-list> -->
      </md-menu-content>
    </md-menu>

    <md-menu class="mdcollaborator">
      <md-button md-menu-trigger class="md-icon-button" @click="collaborator()">
        <md-icon class="icon">person_add</md-icon>
        <md-tooltip md-direction="bottom">collaborator</md-tooltip>
      </md-button>
      <!-- <md-menu-content style="width:200px;height:500px;">
        <md-menu-item>Collabrators : </md-menu-item>
        <md-button class="md-icon-button">
          
           <md-icon class="icon"> person_add</md-icon>
         
           </md-button>
      </md-menu-content>-->
    </md-menu>
    <!-- <md-button class="md-icon-button">

      <md-icon >person_add</md-icon>
    </md-button>-->

    <md-menu>
      <md-button md-menu-trigger class="md-icon-button" @click="addcolor()">
        <md-icon class="icon">color_lens</md-icon>
        <md-tooltip md-direction="bottom">add color</md-tooltip>
      </md-button>
      <!-- <md-menu-content style="width:200px;height:150px;">
      <div>
         <md-button class="md-icon-button" style="background-color:white;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:red;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:orange;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:yellow;">
      <md-icon ></md-icon>
    </md-button>

      </div>
      
       <div>
         <md-button class="md-icon-button" style="background-color:green;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:teal;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:blue;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:darkblue;">
      <md-icon ></md-icon>
    </md-button>

      </div>
       <div>
         <md-button class="md-icon-button" style="background-color:purple;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:pink;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:brown;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:grey;">
      <md-icon ></md-icon>
    </md-button>

      </div>
        
      </md-menu-content>-->
    </md-menu>

    <!-- <md-button class="md-icon-button">
      <md-icon class="icon">color_lens</md-icon>
    </md-button>-->
    <md-button class="md-icon-button" @click="addimage()">
      <md-icon class="icon">crop_original</md-icon>
      <md-tooltip md-direction="bottom">add image</md-tooltip>
    </md-button>
    <md-button class="md-icon-button" @click="isArchive()" v-model="noteid">
      <md-icon class="icon">archive</md-icon>
      <md-tooltip md-direction="bottom">archive</md-tooltip>
    </md-button>
    <md-menu>
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">more_vert</md-icon>
        <md-tooltip md-direction="bottom">more</md-tooltip>
      </md-button>
      <md-menu-content style="width:200px;height:500px;">
        <md-button>
          <md-menu-item class="more" @click="deletenote()">Delete note</md-menu-item>
        </md-button>
        <md-button md-menuone-trigger @click="visible = !visible">add labels</md-button>
        <md-menuone-item v-if="visible" class="dropdown">
          <md-menuone-content style="margin-left:200px;">
            <md-menuone-item>
              
              <getlabelsfornote></getlabelsfornote>
            </md-menuone-item>
          </md-menuone-content>
        </md-menuone-item>
      </md-menu-content>
    </md-menu>
    <!-- <md-button @click="getnoteid()">
      <md-icon>menu</md-icon>
    </md-button>
    <blog-post post-title=parentmessage></blog-post>
    <h3>{{ parentmessage }}</h3>-->
  </div>
</template>
<script>
import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import { Labelservice } from "/home/admin1/Desktop/fundoo/src/Service/LabelService.js";
import getlabelsfornote from "./../components/getlabelsfornote.vue";
import Vue from "vue";
import axios from "axios";
import moment from "moment";
export default {
  props: ["parentmessage"],

  // flag: true,
  components: {
    getlabelsfornote
  },
  data() {
    return {
      noteid: this.parentmessage,
      noteidinstr: "",
      labelname: "",
      visible: false
    };
    nnoteid=this.parentmessage
  },
  // data: function(){
  //        return () =>{
  //          noteid: this.parentmessage
  //          alert("RRRRRRR"+noteid)
  //        }
  //     },

  methods: {
    
    getnoteid() {
      console.log("====================================");
      console.log("Dhatri:" + noteid);
      console.log("====================================");
    },

    // ............................................................deletenote.......................................................................................
    deletenote() {
      this.noteid = this.parentmessage;
      // alert(this.noteid);
      // alert("noteid" + this.noteid);
      const token = {
        token: localStorage.getItem("token")
      };
      // NoteService.DeleteNote(this.noteid, token)
      //   .then("notedeleted")
      //   .catch(error => {
      //     alert(error);
      //   });
      axios
        .put("http://localhost:8080/note/trashnote/" + this.noteid, {},{
          headers: { token: token.token }
        })
        .this(response => {
          alert(response.data.message);
        })
        .catch(error => {
          alert(error);
        });
    },

    // ..............................................................addlabel..................................................................................................
    addlabel() {
      const data = {
        labelname: this.labelname
      };
      const token = {
        token: localStorage.getItem("token")
      };
      Labelservice.CreateLabel(data, token)
        .then("labeladded")
        .catch(error => {
          console.log('====================================')
          console.log(error)
          console.log('====================================')
        });
    },
    today() {
      //  this.noteid = this.parentmessage;
      var date = new Date();
      // date.setDate(date.getDate() + 1)
      // var endDate = new Date(date.getDate() + 1);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var data = year+'-'+month+'-'+day;
          Vue.filter('formatDate', function(data) {
      if (date) {
        return moment(String(data)).format('yyyy-mm-dd')
        console.log("====================================");
      console.log(moment(String(data)).format('yyyy-mm-dd'));
      console.log("====================================");
        console.log("DATEEEEE" + moment(String(data)).format("DD/MM/YYYY hh:mm"));
        }
      });
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      this.noteid= this.parentmessage;
      console.log("====================================");
      console.log(this.noteid);
      console.log("====================================");
      const token = {
        token: localStorage.getItem("token") 
      };
      console.log('====================================')
      console.log("253 line"+date)
      console.log('====================================')
     axios.put('http://localhost:8080/note/reminder/'+this.noteid,date,{ headers: {token:token.token} })
     .this(response=>{alert(response)
    })
     .catch(error=>{alert(error)})
  
    },


  tomorrow() {
      //  this.noteid = this.parentmessage;
      var date = new Date();
      date.setDate(date.getDate() + 1)
      // var endDate = new Date(date.getDate() + 1);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var data = year+'-'+month+'-'+day;
          Vue.filter('formatDate', function(data) {
      if (date) {
        return moment(String(data)).format('yyyy-mm-dd')
        console.log("====================================");
      console.log(moment(String(data)).format('yyyy-mm-dd'));
      console.log("====================================");
        console.log("DATEEEEE" + moment(String(data)).format("DD/MM/YYYY hh:mm"));
        }
      });
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      this.noteid= this.parentmessage;
      console.log("====================================");
      console.log(this.noteid);
      console.log("====================================");
      const token = {
        token: localStorage.getItem("token") 
      };
      console.log('====================================')
      console.log("253 line"+date)
      console.log('====================================')
     axios.put('http://localhost:8080/note/reminder/'+this.noteid,date,{ headers: {token:token.token} })
     .this(response=>{
       console.log('====================================');
       console.log(response);
       console.log('====================================');
    })
     .catch(error=>{console.log('====================================');
     console.log( error);
     console.log('====================================');})
  },
  weeklater(){
    //  this.noteid = this.parentmessage;
      var date = new Date();
      date.setDate(date.getDate() + 7)
      // var endDate = new Date(date.getDate() + 1);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var data = year+'-'+month+'-'+day;
          Vue.filter('formatDate', function(data) {
      if (date) {
        return moment(String(data)).format('yyyy-mm-dd')
        console.log("====================================");
      console.log(moment(String(data)).format('yyyy-mm-dd'));
      console.log("====================================");
        console.log("DATEEEEE" + moment(String(data)).format("DD/MM/YYYY hh:mm"));
        }
      });
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      this.noteid= this.parentmessage;
      console.log("====================================");
      console.log(this.noteid);
      console.log("====================================");
      const token = {
        token: localStorage.getItem("token") 
      };
      console.log('====================================')
      console.log("253 line"+date)
      console.log('====================================')
     axios.put('http://localhost:8080/note/reminder/'+this.noteid,date,{ headers: {token:token.token} })
     .this(response=>{alert(response)
    })
     .catch(error=>{alert(error)})
  },
   isArchive(){
     this.noteid = this.parentmessage;
     console.log("noteid==>", this.noteid);
     
      // alert(this.noteid);
      // alert("noteid" + this.noteid);
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("token==>",token);
      
      // NoteService.DeleteNote(this.noteid, token)
      //   .then("notedeleted")
      //   .catch(error => {
      //     alert(error);
      //   });
      axios.put("http://localhost:8080/note/archivenote/" + this.noteid,{}, {
          headers: { token: token.token }
        })
        .then(response => {
          console.log('====================================')
          console.log('response ',response);
          console.log('====================================')
          alert(response.data.message);
        })
        .catch(error => {
          console.log('====================================')
          console.log('error ',error)
          console.log('====================================')
          alert(error);
        });
   },

    collaborator(){
       this.noteid = this.parentmessage;
     const token = {
        token: localStorage.getItem("token")
      };
       NoteService.AddingCollaborator(noteid,emailid,token)
        .catch(error => {
          alert(error);
        });
    },
    // addcolor(){
    //  const token = {
    //     token: localStorage.getItem("token")
    //   };
    //    NoteService.addcolor(noteid,token,color)
    //     .then("reminder done")
    //     .catch(error => {
    //       alert(error);
    //     });
    // },
    addimage(){
     const token = {
        token: localStorage.getItem("token")
      };
       NoteService.AddImageToNote(noteid,token)
        .then("image added to the note")
        .catch(error => {
          alert(error);
        });
    },
  }
};
</script>
<style lang="scss" scoped>
.mdreminder{
  display: flexbox
}
.iconlist{
  display: flex
}
.icon {
  padding: 0px;
  margin-left: 0px;
}

.reminder {
  width: 120px;
  height: 50%;
}

.dates {
  margin-top: -10px;
}

.more {
  margin-top: -20px;
}
.mdcollaborator{
  display: flexbox
}
.md-icon-button
{
  // margin-left: 10px;
}
</style>