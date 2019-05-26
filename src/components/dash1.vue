<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-navigation-drawer
            persistent
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            app
            fixed
          >
            <v-list>
              <v-list-tile >
                <v-btn>
                <v-icon>Note</v-icon>
                </v-btn>
              <!-- value="true" v-for="(item, i) in items" :key="i" -->
                <!-- <v-list-tile-action>
                  <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content> -->
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
          <v-toolbar app :clipped-left="clipped" style="margin=200px">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" style="width: 20px;
    height: 20px;margin-right: 1000px; "></v-toolbar-side-icon>
            <!-- <v-btn>menu</v-btn> -->
          </v-toolbar>
          <v-content>
            <router-view/>
          </v-content>
          <v-footer :fixed="fixed" app>
            <span>&copy; 2018</span>
          </v-footer>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    clipped: true,
    items: [
      {
        // 左抽屉 navigation-drawer
        icon: "bubble_chart",
        title: "微信"
      },
      {
        // 左抽屉 navigation-drawer
        icon: "bubble_chart",
        title: "QQ"
      }
    ]
  })
};
</script>
<style>
.v-toolbar{
  background-color: brown;
  margin-bottom: 2000px;
  align:top;
  margin-top: 0px;

  /* margin-top: 500px; */
}
</style>
