<template>
  <div style="width:100%;">
    <!-- <div>
      <md-chip class="md-primary" md-deletable>Deletable</md-chip>
    </div> -->
    <md-menu style="margin-left:-5px;">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">notifications</md-icon>
        <md-tooltip md-direction="bottom">notifications</md-tooltip>
      </md-button>
      <!-- <md-menu-content style="width:200px;height:500px;">
        <md-menu-item>Reminder : </md-menu-item>
        <md-menu-item class="dates" @click="today()">Later today</md-menu-item>
        <md-menu-item class="dates">Tomorrow</md-menu-item>
        <md-menu-item class="dates">Next week</md-menu-item>
      </md-menu-content> -->
    </md-menu>

    <md-menu style="margin-left:-5px;">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">person_add</md-icon>
        <md-tooltip md-direction="bottom">collaborator</md-tooltip>
      </md-button>
      <!-- <md-menu-content style="width:200px;height:500px;">
        <md-menu-item>Collabrators : </md-menu-item>
        <md-button class="md-icon-button">
           <md-icon class="icon"> person_add</md-icon>
         
           </md-button>
      </md-menu-content>-->
    </md-menu>
    <!-- <md-button class="md-icon-button">

      <md-icon >person_add</md-icon>
    </md-button>-->

    <md-menu style="margin-left:-5px;">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">color_lens</md-icon>
        <md-tooltip md-direction="bottom">add color</md-tooltip>
      </md-button>
      <!-- <md-menu-content style="width:200px;height:150px;">
      <div>
         <md-button class="md-icon-button" style="background-color:white;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:red;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:orange;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:yellow;">
      <md-icon ></md-icon>
    </md-button>

      </div>
      
       <div>
         <md-button class="md-icon-button" style="background-color:green;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:teal;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:blue;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:darkblue;">
      <md-icon ></md-icon>
    </md-button>

      </div>
       <div>
         <md-button class="md-icon-button" style="background-color:purple;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:pink;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:brown;">
      <md-icon ></md-icon>
    </md-button>
    <md-button class="md-icon-button" style="background-color:grey;">
      <md-icon ></md-icon>
    </md-button>

      </div>
        
      </md-menu-content>-->
    </md-menu>

    <!-- <md-button class="md-icon-button">
      <md-icon class="icon">color_lens</md-icon>
    </md-button>-->
    <md-button class="md-icon-button">
      <md-icon class="icon">crop_original</md-icon>
      <md-tooltip md-direction="bottom">add image</md-tooltip>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon class="icon">archive</md-icon>
      <md-tooltip md-direction="bottom" @click="isArchive()">archive</md-tooltip>
    </md-button>
    <!-- <md-button class="md-icon-button">
      <md-icon class="icon">more_vert</md-icon>
      <md-tooltip md-direction="bottom">more</md-tooltip>
    </md-button>-->
    <md-menu style="margin-left:-5px;">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon class="icon">more_vert</md-icon>
        <md-tooltip md-direction="bottom">more</md-tooltip>
      </md-button>
       <md-menu-content style="width:200px;height:500px;">
        <md-menu-item class="more" @click="deletenote()">Delete note</md-menu-item> 
        <md-menu-item class="more" @click="addlabel()">add labels</md-menu-item>
        <!-- <md-menu-item class="more">Add drawing</md-menu-item>
        <md-menu-item class="more">Make a copy</md-menu-item> -->
      </md-menu-content>
    </md-menu>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  padding: 0px;
  margin-left: 0px;
}

.reminder {
  width: 120px;
  height: 50%;
}

.dates {
  margin-top: -10px;
}

.more {
  margin-top: -20px;
}
</style>

<script>
import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import { Labelservice } from "/home/admin1/Desktop/fundoo/src/Service/LabelService.js";
import Vue from 'vue';
import moment from 'moment'
export default {
  // flag: true,

  data() {
    return {
      labelname: ""
    };
  },
  methods: {
    onClickChild (value) {
      console.log("SSSSSSS"+value) // someValue
    },
    deletenote() {
      const data = {
       
      };
      const token = {
        token: localStorage.getItem("token")
      };
      NoteService.DeleteNote(noteid, token)
        .then("notedeleted")
        .catch(error => {
          alert(error);
        });
    },
    addlabel() {
      const data = {
        labelname: this.labelname
      };
      const token = {
        token: localStorage.getItem("token")
      };
      Labelservice.CreateLabel(data, token)
        .then("labeladded")
        .catch(error => {
          alert(error);
        });
    },
    today(){

      var date=new Date();
  //     Vue.filter('formatDate', function(date) {
  // if (date) {
  //   return moment(String(date)).format('MM/DD/YYYY hh:mm')
    console.log("DATEEEEE"+moment(String(date)).format('DD/MM/YYYY hh:mm'));
//   }
// });
      console.log('====================================');
      console.log(date.setDate+date.setMonth+date.setFullYear);
      console.log('====================================');
    },
    isArchive(){
      
    }
  }
};
</script>
