<template>
    <div>
      
        <div>
          <note :allNotes="allmessages"></note>
         </div>
        <h1>
        {{ mgsgett }}
        </h1>
    </div>
</template>

<script>
import { messageService } from '/home/admin1/Desktop/fundoo/src/dataservice/dataservice.js';
import axios from "axios";
import note from "/home/admin1/Desktop/fundoo/src/components/note.vue";
// import {router} from '/home/admin1/Desktop/fundoo/src/routesNew.js'

export default {
  
    data () {
        return {
            allmessages: [],
            messagetopass:'',
            something:'',
            datatosearch:''
        };
    },
   components: {
    note
},
    computed:{
    mgsgett() {
        let subscription = messageService.getMessage().subscribe(
        messagetopass => {
            console.log("ffffffffffffffffffff",messagetopass)
            var datatopass=messagetopass;
            console.log(datatopass)
            console.log("subbbbbbbbbbbbb",subscription)
            this.searchtext(datatopass);
        });
             return this.messagetopass; 
         },
   },
    methods:{
     searchtext(datatopass)
     {
     const token = 
     {
     token: localStorage.getItem("token")};
     console.log(".........in serxhtext method.........",datatopass.text);
    //   axios.get("http://localhost:8080/note/searchNoteByTitle/"+datatopass,{ headers: {token:token.token} } )
    //   .this(res=>{
    //       console.log("responseee",res.data)
    //       this.messages = res.data;
    //       }
    //       ).catch(error=>{error})
    axios
        .get("http://localhost:8080/note/searchNoteByTitle/"+datatopass.text,{
          headers: { token: token.token }
        })
        .then(res => {
          console.log("== in axios ", res.data);
          this.allmessages = res.data;
          // this.$emit("gett", this.allNotes);

          console.log("====================================");
          console.log("searchhhhh", this.allmessages);
          console.log("====================================");
        })
        .catch(error => {
          console.log("====================================");
          console.log("error" + error);
          console.log("====================================");
        });
         }
    }
}
</script>