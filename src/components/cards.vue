<template >
  <div >
    <!-- <div class="row" v-for="result in results"> -->
      <div>
      <md-card class="takenote">
        <div>
          <input type="text" v-model="this.title" name="title" placeholder="title" class="titleone" style="border: none;" >
        <!-- {{result.title}} -->
        </div>
        <div>
          <input type="text" v-model="this.content" name="content" placeholder="description" class="titletwo" style="border: none;">
        <!-- {{result.content}} -->
        </div>

        <iconlist></iconlist>
        <md-ripple></md-ripple>
      </md-card>
    </div>
    <md-button class="md-icon-button" @click="getnotes()">
      <md-icon class="icon">archive</md-icon>
      <md-tooltip md-direction="bottom">archive</md-tooltip>
    </md-button>
  </div>
</template>

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
  margin-left: -54px;
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

<script>
import iconlist from "./../components/iconlist";
import { NoteService } from "/home/admin1/Desktop/fundoo/src/Service/NoteService.js";
import axios from 'axios'
export default {
  // flag: true,
 data: {
    results: 
    [
      {title:''  },
      {content:''}
    ]
    },
  components: {
    iconlist
  },
    mounted () {
    this. getnotes();
  },
  methods: {
    getnotes() {
      const token = {
        token: localStorage.getItem("token")
      };
      alert(token.token);
      // NoteService.GetAllNotes(token)
      //   .then("cards.")
      //   .catch(error => {
      //     alert(error);
      //   });
       
    axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
    .then(res => {
      this.results=res.data.results
      // if (res){
      //   //VmUser.$bus.$emit('add-user', { user: user})
      //   console.log('====================================');
      //   console.log("AAAAAAAAAA",res);
      //   console.log('====================================');
        
        
      // }
    }).catch(error => { alert(error)})
    }
  }
};
</script>
