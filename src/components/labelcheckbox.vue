<template>
  <div>
    <md-checkbox v-model="array" value="1">{{label.labelname}}</md-checkbox>
   

   
  </div>
</template>

<script>
  export default {
    name: 'RegularCheckboxes',
    data: () => ({
      array: [],
      
    })
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
  
  }
</style>