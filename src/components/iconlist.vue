<template>
  <div class="iconlist">

<!-- ///////////////////////////////////////////////Reminder///////////////////////////////////////////////////// -->
    <md-menu style="margin-left: 20px;">
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
      </md-menu-content>
    </md-menu>
<!-- /////////////////////////////////////////////////////Collabrators///////////////////////////////////////////////////////// -->
    <!-- <md-menu class="md-collaborator">
      <md-button md-menu-trigger class="md-icon-button" @click="collaborator()">
        <md-icon class="icon">person_add</md-icon>
        <md-tooltip md-direction="bottom">collaborator</md-tooltip>
      </md-button>
      <md-menu-content style=" width:auto;height:auto">
        <md-menu-item>Collabrators :</md-menu-item>
        <div>
        <md-button class="md-icon-button">
          <md-icon class="icon">person_add</md-icon>
        </md-button>{{this.emailid}}
        </div>
        <div v-if="newmail==null">
          
        <a class="md-icon-button" @click="addcollaborator()">
          <md-icon class="icon">person_add</md-icon>
        </a>
        <input type="text" v-model="newmail" placeholder="newemailid" style="border:none;outline:none;width:auto;">
        </div>
      </md-menu-content>      
      </md-menu-content>
    </md-menu> -->
    <!-- <md-button md-menu-trigger class="md-icon-button"> -->
        <!-- <md-icon class="icon">person_add</md-icon> -->
        <addcollaborator :note=parentmessage></addcollaborator>
        <!-- <md-tooltip md-direction="bottom">collaborator</md-tooltip> -->
      <!-- </md-button> -->
<!-- ////////////////////////////////////////////////////////////////addcolor///////////////////////////////////////////////////////// -->
    <md-menu>
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">color_lens</md-icon>
        <md-tooltip md-direction="bottom">add color</md-tooltip>
      </md-button>
      <md-menu-content style="width:200px;height:150px;">
        <div>
          <md-button
            class="md-icon-button"
            style="background-color:white;"
            @click="addcolor('white')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button class="md-icon-button" style="background-color:red;" @click="addcolor('red')">
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:orange; "
            @click="addcolor('orange')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:yellow;"
            @click="addcolor('yellow')"
          >
            <md-icon></md-icon>
          </md-button>
        </div>

        <div>
          <md-button
            class="md-icon-button"
            style="background-color:green;"
            @click="addcolor('green')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:teal;"
            @click="addcolor('teal')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:blue;"
            @click="addcolor('blue')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:darkblue;"
            @click="addcolor('darkblue')"
          >
            <md-icon></md-icon>
          </md-button>
        </div>
        <div>
          <md-button
            class="md-icon-button"
            style="background-color:purple;"
            @click="addcolor('purple')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:pink;"
            @click="addcolor('pink')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:brown;"
            @click="addcolor('brown')"
          >
            <md-icon></md-icon>
          </md-button>
          <md-button
            class="md-icon-button"
            style="background-color:grey;"
            @click="addcolor('grey')"
          >
            <md-icon></md-icon>
          </md-button>
        </div>
      </md-menu-content>
    </md-menu>
    <!-- ////////////////////////////////////////////////////////////////////addimage///////////////////////////////////////////////////////////// -->
    <!-- <md-button class="md-icon-button">
      <md-icon class="icon">color_lens</md-icon>
    </md-button>-->
    <md-button class="md-icon-button" @click="addimage()">
      <md-icon class="icon">crop_original</md-icon>
      <md-tooltip md-direction="bottom">add image</md-tooltip>
    </md-button>

    <!-- ///////////////////////////////////////////////////////////////////archive////////////////////////////////////////////////////////// -->
    <md-button class="md-icon-button" @click="isArchive()" v-model="noteid">
      <md-icon class="icon">archive</md-icon>
      <md-tooltip md-direction="bottom">archive</md-tooltip>
    </md-button>
    <!-- /////////////////////////////////////////////////////////////////////more///////////////////////////////////////////////////////////////// -->
    <md-menu>
      <md-button md-menu-trigger class="md-icon-button" >
        <md-icon class="icon" style="margin-right: 20px;">more_vert</md-icon>
        <md-tooltip md-direction="bottom">more</md-tooltip>
      </md-button>
     
      <md-menu-content style="width:200px;height:700px;">
         <md-button>
          <md-menu-item class="more" @click="deletenote()">Delete note</md-menu-item>
        </md-button>
        <md-button md-menuoo-trigger @click="visible = !visible">add labels</md-button>
         <md-menuoo-content>
            <getlabelsfornote :parentmessage="parentmessage"></getlabelsfornote>
         <!-- <md-card style="width:200px;height:1000px;">
        <md-menu-item class="dropdown" v-if="visible" >
          <md-menu-content style="margin-left:200px;">
            <md-menu-item>
                 <getlabelsfornote :parentmessage="parentmessage"></getlabelsfornote>
            </md-menu-item>
          </md-menu-content>
        </md-menu-item>
         </md-card>  -->
         </md-menuoo-content>
      </md-menu-content>
     
    </md-menu>
  </div>
