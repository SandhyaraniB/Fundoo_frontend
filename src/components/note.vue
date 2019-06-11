<template>
  <div>
    <!-- <div style=" margin-right: 500px;">
      <CreateNote v-on:notecreation="createnotes($event)"></CreateNote>
    </div> -->
    <div class="cards" :is-draggable="true" style="margin-top: 50px;">
      <div v-for="result in allNotes" v-bind:key="result.noteId" class="getcards">
        <div v-if="result.trashed==false">
          <v-flex xs12 md6>
            <md-card
              md-with-hover
              v-bind:style="{ backgroundColor: result.color }"
              style="width: 300px;height:auto;"
            >
              <div @click="showDialog = true">
                <div v-if="result.imageToNote!=null">
                  <img src="result.imageToNote">
                </div>
                <input
                  type="text"
                  v-model="result.title"
                  name="title"
                  placeholder="title"
                  class="titleone"
                  style="border: none; outline:none;"
                  v-bind:style="{ backgroundColor: result.color }"
                  @click="update(result)"
                >
                <md-button
                  md-menu-trigger
                  class="md-icon-button"
                  @click="pin(result.noteid)"
                  style="margin-top: -35px; margin-left: 250px;"
                >
                  <md-icon v-if="result.pinned='false'">
                    <img src="../assets/pinBeforeClick.svg">
                  </md-icon>
                  <md-icon v-else>
                    <img src="../assets/pin.svg">
                  </md-icon>
                </md-button>
              </div>
              <div v-bind:style="{ backgroundColor: result.color }" @click="showDialog = true">
                <input
                  type="text"
                  v-model="result.content"
                  name="content"
                  placeholder="description"
                  class="titletwo"
                  style="border: none; outline:none;"
                  v-bind:style="{ backgroundColor: result.color }"
                  @click="update(result)"
                >
              </div>
              <div v-if="result.reminder!=null " style=" width: 100px;">
                <md-chip
                  class="md-accent"
                  md-deletable
                  style="width:200px;margin-left:10px;"
                  @click="deletereminderr(result.noteid)"
                >{{result.reminder}}</md-chip>
              </div>
              <div v-for="label in result.labell" v-bind:key="label">
                <div v-if="label.labelname!=null" style=" width: 50px;margin-left:10px;">
                  <md-chip
                    class="md-accent"
                    md-deletable
                    style="width: auto;"
                    @click="deletelabel(label)"
                  >{{label.labelname}}</md-chip>
                </div>
              </div>

              <iconlist
                :parentmessage="result"
                v-on:coloraddtonote="addcolortonote($event)"
                v-on:addremindertonote="addremindertonotee($event)"
                style="color:white; margin-top: 10px;"
                class="iconlist"
              ></iconlist>
            </md-card>
          </v-flex>
        </div>
        <div>
          <md-dialog :md-active.sync="showDialog" style="width:400px;height:160px;">
            <updatenote :parentmessage="refval"></updatenote>
          </md-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import iconlist from "./../components/iconlist";
import CreateNote from "./CreateNote";
import {deletereminder,deletelabel} from '/home/admin1/Desktop/fundoo/src/Service/noteservice.js';
import axios from "axios";
import updatenote from "./updatenote";
export default {
   props: ['allNotes'],
  data() {
    return {
      showDialog: false,
      parentmessage: "",
      // allNotes: [],
      refval: ""
    };
  },
  components: {
    iconlist,
    updatenote,
    CreateNote
  },
  // mounted() {
  //   this.getnotes();
  //   console.log("in mounted before");
  // },
  methods: {
    // createnotes() {
    //   //  console.log('====================================')
    //   //  console.log("in create notes",e)
    //   this.getnotes();
    //   // console.log("=== after getnotes");
    //   // console.log("creatennnnnnnnnnnn" + this.allNotes);
    //   // console.log("====================================");
    // },
    addcolortonote(event) {
      console.log("in note adding color", event);
      this.getnotes();
    },
    addremindertonotee()
    {
      this.getnotes();
    },
    deletereminder(){
      this.getnotes();
    },
    pin(noteid) {
      // this.noteid = this.parentmessage;
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("====================================");
      console.log("noteid ......" + noteid);
      console.log("====================================");
      axios
        .put(
          "http://localhost:8080/note/pinnote/" + noteid,
          {},
          { headers: { token: token.token } }
        )
        .then(res => {
          console.log("====================================");
          console.log(res.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
    },
  
    update: function(note) {
      this.showDialog = false;
      this.refval = note;
      // alert(note.noteid)
    },
   
   
   getnotes() {
      console.log("after emit in get notes");
      const token = {
        token: localStorage.getItem("token")
      };
       //this.allNotes = [];
       axios
        .get("http://localhost:8080/note/getAllNotes", {
          headers: { token: token.token }
        })
        .then(res => {
          console.log("== in axios ", res.data);
          if(result.trashed!=true)
          {
          this.allNotes = res.data;
          }
          // this.$emit("gett");

          console.log("====================================");
          console.log("Get All Notes", this.allNotes);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
    },
    noteinfo(note) {
      console.log("====================================");
      // console.log("Particular Note"+note)
      this.parentmessage = note;
      console.log("====================================");
    },

   async deletelabel(label) {
      console.log("====================================");
      console.log(label.labelid);
      console.log("====================================");
       var deletelabell= await deletelabel(label.labelid);
    this.$emit("deletedlabel",deletelabell)
    },
    // deletereminder
    async deletereminderr(noteid) {
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("====================================");
      console.log("noteid ......" + noteid);
      console.log("====================================");
    var deletedreminder= await deletereminder(noteid, token.token);
    this.$emit("deletereminder",deletedreminder)
    }
  }
};
</script>
<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  display: grid;
  //  flex-direction:row ;
  flex-wrap: wrap;
  flex-direction: row wrap;
  margin-top: 124px;
  height: -webkit-fill-available;
  justify-content: space-between;
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
  margin-right: 55px;
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
.getcards {
  flex-direction: flex-row;
  display: block;
  // position: absolute;
  // z-index: 1;

  //  flex-direction: column;
}
.iconlist {
  margin-top: 45px;
  margin-left: -15px;
}
.md-card {
  display: inline-block;
}
</style>