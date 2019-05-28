<template v-for="item in items">
    
</template>
<script>
export default {
      data: {
    items: 
    [
      {title:'' },
      {content:'' }
    ]
    },
    methods:
    {
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
    }
}
</script>
