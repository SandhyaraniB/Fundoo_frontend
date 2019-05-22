<template>
  
    <div >
    <md-toolbar md-elevation="0" class="toolbar">
       <div class="md-toolbar-row">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">FundooNotes</span>

       <div class="md-toolbar-section-center">
         <input id="Search" type="search" required>
         <label for="search"><i class="material-icons">search</i></label>
       </div>

        <div class="md-toolbar-section-end">
          <md-button style="color:black" class="md-icon-button">
            <md-icon style="color:black">refresh</md-icon>
          </md-button>
          </div>
       </div>
    </md-toolbar>
   <md-divider></md-divider>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <!-- <span class="md-title">My App name</span> -->
      </md-toolbar>

      <md-list>
      

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    

      <md-list>
        <!-- <md-list-item>
          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item> -->
      </md-list>
    <!-- </md-drawer> -->
    </div>


    <!-- <md-toolbar md-elevation="0">  
       <div style="background-color:white" class="md-toolbar-row">
     <md-button style="background-color:white" class="md-icon-button md-primary"  @click="showNavigation = true">
        <md-icon style="color:black">menu </md-icon>
      </md-button> 
       <h1 style="color:black">Fundoo</h1>
         
        
         <div class="md-toolbar-section-end">
          <md-button style="color:black" class="md-icon-button">
            <md-icon style="color:black">refresh</md-icon>
          </md-button>
          </div>
          <md-button style="color:black" class="md-icon-button">
            <md-icon style="color:black" >more_vert</md-icon>
          </md-button> 
          </div>
          </md-toolbar>
          <md-divider></md-divider>
         <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0"> -->
        <!-- <span class="md-title">My App name</span> -->
      <!-- </md-toolbar> -->

      <!-- <md-list>



        <md-divider></md-divider>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>
      </md-list>
          </md-drawer> -->
  
 
</template>

<style scoped>
.md-primary {
   
    color: black;
  }
  .md-toolbar-row
  {
    
    background-color: white;
  }

  .toolbar{
     margin-top:-58px;
     width: 101%;
     flex-direction: row;
     align-items: center;
     white-space: nowrap;
  }
   #Search{
    padding: 3px;
    width: 77%;
    border-radius: 8px;
   }
</style>

<script>
export default {
  name: 'IconButtons',
  data: () => ({
      showNavigation: false,
     showSidepanel: false
    })
}
</script>
