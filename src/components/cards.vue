<template>
  <div>
    <div>
      <md-card class="takenote">
        <div>
          <input type="text" placeholder="title" class="titleone">
          
        </div>
        <div>
          <input type="text" placeholder="description" class="titletwo">
        </div>

        <iconlist></iconlist>
        <md-ripple></md-ripple>
      </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  border-radius: 10px;
  display: flex;
  width: 250px;
  height: 105px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  color: aliceblue;
}
.card-title {
  border: none;
}
.card-note {
  border: none;
}
.takenote {
  width: 275px;
}
.titleone {
  margin-top: 15px;
  margin-left: -54px;
  width: 70%;
  border: none;
}
.titletwo {
  // margin-top: 15px;
  width: 70%;
  margin-left: -55px;
  border: none;
}
.icon {
  margin-left: -25px;
}

.close {
  margin-top: -40px;
  margin-left: 80%;
}
</style>

<script>
import iconlist from "./../components/iconlist";
export default {
  // flag: true,

  components: {
    iconlist
  }
};
</script>
