<template >
  <div class="getlabels">
    <div v-for="label in alllabels" v-bind:key="label">
      <div>
        <md-button @click="addlabeltonote(label.labelid)">
          <!-- <md-checkbox :value="true">{{label.labelname}}</md-checkbox> -->
           <!-- <md-checkbox v-model="array" :value="true">{{label.labelname}}</md-checkbox> -->
         <md-checkbox v-model="label.labelname" value="label.labelid">{{label.labelname}}</md-checkbox>
        </md-button>
      </div>
    </div>
  </div>
</template>
<script>
// import iconlist from "./../components/iconlist";
import { LabelService } from "/home/admin1/Desktop/fundoo/src/Service/LabelService.js";
import labelchecbox from './labelcheckbox';
import axios from "axios";
export default {
  props: ["parentmessage"],
  name: 'RegularCheckboxes',
  data() {
    this.getlabels();
    return {
      value: true,
      alllabels: []
    };
  },
  components: {
    // iconlist
    labelchecbox
  },
  methods: {
    getlabels() {
      const token = {
        token: localStorage.getItem("token")
      };
      // alert(token.token)
      axios
        .get("http://localhost:8080/Label/getAllLabels")
        .then(res => {
          this.alllabels = res.data;
          if (res) {
            //VmUser.$bus.$emit('add-user', { user: user})
            console.log("====================================");
            console.log("AAAAAAAAAA", res);
            console.log("====================================");
          }
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
    },
    addlabeltonote(labelid) {
      this.noteid = this.parentmessage.noteid;
      const token = {
        token: localStorage.getItem("token")
      };
      console.log("====================================");
      console.log("inside method");
      console.log("====================================");
      axios
        .post(
          "http://localhost:8080/Label/addinglabeltonote/" +
            this.noteid +
            "/" +
            labelid
        )
        .then(res => {
          res;
        })
        .catch(error => {
          console.log("====================================");
          console.log("error in adding label to note" + error);
          console.log("====================================");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.getlabels {
  display: flex;
  flex-direction: column;
}
</style>