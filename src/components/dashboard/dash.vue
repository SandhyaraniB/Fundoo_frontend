<template>
    <div>
    <div>
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

        <div class="md-toolbar">
          <md-button style="color:black" class="md-icon-button" width="-30px">
            <md-icon style="color:black">refresh</md-icon>
          </md-button>
          </div>
      <div class="md-toolbar-section-end">
      <img src="" style="color:pink">
       <md-button style=" color:pink" class="md-icon-button">
       </md-button>
      </div>
       </div>
    </md-toolbar>
    
    </div>
      <md-divider></md-divider>
    <div>
        
    </div>
    <md-content >
   <!-- <div class="sidenav"> -->
    <md-drawer :md-active.sync="showNavigation" class="sidenav">
    <md-list>

     <md-button>
     <md-list-item>
     <md-icon>note</md-icon>
     <span class="md-list-item-text">notes</span>
     </md-list-item>
     </md-button>

     <md-button>
       <md-list-item>
       <md-icon>Reminder</md-icon>
       <span class="md-list-item-text">reminder</span>
       </md-list-item>
     </md-button>

     <md-divider></md-divider>
     <md-button>
        <md-list-item>
          <md-icon>Archive</md-icon>
          <span class="md-list-item-text">Archive</span>
         </md-list-item>
     </md-button>
     <md-button>
        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>
     </md-button>
      </md-list>
    </md-drawer>
    </md-content>
   </div>
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

   .sidenav{
    margin-top: 60px;
    height: 400px;
    /* overflow: visible; */
    width: 200px;
   }
    .md-content {
    max-width: 200px;
    max-height: 200px;
    overflow: auto;
  }
 
      .md-drawer{

    margin-top: 100px;
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
