<template >
  <div class="getlabels">
    <div v-for= "result in alllabels" v-bind:key="result">
      <div>

          <md-button>
          <md-checkbox :value="true">{{result.labelname}}</md-checkbox>
          </md-button>
     </div>
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
      value:true,
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

.getlabels{
display: flex;
flex-direction: column;
}
</style>