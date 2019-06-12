<template>
  <div id="app" class="dashboard" style="margin-top:-60px;">
    <!-- <v-flex xs6> -->
    <div style=" width:-webkit-fill-available;">
      <!-- <v-app id="inspire" dark> -->
      <v-toolbar style=" display: flex;flex-direction: row; width:-webkit-fill-available;margin-left: -40px;">
        <!-- <div flex layout="row" layout-align="space-between center"> -->

        <md-button
          class="md-icon-button"
          @click="toggleDrawer"
          style=" margin-left: -1075px;;
                   margin-top: 10px;"
        >
          <md-icon>menu</md-icon>
        </md-button>

        <img src="./../assets/keep.png" style="width:35px;margin-top:13px;margin-left: 10px;} ">
        <label style=" margin-left: 20px;">Fundoo</label>
     <md-card  class="search">
          
          <input
            type="text" v-model="msgg"
            placeholder="Search"
            style="border: none; outline:none;margin-left: 70px;"
            @click="navigationdrawer()"
            v-on:keyup.enter="searchoperation()"
           >
        </md-card>

        <md-button
          style="margin-left: 1000px;margin-top: -45px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon >refresh</md-icon>
          <md-tooltip md-direction="bottom">Refresh</md-tooltip>
        </md-button>

        <md-button
          style="margin-top: -45px;margin-left:0px;flex-direction:column"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon>settings</md-icon>
          <md-tooltip md-direction="bottom">settings</md-tooltip>
        </md-button>

        <md-button
          style="color:black;margin-top: -45px;margin-left:20px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon >apps</md-icon>
        </md-button>
        <!-- <form @submit.prevent="onsubmit" enctype="multipart/form-data"> -->
        <!-- <md-button style="margin-top: -65px; margin-left: 1200px;;background-color:pink" class="md-icon-button"> -->
         <!-- <input type="file" style="width:20px">
         </md-button>  -->
         <!-- ............................................................................................. -->
          <md-dialog :md-active.sync="show">
      <md-dialog-title>UploadProfilepic</md-dialog-title>
   <input type="file">
      <md-dialog-actions>
        <md-button class="md-primary" @click="show = false">Close</md-button>
        <md-button class="md-primary" @click="uploadpic(file)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
<!-- @click="show = true" -->
    <md-button  class="md-icon-button"
      style="margin-top: -65px; margin-left: 1200px;"
     @click="getprofilepic()">
       <md-avatar>
          <img v-bind:src="imgforprofile">
       </md-avatar>
        <md-tooltip md-direction="bottom">uploadimage</md-tooltip>
    </md-button>
    <!-- ............................................................................................. -->
        <!-- <uploadprofilepic>
          <v-btn>s</v-btn>
        </uploadprofilepic> -->
        <!-- </form> -->
      </v-toolbar>
      <v-divider></v-divider>
      <!-- ===================================================================================================================================================== -->
      <v-navigation-drawer
      class="navdrawer"
        :clipped="drawer.clipped"
        :permanent="drawer.permanent"
        v-model="drawer.open"
        app>
        <v-list style="width:200px;">
          <v-list-tile>
            <!-- v-if="!drawer.permanent" @click="makeDrawerPermanent" -->
            <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
              <div>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <md-button style="width:100px;margin-right:300px;" @click="note()">
                      <md-icon class="icon">note</md-icon>
                      <!-- <router-link class="nav-link" to="/navbarr/dashboard" style="color:black"> -->
                        <span>Notes</span>
                      <!-- </router-link> -->
                    </md-button>
                  </v-list-tile-title>
                </v-list-tile-content>
              </div>
              <div>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <md-button style="width:100px;margin-right: 80px;" @click="reminder()">
                      <md-icon class="icon">notifications</md-icon>
                      <!-- <router-link class="nav-link" to="/navbarr/reminder" style="  color:black"> -->
                        <span>Reminder</span>
                      <!-- </router-link> -->
                    </md-button>
                  </v-list-tile-title>
                </v-list-tile-content>
              </div>
            </FlexboxLayout>
          </v-list-tile>
          <md-divider></md-divider>
          <!-- ---------------------------------------------------------------------------------------------------------------------------------- -->
          <v-list-tile>
            <v-list-tile-action>
              <span style="width:100px;margin-left:-120px;">Labels</span>
            </v-list-tile-action>
            <getlabels></getlabels>
            <v-list-tile-action>
              <createlabels
              v-on:addremindertonote="craetelabel($event)"></createlabels>

            </v-list-tile-action>
          </v-list-tile>
          <div></div>
          <md-divider></md-divider>
          <!----------------------------------------------------------------------------------------------------------------- -->
          <v-list-tile>
            <v-list-tile-action>
              <md-button style="width:100px;margin-left:-80px;" @click="archive()">
                <md-icon class="icon">archive</md-icon>
                <!-- <router-link class="nav-link" to="/navbarr/archive" style="  color:black"> -->
                  <span>Archive</span>
                <!-- </router-link> -->
              </md-button>
            </v-list-tile-action>
            <!-- ------------------------------------------------------------------------------------------------------------------->
            <v-list-tile-content>
              <v-list-tile-title>
                <md-button style="width:100px;margin-left:-80px;margin-right: 20px;" @click="trash()">
                  <md-icon class="icon">delete</md-icon>
                  <!-- <router-link class="nav-link" to="/navbarr/trashed" style="  color:black"> -->
                    <span>Trash</span>
                  <!-- </router-link> -->
                </md-button>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- ========================================================================================================================================== -->

      <v-content style="margin-top: -350px;">
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <!-- <div style="margin-top:-230px;">
                  <router-view></router-view>
                  <CreateNote></CreateNote>
              </div>-->
              <div>
                <!-- <router-view></router-view> -->
                <!-- <cards></cards> -->
                <router-view></router-view>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!-- </v-app> -->
    </div>
    <!-- </v-flex> -->
  </div>
