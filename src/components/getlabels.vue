<template >
  <div class="getlables">
    <div v-for= "label in alllabels" v-bind:key="label">
      <div>
          <md-button style="margin-right: 100px;">
          <md-icon>label</md-icon>
           {{label.labelname}}
          </md-button>
     </div>
    </div>
    </div>

</template>
<script>
import { gettinglabels} from "/home/admin1/Desktop/fundoo/src/Service/labelservice.js"
export default {

data() {
  
     return {
      
   alllabels:[]
    } 
  },
  components: {
    // iconlist
  },
  mounted()
  {
   this.getlabels()
  },
  methods: {
   async getlabels(){
      
    var labels = await gettinglabels()
    this.alllabels=labels.data;
    this.$emit("labelss",labels.data)
    }
    
  }
};
</script>
<style lang="scss" scoped>
.getlables{
  display: flex;
flex-direction: column;
}

</style>