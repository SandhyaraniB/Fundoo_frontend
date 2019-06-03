<template>
     <div class="cards">
   <div v-for= "result in allNotes" v-bind:key="result" class="getcards" >
   <!-- @click="showDialog = true"  -->
   <!-- //applying color for card result.colorChange put  in style with binding -->
   <div v-if="result.trashed==true">
     <md-card class="takenote" >
        <div>
          <input type="text" v-model="result.title" name="title" placeholder="title" class="titleone" style="border: none; outline=none ">
        </div>
        <div>
          <input type="text" v-model="result.content"  name="content" placeholder="description" class="titletwo" style="border: none; outline=none margin-left: 10px;">
        </div>
        <div>
        <iconlist :parentmessage=result.noteid style="color:white" ></iconlist>
        </div>
      </md-card >
    </div>
    </div>

</template>
<script>
export default {
  data() {
 this.getnotes()
     return {
    //   showDialog: false,
    //   parentmessage:'',
     allNotes:[]
    } 
  },
    components: {
    iconlist,
  },
      getnotes() {
      const token = {
        token: localStorage.getItem("token")
      };
      // alert(token.token);
      // NoteService.GetAllNotes(token)
      //   .then("cards.")
      //   .catch(error => {
      //     alert(error);
      //   });
       
    axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
    .then(res => {
      this.allNotes=res.data;
      if (res){
        //VmUser.$bus.$emit('add-user', { user: user})
        console.log('====================================');
        console.log("Get All Notes",res);
        console.log('====================================');
        
        
      }
    }).catch(error => { alert(error)})
    },
}
</script>
<style scoped>

</style>
