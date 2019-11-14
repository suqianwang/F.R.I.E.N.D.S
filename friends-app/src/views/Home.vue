<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col xs="12" sm="6" offset-sm="3" md="4" offset-md="4">
          <v-img
            :src="require('../assets/Friends.svg')"
            contain
            height="100"
            width="400"
          ></v-img>
        </v-col>
      </v-row>
      <Login/>
      <v-row no-gutters>
        <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
          <v-img
            :src="require('../assets/divider.png')"
            height="20"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
          Don't have an account?
          <v-btn block dark class="mt-3" color="green">
            SIGN UP
          </v-btn>
        </v-col>
      </v-row>
      <!-- <div style="text-align: center" class="mt-3">
        <p>Don't have an account?</p>
      </div> -->
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Login,
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  border: 3px solid green;
}
</style>