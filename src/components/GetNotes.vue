<template v-for="item in items">
    
</template>
<script>
export default {
      data: {
    items: 
    [
      {title:'' },
      {content:'' }
    ],
     getnotes(){
       const token={
       token:localStorage.getItem('token')
      }
      alert(token.token)
      NoteService.GetAllNotes(token)
      .then('cards.')
        .catch(error => {
      alert(error)
      }) 

    }
    },
    methods:
    {
    //      getnotes(){
    //    const token={
    //    token:localStorage.getItem('token')
    //   }
    //   alert(token.token)
    //   NoteService.GetAllNotes(token)
    //   .then('cards.')
    //     .catch(error => {
    //   alert(error)
    //   }) 

    // }
    }
}
</script>
