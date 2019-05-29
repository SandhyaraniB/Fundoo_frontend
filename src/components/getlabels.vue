<template >
  <div >
    <div v-for= "result in alllabels" v-bind:key="result">
      
      <!-- <md-card class="takenote"> -->
        
        <div>
          <input type="text" v-model="result.labelname"  name="labelname" placeholder="take a label" class="titletwo" style="border: none; outline=none margin-left: 10px;">
        </div>
        
      <!-- </md-card> -->
    </div>
  
  </div>
</template>
<script>
// import iconlist from "./../components/iconlist";
import { LabelService } from "/home/admin1/Desktop/fundoo/src/Service/LabelService.js";
import axios from 'axios'
export default {

data() {
  this.getlabels()
     return {
      
   alllabels:[]
    } 
  },
  components: {
    // iconlist
  },
  methods: {
    getlabels() {
      const token = {
        token: localStorage.getItem("token")
      };
      // alert(token.token)
       
    axios.get('http://localhost:8080/Label/getAllLabels')
    .then(res => {
      this.alllabels=res.data;
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("AAAAAAAAAA",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { alert(error)})
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card {
  border-radius: 10px;
  display: flex;
  width: 250px;
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
  width: 275px;
}
.titleone {
  margin-top: 15px;
  margin-right: 10px;
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
</style>