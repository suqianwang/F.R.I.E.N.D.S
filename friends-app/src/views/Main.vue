<template>
  <v-app>
    <Navbar @home_status="homeStatus" @profile_status="profileStatus"></Navbar>
    <FriendsList v-if="atHome"></FriendsList>
    <Profile v-if="atProfile"></Profile>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import FriendsList from '@/components/FriendsList.vue';
import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';

@Component({
  components: {
    FriendsList,
    Navbar,
    Profile,
  },
})
export default class Main extends Vue {
  private colors: string[] = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
  private model: number = 0;
  private atHome: boolean = true;
  private atProfile: boolean = false;

  private homeStatus(): void {
    this.atHome = true;
    this.atProfile = false;
  }

  private profileStatus(): void {
    this.atHome = false;
    this.atProfile = true;
  }
}
</script>

<style scoped>

</style>