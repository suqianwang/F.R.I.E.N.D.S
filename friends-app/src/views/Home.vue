<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SignIn></SignIn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    SignIn,
  },
};
</script>