</template>
<script>
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import getlabelsfornote from "./../components/getlabelsfornote.vue";
import Vue from "vue";
import axios from "axios";
import moment from "moment";
import addcollaborator from "./addcollaborator.vue";
import {addcolortonote,addreminder} from '/home/admin1/Desktop/fundoo/src/Service/noteservice.js'
export default {
  props: ["parentmessage"],

  // flag: true,
  components: {
    getlabelsfornote,
    addcollaborator
  },
  data() {
    return {
      newuser:'',
      noteid: 0,
      noteidinstr: "",
      labelname: "",
      emailid:'',
      visible: false
    };
  },
  // emailid:localStorage.getItem(emailid),
  methods: {
    getnoteid() {
      // console.log("====================================");
      // console.log("Dhatri:" + this.noteid);
      // console.log("====================================");
    },

    // ............................................................deletenote.......................................................................................
    deletenote() {
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
      console.log('====================================');
      console.log("..........."+this.noteid);
      console.log('====================================');
      // NoteService.DeleteNote(this.noteid, token)
      //   .then("notedeleted")
      //   .catch(error => {
      //  console.log('====================================');
      //       console.log("error"+error);
      //       console.log('====================================');
      //   });
      axios
        .put(
          "http://localhost:8080/note/trashnote/" + this.noteid,'',
          {
            headers: { token: token.token }
          }
        )
        .this(response => {
          console.log("====================================");
          console.log(response.data.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });
    },

    // .............................................................Reminder..................................................................................................
   
    async today() {
     
      var value = new Date();
     
     this.Date=moment(String(value)).format("YYYY-MM-DD");
      var datemsg =this.Date + 'T' + '08:00:00';
      let dates=new Date(datemsg);
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };

       var rem = await addreminder(this.noteid,dates, token.token);
        this.$emit("addremindertonote",rem)
       
    },

   async tomorrow() {
    var todaydate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    //  todaydate.getDate(todaydate.setDate() + 1)
    console.log("sss",todaydate)
    //  var value = new Date(values);
    this.Date=moment(String(todaydate)).format("YYYY-MM-DD");
    var datemsg =this.Date + 'T' + '08:00:00';
    var dates=new Date(datemsg);
    
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
       var rem = await addreminder(this.noteid,dates, token.token);
        this.$emit("addremindertonote",rem)
    },
   async weeklater() 
    {
    var todaydate = new Date(new Date().getTime() + 7* 24 * 60 * 60 * 1000);
    //  todaydate.getDate(todaydate.setDate() + 1)
    console.log("sss",todaydate)
    //  var value = new Date(values);
    this.Date=moment(String(todaydate)).format("YYYY-MM-DD");
    var datemsg =this.Date + 'T' + '08:00:00';
    var dates=new Date(datemsg);
    
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
      var rem = await addreminder(this.noteid,dates, token.token);
        this.$emit("addremindertonote",rem)
    },
// .......................................................................archive..................................................................................
    isArchive() {
      this.noteid = this.parentmessage.noteid;
      console.log("noteid==>", this.noteid);

      // alert(this.noteid);
      // alert("noteid" + this.noteid);
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("token==>", token);

      // NoteService.DeleteNote(this.noteid, token)
      //   .then("notedeleted")
      //   .catch(error => {
      //     console.log('====================================');
      //   console.log("error"+error);
      //   console.log('====================================');
      // });
      axios
        .put(
          "http://localhost:8080/note/archivenote/" +this.noteid,
          {},
          { headers: { token: token.token } }
        )
        .then(response => {
          console.log("====================================");
          console.log("response ", response.data.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error ", error);
          console.log("====================================");
        });
    },
  // ...........................................................................addcolor.......................................................................................................................
    
    async addcolor(colore) {
      this.noteid = this.parentmessage.noteid;
      console.log("ssssssssssss",this.noteid)
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("token....................",token.token)
        var notes= await addcolortonote(this.noteid,colore, token.token);
        this.$emit("coloraddtonote",notes)
        console.log('====================================');
        console.log("after color add emit", this.$emit("coloraddtonote",notes));
        console.log('====================================');
     
    },
    addimage() {
      const token = {
        token: localStorage.getItem("token")
      };
       axios
        .post(
          "http://localhost:8080/note/addImageToNote/" +
            this.noteid+{},
          { headers: { token: token.token } }
        )
        .then(response => {
          console.log("====================================");
          console.log("response ", response.data.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error ", error);
          console.log("====================================");
        });
    },
  }
};
</script>
<style lang="scss" scoped>
.mdreminder {
  display: flexbox;
}
.iconlist {
  display: flex;
}
.icon {
  // padding: 0px;
  // margin-left: 0px;
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
.mdcollaborator {
  display: flexbox;
}
.md-icon-button {
  // margin-left: 10px;
}
</style>