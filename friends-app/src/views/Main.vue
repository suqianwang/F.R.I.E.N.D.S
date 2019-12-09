<template>
  <v-app>
    <FriendsList></FriendsList>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import FriendsList from '@/components/FriendsList.vue'

@Component({
  components: {
    FriendsList,
  },
})
export default class Main extends Vue {
  private colors: string[] = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
  private model: number = 0;
}
</script>

<style scoped>

</style>