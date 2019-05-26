<template>
  <!-- <p class="demo">
    <button class="btn-primary" @click.prevent="handleClick">
      <slot></slot>(clicked - {{count}})
    </button>
  </p> -->
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card color="rgb(255, 0, 0, 0.2)">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                 <v-flex xs12 sm6 md3>
           
          <v-card-title primary-title>
                <div>
                  
                  <div class="headline">
               <v-text-field
                     placeholder="Title"
                 ></v-text-field>
                 <v-text-field
                     placeholder="Note"
                 ></v-text-field>
                  </div>
                 
                </div>
              </v-card-title>
        </v-flex>

                <!-- <span class="headline">Top 10 Australian beaches</span> -->
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>




<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
     // console.log('clicked', this.count);
    },
  },
};
</script>

<style scoped>
.btn-primary {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
.v-card{
  width: 340px;
  height: 200px;
  
}
.headline{
 border: none;
}
</style>