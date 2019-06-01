<template>
  <div class="createnote">
    <div @click="flagchange" v-if="flag" style="margin:14px">
      <md-card style="width: 600px; height: 45px;    margin-top: -190px;margin-left:200px;">
        <div>
          <input
            type="text"
            placeholder="Take a note..."
            style="margin: 10px;border:none;width:350px;height:30px; outline=none">
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
      <md-card class="takenote" style="    margin-top: -190px;;margin-left: 150px;">
        <div>
          <input type="text" v-model="title" name="title" placeholder="title" class="titleone">

          <md-button class="md-icon-button">
            <md-icon>location_on</md-icon>
            <md-tooltip md-direction="bottom">pin</md-tooltip>
          </md-button>
        </div>
        <div>
          <input
            type="text"
            v-model="content"
            name="content"
            placeholder="description"
            class="titletwo"
            style="border: none; outline=none"
          >
        </div>
        <div></div>
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
      alert(token);

      NoteService.CreateNote(data, token.token)
        .then("created successfully")
        .catch(error => {
          alert(error);
        });
    },
    updatenote() {
      const data = {
        title: this.title,
        content: this.content
      };
      const token = {
        token: localStorage.getItem("token")
      };
      NoteService.update(data, token)
        .then("created successfully")
        .catch(error => {
          alert(error);
        });
    }
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
}
.icon {
  display: -webkit-flex;
  margin-left: -25px;
}

.close {
  margin-top: -40px;
  margin-left: 80%;
}
</style>