</template>
<script>
// import CreateNote from "./CreateNote";
import getlabels from "./../components/getlabels";
import axios from "axios";
// import {router} from '/home/admin1/Desktop/fundoo/src/routesNew.js'
// import cards from "./../components/cards";
// import uploadProfilePic from './uploadprofilepic'
// import { async } from "q";
import {messageService} from "/home/admin1/Desktop/fundoo/src/dataservice/dataservice.js";
import createlabels from './createlabels'

export default {
  
  mounted(){
    this.getprofilepic()
  },
  components: {
    getlabels,
    // uploadProfilePic,
    createlabels,
  },
  data: () => ({
    
    imgforprofile:"",
    msgg:"",
    someData: "",
    showSnackbar: false,
    position: "center",
    duration: 4000,
    isInfinity: false,
    showDialog: false,
    labelname: "",
     show: false,
    results: [],

     fav: true,
      menu: false,
      message: false,
      hints: true,

    drawer: {
      // sets the open status of the drawer
      open: true,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: false,
      // sets if the drawer is CSS positioned as 'fixed'
      // fixed: false,
      // sets if the drawer remains visible all the time (true) or not (false)
      permanent: false,
      // sets the drawer to the mini variant, showing only icons, of itself (true)
      // or showing the full drawer (false)
      mini: true
    },

    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: false
    }
  }),

  props: {
    source: String
  },
  // computed: {
  //   // a computed getter
  //   searchoperation(){
  //     // `this` points to the vm instance
  //     console.log("in computedddddddd",this.msgg);
  //    messageService.sendMessage(this.msgg);
  //   }
  //  },
  methods: {
    // changes the drawer to permanent
    makeDrawerPermanent() {
      this.drawer.permanent = true;
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false;
      this.toolbar.clippedLeft = false;
    },
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini;
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        // set the clipped state of the drawer and toolbar
        // this.drawer.clipped = true
        // this.toolbar.clippedLeft = true
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open;
      }
    },

 craetelabel()
 {
   this.gettinglabels;
 },
    
    uploadpic(event) 
    {
      this.someData = event.target.files[0];

      console.log("====================================");
      console.log("this.someData", event);
      console.log("====================================");

      const token = {
        token: localStorage.getItem("token")
      };
      console.log("====================================");
      console.log("image;" + this.someData + "" + token.token);
      console.log("====================================");
       axios.post("http://localhost:8080/user/uploadprofilepic", this.someData,'',{
          headers: { token: token.token }
        })
        .then(res => {
          res;
        })
        .catch(error => {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });
    },
    getprofilepic(){
      const token = {
        token: localStorage.getItem("token")
          };
      axios.get('http://localhost:8080/user/getprofilepic',{
          headers: { token: token.token }
        })
          .then(response => { 
          console.log(response.data.message)
          this.imgforprofile=response.data.message;
        }).catch(error => { 
            console.log(error)
         
          })
    },
    note()
    {
       this.$router.push({ path: 'dashboard'})
    },
     reminder()
    {
       this.$router.push({ path: 'reminderr'})
    },
    archive(){
      this.$router.push({ path: 'archive'})
    },
    trash()
    {
     this.$router.push({ path: 'trashed'})
      },
       
    navigationdrawer(){
      this.$router.push({path:'searchcomp'})
    },
     searchoperation(){
      // `this` points to the vm instance
      console.log("in computedddddddd",this.msgg);
      messageService.sendMessage(this.msgg);
    }

  }
  }

</script>

<style lang="scss" scoped>
.search{
  display: flex;
  flex-direction: row;
}
.dashboard {
  // display: flex;
  // flex-direction: row;
  width: 100%;
  margin-top: -60px;
}
.f {
  color: blue;
  font-weight: bold;
  font-size: 30px;
  font-family: "Times New Roman";
  text-align: center;
}
.u {
  color: red;
  font-weight: bold;
  font-size: 30px;
  /* // font-family: sans-serif; */
  text-align: center;
}
.n {
  color: yellow;
  font-weight: bold;
  font-size: 30px;
  /* // font-family: sans-serif; */
  text-align: center;
}
.d {
  color: blue;
  font-weight: bold;
  font-size: 30px;
  /* // font-family: sans-serif; */
  text-align: center;
}
.o {
  color: green;
  font-weight: bold;
  font-size: 30px;
  /* // font-family: sans-serif; */
  text-align: center;
}
.oo {
  color: red;
  font-weight: bold;
  font-size: 30px;
  /* // font-family: sans-serif; */
  text-align: center;
}
.search {
  display: flex;
  flex-direction: row;
  margin-top: -45px;
  margin-left: 265px;
  height: 50px;
  width: 60%;
  border-radius: 8px;
}
.input {
  margin-left: 2%;
  margin-top: 10px;
  width: 80%;
  height: 30px;
  border: none;
}
.md-dialog {
  max-width: 768px;
}
.navdrawer{
  display: flex;
  flex-direction: row;
}

</style>

