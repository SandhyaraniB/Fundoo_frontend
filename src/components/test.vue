
 <template>
  
  <!-- <mdb-input type="text" size="lg" label="Basic example" outline /> -->
  
<!-- <mdb-input type="email" label="E-mail address" icon="envelope" small="We'll never share your email with anyone." outline />  -->

<!-- <input type="email" id="defaultFormRegisterEmailEx" class="login" outline/> -->
<md-field class="login">
      <label>Suffix</label>
      <md-input v-model="empty"></md-input>
      <button style="background-color:#87ceeb" @click="Test">Sign in</button>
    </md-field>
</template>

  


<script>
 //import { mdbInput } from "mdbvue";
  // import { VBPopover } from 'bootstrap-vue/es/directives'

  export default {
    name: 'Test',
data() {
    return {
     
    };
  },
    Test()
    {
      
      // alert(this.router.url);
      
       alert("successfully  Login");
     
    
  }
    // name: "InputsPage",
    // components: {
     // mdbInput

    
  };
</script>
<style scoped lang="scss">
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    .container-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    form {
      display: flex;
      flex-flow: column;
      *:not(:last-child) {
        margin-bottom: 1rem;
      }
      input {
        padding: .5rem;
      }
      button {
        padding: .5rem;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
</style>