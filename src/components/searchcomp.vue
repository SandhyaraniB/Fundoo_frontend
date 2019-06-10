<template>
    <div>
        <span> fggdf</span>
        <notes v-bind:msg="messages"></notes>
        <div>
        {{getmsg}}
        </div>
    </div>
</template>

<script>
import { messageService } from '/home/admin1/Desktop/fundoo/src/dataservice/dataservice.js';
import axios from 'axios'
import note from './note'
import {router} from '/home/admin1/Desktop/fundoo/src/routesNew.js'

export default {
  
    data () {
        return {
            messages: []
        };
    },
    computed:{
    getmsg:function () {
        console.log("sssssseracggggggggg")
        // subscribe to home component messages
        this.subscription = messageService.getMessage().subscribe(
        message => {
            console.log("ffffffffffffffffffff",message)
            this.searchtext()
        });
              
         },
   },
    methods:{
     searchtext()
     {
     const token = 
     {
     token: localStorage.getItem("token")};
console.log("......................................")
    //   http://localhost:8080/note/searchNoteByTitle?title=text
      axios.post(" http://localhost:8080/note/searchNoteByTitle/"+"?title="+message,{ headers: {token:token.token} } ).
      this(res=>{
          this.messages = res.data;
          }
          ).catch(error=>{error})
         }
    }
}
</script>