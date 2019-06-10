<template>
     <div style="margin-right: 200px;">
                <md-dialog :md-active.sync="showDialog">
                  <md-dialog-title>Edit Labels</md-dialog-title>

                  <md-dialog-actions>
                    <input
                      type="text"
                      v-model="labelname"
                      placeholder="labelname"
                      style="border:none,margin-bottom: 300px;" >
                    <!-- <getlabels v-on:labelss="gettinglabels(event)" -->
                    <!-- ></getlabels> -->
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
                    <md-button class="md-primary" @click="addlabel()">Save</md-button>
                  </md-dialog-actions>
                </md-dialog>

                <md-button @click="showDialog = true">
                  <md-icon class="icon">create</md-icon>Edit Labels
                </md-button>
              </div>
</template>

<script>
import { createLabel } from "/home/admin1/Desktop/fundoo/src/Service/labelservice.js";
export default {

     data: () => ({
    
    showSnackbar: false,
    showDialog: false,
    labelname: "",
    }),
    methods: {
   async addlabel() 
   {
      const data = {
        labelname: this.labelname
      };
      const token = {
        token: localStorage.getItem("token")
      };
      // Labelservice.CreateLabel(data, token)
      //   .then("labeladded")
      //   .catch(error => {
      //     console.log("====================================");
      //     console.log(error);
      //     console.log("====================================");
      //   });
      var lab = await createLabel(data,token.token);
        this.$emit("addremindertonote",lab)
    }, 
    }
}
</script>
