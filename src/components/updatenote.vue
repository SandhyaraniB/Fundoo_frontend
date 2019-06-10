<template>
  <div style="height:auto;">
    <md-card style="width:400px;    height: 201px;" v-bind:style="{ backgroundColor: parentmessage.color }">
      <div style="margin-left:20px;width:350px;">
        <input
          type="text"
          v-model="parentmessage.title"
          name="title"
          placeholder="title"
          style="border: none; outline:none;width:300px;"
          v-bind:style="{ backgroundColor: parentmessage.color } "
        >
      </div>
      <div style="margin-left:20px;width:350px;">
        <input
          type="text"
          v-model="parentmessage.content"
          name="content"
          placeholder="description"
          class="titletwo"
          style="border: none; outline:none;width:300px;"
          v-bind:style="{ backgroundColor: parentmessage.color }"
        >
      </div>
 
      <div style="margin-top:50px;">
        <iconlist :parentmessage="noteid" style="color:white margin-bottom:50px"></iconlist>

        <md-button
          class="md-primary"
          @click="updatenote()"
          style="margin-top:-40px;margin-left:300px"
        >Close</md-button>
      </div>
    </md-card>
  </div>
</template>
<script>
import iconlist from "./../components/iconlist";
import axios from "axios";
export default {
  props: ["parentmessage"],
  data() {
    return {
      showDialog: false,
      title: "",
      contents: ""
    };
  },
  components: {
    iconlist
  },
  methods: {
    updatenote() {
      const data = {
        title: this.parentmessage.title,
        content: this.parentmessage.content
      };
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("====================================");
      console.log("noteid ......" + data.title);
      console.log("====================================");
      axios
        .put("http://localhost:8080/note/updatenote/" + this.noteid, data, {
          headers: { token: token.token }
        })
        .then(res => {
          //VmUser.$bus.$emit('add-user', { user: user})
          console.log("====================================");
          console.log(res.message);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
    }
  }
};
</script>
