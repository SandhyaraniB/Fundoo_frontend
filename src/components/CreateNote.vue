<template>
  <div class="createnote" style="height:auto;">
    <div @click="flagchange" v-if="flag" style="margin:14px">
      <md-card style="width: 600px; height:auto;    margin-top: -490px;margin-left:180px;">
        <!-- <div> -->
         <textarea-autosize 
            placeholder="Take a note..."
            class="takenote"
            style="margin:10px;">
         </textarea-autosize>
          <md-button class="md-icon-button" style="margin-left:400px;margin-top:-53px;">
            <md-icon>list</md-icon>
            <md-tooltip md-direction="bottom">new list</md-tooltip>
          </md-button>
          <md-button class="md-icon-button" style="margin-top:-53px;">
            <md-icon>create</md-icon>
            <md-tooltip md-direction="bottom">new note with drawing</md-tooltip>
          </md-button>
          <md-button class="md-icon-button" style="margin-top:-53px;">
            <md-icon>crop_original</md-icon>
            <md-tooltip md-direction="bottom">new note with image</md-tooltip>
          </md-button>
        <!-- </div> -->
      </md-card>
    </div>

    <div v-else>
      <md-card class="takenote" style="margin-top: -470px;;margin-left: 130px;height: auto;width: 600px;  ">
        <div>
          <textarea-autosize 
          v-model="title"
           name="title" 
           placeholder="title" 
           class="titleone">
          </textarea-autosize>
          <md-button class="md-icon-button" @click="pin()">
            <md-icon>
              <img src="../assets/pin.svg">
            </md-icon>
            <md-tooltip md-direction="bottom">pin</md-tooltip>
          </md-button>
        </div>
        <div>
         <textarea-autosize
            v-model="content"
            name="content"
            placeholder="description"
            class="titletwo"
          ></textarea-autosize>
        </div>
        <!-- <div></div> -->
        <div>
          <iconlist></iconlist>
        </div>
        <md-button class="close" @click="createnote()">
          Close
          <md-tooltip md-direction="bottom">close</md-tooltip>
        </md-button>
        <!-- <md-button class="close" @click="updatenote()">
          Updatenote
          <md-tooltip md-direction="bottom">Updatenote</md-tooltip>
        </md-button>-->
      </md-card>
    </div>
  </div>
</template>

<script>
import iconlist from "./../components/iconlist";
import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
export default {
  data() {
    return {
      title: "",
      content: "",
      flag: true
    };
  },

  methods: {
    flagchange() {
      this.flag = !this.flag;
    },
    createnote() {
      const data = {
        title: this.title,
        content: this.content
      };
      const token = {
        token: localStorage.getItem("token")
      };
     
     console.log('====================================');
     console.log("token"+token);
     console.log('====================================');

      NoteService.CreateNote(data, token.token)
        .then("created successfully")
        .catch(error => {
          console.log('====================================');
          console.log("error"+error);
          console.log('====================================');
        });
    },
  },
  components: {
    iconlist
  }
};
</script>
<style lang="scss" scoped>
.createnote{
  display: flex;
}
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
  flex-direction: column;
  border: none;
}
.card-note {
  display: flexbox;
  border: none;
}
.takenote {
  flex-direction: column;
  display: flex;
  width: 600px;
}
.titleone {
  flex-direction: column;
  margin-top: 15px;
  width: 80%;
  border: none;
  outline: none;
}
.titletwo {
  flex-direction: column;
  // margin-top: 15px;
  width: 80%;
  margin-left: -50px;
   border: none;
  outline: none;
}
.icon {
  display: -webkit-flex;
  margin-left: -25px;
}

.close {
  margin-top: -40px;
  margin-left: 80%;
}
.takenote{
width:350px;
height:30px;
border:none; 
outline:none;
}
</style>


