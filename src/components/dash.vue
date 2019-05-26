<template>
<div id="app">
<v-app>
<v-content>
<v-container>
<v-navigation-drawer persistent :clipped="clipped" v-model="drawer" enable-resize-watcher app fixed>
<!-- <md-list>
<md-list-item >
<md-icon>delete</md-icon>
<span class="md-list-item-text">Trash</span>
</md-list-item>

<md-list-item>
<md-icon>notifications</md-icon>
<span class="md-list-item-text">Reminders</span>
</md-list-item> -->
<!-- view_agenda -->
<!-- <md-list-item>
<md-icon>archive</md-icon>
<span class="md-list-item-text">Archive
</span>
</md-list-item>

</md-list> -->
<!-- </v-list> -->
</v-navigation-drawer>

<v-toolbar app :clipped-left="clipped">
<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
<!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
<!-- <v-spacer></v-spacer>
-->
<!-- -------------------------------------------- -->
<img class="keep"/>
<!-- src="./../assets/keep.png"/> -->
<label>KEEP</label>
<md-card class="card">
<md-icon class="search">search</md-icon>
<input class="input" placeholder="Search"/>
</md-card>
<md-button class="md-icon-button">
<md-icon>refresh</md-icon>
<!-- <md-icon>cloud_done</md-icon> -->
</md-button>
<md-icon class="viewmodel">view_module</md-icon>
<!-- ----------------------------------------------------------------- -->
</v-toolbar>
<v-content>
<router-view/>
</v-content>
<!-- <v-footer :fixed="fixed" app> -->
<span>&copy; 2018</span>
<!-- </v-footer> -->
<!-- </v-app> -->
</v-container>
</v-content>
</v-app>
</div>
</template>
<script>
export default {
name:'sample',
data () {
return{
drawer: false,
clipped: true
}}

}
</script>

<style lang="scss" scoped>
.page-container {
//min-height: 196px;
overflow: hidden;
position: relative;
border: 1px solid rgba(#000, .12);
}
.card{
margin-left: 84px;
width: 702px;
height: 49px;
background: rgb(226, 223, 223);
}
.input{
border: none;
outline: none;
height: 46px;
width: 580px;
margin-left: 47px;
margin-top: -38px;
background: rgb(226, 223, 223);
}
.refresh{
font-size: 40px!important;
margin-left: 12px;
margin-right: 0px;
}
.viewmodel{
margin-left: 12px;
margin-right: 0px;
}
.setting{
margin-left: 20px;
margin-right: 20px;
}
.profile{
margin-left: 20px;
}

.toolbar{
margin-top: 0px;
}

.search{
width: 42px;
height: 47px;
margin-left: 5px;
margin-top: 5px;
// background: transparent;
}
.keep{
width: 35px;
height: 35px;
margin-left: 10px;
margin-right: 5mm;
}

// Demo purposes only
.md-drawer {
width: 230px;
max-width: calc(100vw - 125px);
}
.md-content {
padding: 16px;
}
.md-button .md-ripple {
padding: 0 8px;
display: flex;
justify-content: flex-start;
align-items: center;
}
</style>
