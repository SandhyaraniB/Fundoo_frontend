<template>
<div>
<CreateNote></CreateNote>
<cards></cards>

</div>
</template>

<script>
import CreateNote from "./CreateNote";
import cards from './cards'
// import reminder from './reminder'
export default {
     components:{
CreateNote,
cards,
// reminder
     }
}
</script>
