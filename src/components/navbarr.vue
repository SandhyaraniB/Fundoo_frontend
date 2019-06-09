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
        <!-- <div style="    width: 40px;
    margin-top: -30px;
        margin-left: 140px;">-->
        <!-- <span    style=" margin-left: 20px;"> -->
        <!-- <span class="f">F</span>
            <span class="u">u</span>
            <span class="n">n</span>
            <span class="d">d</span>
            <span class="o">o</span>
        <span class="oo">o</span>-->
        <!-- </span> -->
        <!-- </div> -->

        <md-card class="search">
          <md-icon style="margin-left:5px;">search</md-icon>
          <input
            class="input"
            placeholder="Search"
            style="border: none; outline:none;"
            @click="search()"
          >
        </md-card>

        <md-button
          style="color:black;margin-left: 1000px;margin-top: -45px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">refresh</md-icon>
          <md-tooltip md-direction="bottom">Refresh</md-tooltip>
        </md-button>

        <md-button
          style="color:black;margin-top: -45px;margin-left:0px;flex-direction:column"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">settings</md-icon>
          <md-tooltip md-direction="bottom">settings</md-tooltip>
        </md-button>

        <md-button
          style="color:black;margin-top: -45px;margin-left:20px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">apps</md-icon>
        </md-button>
        <!-- <form @submit.prevent="onsubmit" enctype="multipart/form-data"> -->
        <!-- <md-button style="margin-top: -65px; margin-left: 1200px;;background-color:pink" class="md-icon-button"> -->
         <!-- <input type="file" style="width:20px">
         </md-button>  -->
          <md-dialog :md-active.sync="show">
      <md-dialog-title>UploadProfilepic</md-dialog-title>
   <input type="file">
      <md-dialog-actions>
        <md-button class="md-primary" @click="show = false">Close</md-button>
        <md-button class="md-primary" @click="uploadpic(file)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button  class="md-icon-button" @click="show = true" style="margin-top: -65px; margin-left: 1200px;">
        <md-icon class="icon"></md-icon>
        <md-tooltip md-direction="bottom">uploadimage</md-tooltip>
    </md-button>
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
              <div style="margin-right: 200px;">
                <md-dialog :md-active.sync="showDialog">
                  <md-dialog-title>Edit Labels</md-dialog-title>
                  <!-- 
                  <md-field md-clearable>-->
                  <!-- <md-input v-model="result.labelname" placeholder="create new label"></md-input> -->

                  <!-- <md-select v-model="labelname"
                        name="labelname"
                        placeholder="select label name"
                        id="labelname">
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                      </md-select>
                  </md-field>-->

                  <md-dialog-actions>
                    <input
                      type="text"
                      v-model="labelname"
                      placeholder="labelname"
                      style="border:none,margin-bottom: 300px;"
                    >
                    <getlabels></getlabels>
                    <md-button
                      type="submit"
                      class="md-primary md-raised"
                      @click="showDialog = false"
                    >Close</md-button>
                    <md-snackbar
                      :md-position="position"
                      :md-duration="isInfinity ? Infinity : duration"
                      :md-active.sync="showSnackbar"
                      md-persistent>
                      <span>Connection timeout. Showing limited messages!</span>
                      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
                    </md-snackbar>
                    <md-button class="md-primary" @click="submit()">Save</md-button>
                  </md-dialog-actions>
                </md-dialog>

                <md-button @click="showDialog = true">
                  <md-icon class="icon">create</md-icon>Edit Labels
                </md-button>
              </div>
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
import {router} from '/home/admin1/Desktop/fundoo/src/routesNew.js'
// import cards from "./../components/cards";
import uploadProfilePic from './uploadprofilepic'
import { async } from "q";
export default {
  components: {
    // CreateNote,
    // cards,
    getlabels,
    uploadProfilePic
  },
  data: () => ({
    someData: "",
    showSnackbar: false,
    position: "center",
    duration: 4000,
    isInfinity: false,
    showDialog: false,
    labelname: "",
     show: false,
    results: [],
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

    submit() {
      const data = {
        labelname: this.labelname
      };
      const token = {
        token: localStorage.getItem("token")
      };
      // alert("labelname");
      axios
        .post("http://localhost:8080/Label/createlabel", data, {
          headers: { token: token.token }
        })
        .then(res => {
          if (res) {
            //VmUser.$bus.$emit('add-user', { user: user})
            console.log("====================================");
            console.log("AAAAAAAAAA", res);
            console.log("====================================");
          }
        })
        .catch(error => {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });
    },

    uploadpic(event) {
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
       axios.post("http://localhost:8080/user/uploadprofilepic",file,'',{
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
    note()
    {
       this.$router.push({ path: 'dashboard'})
    },
     reminder()
    {
       this.$router.push({ path: 'reminder'})
    },
    archive(){
      this.$router.push({ path: 'archive'})
    },
    trash()
    {
     this.$router.push({ path: 'trashed'})
      }
  }
};
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

