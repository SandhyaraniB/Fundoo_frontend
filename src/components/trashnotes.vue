<template>
  <div class="cards">
    <div v-for="result in allNotes" v-bind:key="result" class="getcards">
      <div v-if="result.trashed!=false">
      <md-card class="takenote" style="width:250px; margin-top: 100px;">
        <div>
          <input
            type="text"
            v-model="result.title"
            name="title"
            placeholder="title"
            class="titleone"
            style="border: none; outline:none; "
          >
        </div>
        <div>
          <input
            type="text"
            v-model="result.content"
            name="content"
            placeholder="description"
            class="titletwo"
            style="border: none; outline:none;"
          >
        </div>
        <div>
          <!-- <iconlist :parentmessage="result" style="color:white"></iconlist> -->
         <!-- <md-button class="md-icon-button" @click="deletenote(result.noteid)">
      <md-icon class="icon" style="    margin-left: 3px;
          ">delete</md-icon>
      <md-tooltip md-direction="bottom">Delete</md-tooltip>
    </md-button> -->

      <md-menu>
      <md-button md-menu-trigger class="md-icon-button" >
        <md-icon class="icon" >more_vert</md-icon>
        <md-tooltip md-direction="bottom">more</md-tooltip>
      </md-button>
     
      <md-menu-content style="width:200px;height:700px;">
         <md-button>
          <md-menu-item class="more" @click="deletenote(result.noteid)">Delete permanently</md-menu-item>
        </md-button>
        <md-button @click="untrashnote(result.noteid)">Restore note</md-button>
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
      </md-card>
      </div>
    </div>
    <div>
      <md-dialog :md-active.sync="showDialog">
        <!-- <md-dialog-title>Preferences</md-dialog-title> -->
        <md-card style="width:250px">
          <div>
            <input
              type="text"
              v-model="title"
              name="title"
              placeholder="title"
              class="titleone"
              style="border: none; outline:none ;"
            >
          </div>
          <div>
            <input
              type="text"
              v-model="content"
              name="content"
              placeholder="description"
              class="titletwo"
              style="border: none; outline:none;margin-left: -55px;"
            >
          </div>
          <!-- <div @click="noteinfo(noteid)">
          </div> -->
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          </md-dialog-actions>
        </md-card>
      </md-dialog>
    </div>
  </div>
</template>
<script>
import iconlist from "./../components/iconlist";
// import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import axios from "axios";
export default {
  data() {
    this.getnotes();
    return {
      showDialog: false,
      parentmessage: "",
      allNotes: []
    };
  },
  components: {
    iconlist
  },
  methods: {
    // showDailogue(){
    //   this.Dialog=!this.Dialog
    // },
    sendMessage() {
      // this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
    },
    onClickButton(event) {
      this.$emit("clicked", event);
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

      axios
        .get("http://localhost:8080/note/getAllNotes", {
          headers: { token: token.token }
        })
        .then(res => {
          this.allNotes = res.data;
          if (res) {
            //VmUser.$bus.$emit('add-user', { user: user})
            console.log("====================================");
            console.log("Get All Notes", res);
            console.log("====================================");
          }
        })
        .catch(error => {
          console.log('====================================');
          console.log("error"+error);
          console.log('====================================');
        });
    },
     deletenote(noteid) {
      const token = {
        token: localStorage.getItem("token")
      };
      console.log('====================================');
      console.log("nnnnnnnnnnnnnnnn"+noteid);
      console.log('====================================');
      // NoteService.DeleteNote(this.noteid, token)
      //   .then("notedeleted")
      //   .catch(error => {
      //  console.log('====================================');
      //       console.log("error"+error);
      //       console.log('====================================');
      //   });
      axios
        .delete(
          "http://localhost:8080/note/deletenote/" +noteid,
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
   async untrashnote(noteid){
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
      console.log('====================================');
      console.log("....untrahnote method in trashnote component.......",this.noteid,"------token---",token.token);
      console.log('====================================');
      var deleten= await trsahnote(this.noteid,token.token)
      console.log("+++++++++++",deleten.data. message)
      this.$emit("trashingnote",deleten)
      // const token = {
      //   token: localStorage.getItem("token")
      // };
      // console.log('====================================');
      // console.log("...........",noteid);
      // console.log('====================================');
      // // NoteService.DeleteNote(this.noteid, token)
      // //   .then("notedeleted")
      // //   .catch(error => {
      // //  console.log('====================================');
      // //       console.log("error"+error);
      // //       console.log('====================================');
      // //   });
      // axios
      //   .put(
      //     "http://localhost:8080/note/trashnote/" + noteid,'',
      //     {
      //       headers: { token: token.token }
      //     }
      //   )
      //   .this(response => {
      //     console.log("====================================");
      //     console.log(response.data.message);
      //     console.log("====================================");
      //   })
      //   .catch(error => {
      //     console.log("====================================");
      //     console.log(error);
      //     console.log("====================================");
      //   });
}
  }
};
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  // display: grid;
   flex-direction:row wrap; 
  // grid-template-columns: repeat(3, 3fr);
  // grid-auto-rows: 158px;
  // grid-gap: 23px;
 
}
.md-card {
  border-radius: 10px;
  display: flex;
  width: 300px;
  // height: auto;
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

.titleone {
  margin-top: 15px;
  // margin-right: 55px;
  width: 70%;
  border: none;
}
.titletwo {
  // margin-top: 15px;
  width: 70%;
  // margin-left: -55px;
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
  //  flex-direction: column;
}
</style>