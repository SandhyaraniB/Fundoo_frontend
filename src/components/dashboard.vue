<template>
<div id="app">
<v-app>
<v-content>
<v-container>
<v-navigation-drawer persistent :clipped="clipped" v-model="drawer" enable-resize-watcher app fixed >
<md-list>
<a class="a" @click="sample1">
<md-list-item>
<img class="note" src="./../assets/bulb.png" >
<span class="md-list-item-text">Notes</span>
</md-list-item>
</a>
<a class="a" @click="sample1">
<md-list-item>
<md-icon>notifications</md-icon>
<span class="md-list-item-text">Reminders</span>
</md-list-item>
</a>
<md-divider></md-divider>
<Label class="label">Labels</Label>
<a class="a" @click="sample1">
<md-list-item>
<md-icon>create</md-icon>
<span class="md-list-item-text">Edit Labels</span>
</md-list-item>
</a>
<md-divider></md-divider>
<!-- view_agenda -->
<a class="a" @click="sample1">
<md-list-item>
<md-icon>archive</md-icon>
<span class="md-list-item-text">Archive</span>
</md-list-item>
</a>
<a class="a" @click="sample1">
<md-list-item >
<md-icon>delete</md-icon>
<span class="md-list-item-text">Trash</span>
</md-list-item>
</a>
</md-list>
<!-- </v-list> -->
</v-navigation-drawer>
<v-toolbar app :clipped-left="clipped" style="color:black">
<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
<v-toolbar-title v-text="title"></v-toolbar-title>
<!-- <v-spacer></v-spacer>
-->
<!-- -------------------------------------------- -->
<img class="keep" src="./../assets/keep.png"/>
<label>Keep</label>
<md-card class="card">
<md-icon class="search">search</md-icon>
<input class="input" placeholder="Search"/>
</md-card>
<a class="refresh" @click="sample1">
<md-icon>refresh</md-icon>
<!-- <md-icon>cloud_done</md-icon> -->
</a>
<a class="viewmodel" @click="sample1">
<md-icon class="viewmodel">view_module</md-icon>
</a>
<md-menu md-size="auto" md-align-trigger>
<a md-menu-trigger>
<img src="./../assets/settings.svg" width="20px">
</a>
<md-menu-content>
<md-menu-item>Settings</md-menu-item>
<md-menu-item>Send feedback</md-menu-item>
<md-menu-item>Help</md-menu-item>
<md-menu-item>App downloads</md-menu-item>
</md-menu-content>
</md-menu>

</v-toolbar>

</v-container>
</v-content>
</v-app>
</div >
    
</template>

<script>
export default {
    
}
</script>

<style>

</style>
