<template>
  <div>
    
    <div @click="flagchange" v-if="flag" style="margin:14px">
      <md-card style="width: 420px; height: 44px;">
        <div> 
          
          <input type="text" placeholder="Take a note..." style="margin: 10px;border:none;">
          <md-button class="md-icon-button">
            <md-icon>list</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>create</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>crop_original</md-icon>
          </md-button>
        </div>
      </md-card>
    </div>

    <div v-else>
      <md-card class="takenote">
        <div>
          <input type="text" placeholder="title" class="titleone">
          <md-button class="md-icon-button">
            <md-icon>location_on</md-icon>
          </md-button>
        </div>
        <div>
          <input type="text" placeholder="description" class="titletwo">
        </div>
       
        <iconlist></iconlist>
        <!-- <div class="icon"> -->
          <!-- <md-button class="md-icon-button">
            <md-icon>notifications</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>person_add</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>color_lens</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>crop_original</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>unarchive</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>  @click="flagchange" -->
          <!-- <div> -->
          
          <md-button class="close">
            Close
          </md-button>
          <!-- </div> -->
         
        <!-- </div> -->
        <md-ripple>
         
        </md-ripple>
      </md-card>
    </div>

    <!-- <div v-if="flag">
               Sushant p
    </div>
    <div v-else>
        Sushant has done...........it
    </div>-->
  </div>
</template>

<style lang="scss" scoped>
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
  border: none;
}
.card-note {
  border: none;
}
.takenote {
  width: 500px;
}
.titleone{
  margin-top: 15px;
  width: 80%;
}
.titletwo{
  // margin-top: 15px;
  width: 80%;
  margin-left: -50px;
}
.icon{
  margin-left: -25px;
}

.close{
  margin-top: -40px;
  margin-left: 80%;
  
}
</style>

<script>
import iconlist from './../components/iconlist'
export default {
  // flag: true,

  data: () => ({
    flag: true
  }),
  methods: {
    flagchange() {
      this.flag = !this.flag;
      // alert(this.flag);
    }
  },
  components:{
    iconlist
  }
};
</script>
