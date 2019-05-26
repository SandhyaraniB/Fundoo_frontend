<template>
  <div>
    <!-- <router-view></router-view> -->
    <div>
      <md-toolbar md-elevation="0" class="toolbar">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
           <div>
             <img src="./../assets/keep.png" width="25px">
           </div>
          <div style="margin-right: 91px;width: 15%;text-align: start;">
            <p style="margin-left:10px">FundooNotes</p>
          </div>
         


          <div class="md-toolbar-section-center" style="width: 40%; text-align: start;">
            <!-- <input  style="width: -webkit-fill-available;border:none;" type="text" placeholder="Search"> -->
            <!-- <label for="search"><i class="material-icons">search</i></label> -->
            <md-card class="card">
               <md-icon style="margin-left:5px;">search</md-icon>
              <input class="input" placeholder="Search">
             

            </md-card>
          </div>
          <!-- <v-btn icon> 
          <v-icon>search</v-icon>
          </v-btn>-->
          <div class style="margin-left: 100px;">
            <md-button style="color:black" class="md-icon-button" width="-30px">
              <md-icon style="color:black">refresh</md-icon>
            </md-button>
          </div>

          <div class style="margin-left: 10px;">
            <md-button style="color:black" class="md-icon-button" width="-30px">
              <md-icon style="color:black">settings</md-icon>
            </md-button>
          </div>

          <div class style="margin-left: 10px;">
            <md-button style="color:black" class="md-icon-button" width="-30px">
              <md-icon style="color:black">apps</md-icon>
            </md-button>
          </div>

          <div class style="margin-right: 15px;">
            
            <!-- <md-button> -->
                <!-- <img src="./../assets/dhatri.png" width="20px" style="color:pink;border-radius:20px;"> -->
            <!-- </md-button> -->
             <md-button class="md-icon-button">
                      <img src="./../assets/dhatri.png" width="50px" style="color:pink;border-radius:30px;">

      </md-button>
          </div>
        </div>
      </md-toolbar>
    </div>
    <div>
      <md-drawer :md-active.sync="showNavigation" class="sidenav">
        <md-content class="md-scrollbar">
          <md-list>
            <md-tabs md-sync-route>
              <md-list-item>
                <md-tab id="tab-home" md-label="Notes" to="/navbar/CreateNote" exact></md-tab>
              </md-list-item>
              <!-- <md-list-item>
                                          <md-tab id="tab-home" md-label="Reminder" to="/note/Reminder" exact>
                                              </md-tab>
              </md-list-item>-->
              <!-- <md-divider></md-divider> -->

              <!-- <md-tab id="tab-home" md-label="archive" to="/note/Archive" exact>
                                                  </md-tab>

              <md-tab id="tab-home" md-label="Trash" to="/note/Trash" exact>-->
              <!-- </md-tab> -->
            </md-tabs>
          </md-list>
        </md-content>
      </md-drawer>
    </div>
    <CreateNote></CreateNote>
    <cards></cards>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style scoped>
.md-primary {
  color: black;
}
.md-toolbar-row {
  background-color: white;
}

.toolbar {
  margin-left: -15px;
  margin-top: -58px;
  width: 101%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  width: 103%;
}
#Search {
  padding: 3px;
  width: 77%;
  border-radius: 8px;
}
.search
{
width: 42px;
height: 47px;
margin-left: 5px;
margin-top: 5px;
background: transparent;
}

.sidenav {
  margin-top: 10px;
  height: 600px;
  /* overflow: visible; */
  width: 200px;
}

.md-content {
  max-width: 400px;
  max-height: 200px;
  overflow: auto;
}

.md-drawer {
  margin-top: 110px;
}
.card{
  margin-left: -90px;
  height: 40px;
  width: 140%;
  border-radius: 8px;
}
.input{
  margin-left: 2%;
  margin-top: 5px;
  width: 90%;
  height: 30px;
  border: none;
}
</style>

<script>
import CreateNote from "./CreateNote";
import cards from "./cards";
export default {
  name: "IconButtons",
  components: {
    CreateNote,
    cards
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  })
};
</script>
