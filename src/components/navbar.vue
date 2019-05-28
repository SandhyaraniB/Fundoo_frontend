<template>
  <div id="app" style="margin-top:-60px;">
    <v-flex xs6>
    <v-app id="inspire" dark>
      <v-toolbar style=" background: beige;">
        <md-button
          class="md-icon-button"
          @click="toggleDrawer"
          style="margin-left:-1050px;margin-top:10px;"
        >
          <md-icon>menu</md-icon>
        </md-button>

        <img src="./../assets/keep.png" style="width:35px;margin-top:13px;">

        <span style="margin-left:20px;margin-top:45px;">
          <span class="f">F</span>
          <span class="u">u</span>
          <span class="n">n</span>
          <span class="d">d</span>
          <span class="o">o</span>
          <span class="oo">o</span>
        </span>
        <md-card class="card">
          <md-icon style="margin-left:5px;">search</md-icon>
          <input class="input" placeholder="Search">
        </md-card>

        <md-button
          style="color:black;margin-left: 820px;margin-top: -45px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">refresh</md-icon>
          <md-tooltip md-direction="bottom">Refresh</md-tooltip>
        </md-button>

        <md-button
          style="color:black;margin-top: -45px;margin-left: 10px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">settings</md-icon>
          <md-tooltip md-direction="bottom">settings</md-tooltip>
        </md-button>

        <md-button
          style="color:black;margin-top: -45px;margin-left: 30px;"
          class="md-icon-button"
          width="-30px"
        >
          <md-icon style="color:black">apps</md-icon>
        </md-button>

        <md-button style="margin-top:-45px; margin-left: 40px;" class="md-icon-button">
          <img src="./../assets/dhatri.png" width="20px" style="color:pink;border-radius:20px;">
        </md-button>
      </v-toolbar>
      <v-divider></v-divider>

      <v-navigation-drawer
        :clipped="drawer.clipped"
        :fixed="drawer.fixed"
        :permanent="drawer.permanent"
        :mini-variant="drawer.mini"
        v-model="drawer.open"
        app
      >
        <v-list style="width:200px;">
          <v-list-tile>
          <!-- v-if="!drawer.permanent" @click="makeDrawerPermanent" -->
            <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
              <div>
            <v-list-tile-content>
              <v-list-tile-title>
                <md-button style="width:100px;margin-left:-80px;">
                  <md-icon class="icon">note</md-icon>
                  <span>Notes</span>
                </md-button>
              </v-list-tile-title>
            </v-list-tile-content>
              </div>
              <div>
            <v-list-tile-content>
              <v-list-tile-title>
                <md-button style="width:100px;margin-left:-80px;">
                  <md-icon class="icon">notifications</md-icon>
                  <span>Reminder</span>
                </md-button>
              </v-list-tile-title>
            </v-list-tile-content>
              </div>
            </FlexboxLayout>
          </v-list-tile>
           <md-divider></md-divider>
          <!-- <v-divider></v-divider> -->
          <v-list-tile>
            <v-list-tile-action>
              <span style="width:100px;margin-left:-120px;">Labels</span>
            </v-list-tile-action>
            <v-list-tile-action>
              <!-- <md-button style="width:100px;margin-left:-80px;">
                <md-icon class="icon">create</md-icon>
                <span>Edit Label</span>
              </md-button> -->
              <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

        <md-field md-clearable>
      <!-- <label>Create new label</label> -->
      <md-input v-model="labelname" placeholder="create new label"></md-input>
      <!-- like login -->
    </md-field>
        
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="submit()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button  @click="showDialog = true">Edit Labels</md-button>
  </div>
            </v-list-tile-action>
          </v-list-tile>
          <div>
          </div>
           <md-divider></md-divider>
          <!-- <v-divider></v-divider> -->

          <v-list-tile>
            <v-list-tile-action>
              <md-button style="width:100px;margin-left:-80px;">
                <md-icon class="icon">archive</md-icon>
                <span>Archive</span>
              </md-button>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <md-button style="width:100px;margin-left:-80px;">
                  <md-icon class="icon">delete</md-icon>
                  <span>Trash</span>
                </md-button>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <div style="margin-top:-230px;">
                <CreateNote></CreateNote>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
     </v-flex>
  </div>
</template>


<script>
import CreateNote from "./CreateNote";
export default {
  components: {
    CreateNote
    // cards
  },
  data: () => ({
    showDialog: false,
    labelname:'',
    drawer: {
      // sets the open status of the drawer
      open: true,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: false,
      // sets if the drawer is CSS positioned as 'fixed'
      fixed: false,
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
    },
    footer: {
      // sets the CSS position of the footer
      fixed: true,
      // sets if the footer is full width (true) or gives space to the drawer (false)
      clippedLeft: true
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
    submit(){
      const data={
        labelname:this.labelname
      }
      console.log('====================================')
      console.log("dataAAA",this.labelname);
      console.log('====================================')
        axios
    .post('http://localhost:8080/Label/createlabel',data)
    .then(res => {
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("AAAAAAAAAA",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { alert(error)})
    }
  }
};
</script>
<style lang="scss" scoped>
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
.card {
  margin-top: -45px;
  margin-left: 265px;
  height: 50px;
  width: 50%;
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
</style>


