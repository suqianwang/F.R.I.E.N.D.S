<template>
  <v-app>
    <v-container>
      <SignUp/>
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
          Already have an account?
          <v-btn block dark class="mt-3" color="green" @click="goHome">
            LOG IN
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import SignUp from '@/components/SignUp.vue';

@Component({
  components: {
    SignUp,
  },
})
export default class SetUp extends Vue {
  private goHome(): void {
    this.$router.push('/');
  }
}
</script>

<style scoped>

</style>