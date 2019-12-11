<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">

        <v-dialog v-model="dialog" persistent max-width="320">
          <v-card>
            <v-card-title class="headline">Are you sure you want to Logout?</v-card-title>
            <v-card-text>You will be redirect to Login page and can come back at any time!</v-card-text>
            <v-card-actions>
              <v-btn color="blue-grey darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="confirmLogout">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-toolbar dense color="#7ac6ff">
            <v-toolbar-title>F.R.I.E.N.D.S</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goHome" icon><v-icon>mdi-home</v-icon></v-btn>
            <v-btn @click="goProfile" icon><v-icon>mdi-information-outline</v-icon></v-btn>
            <v-btn @click.stop="dialog = true" icon><v-icon>mdi-logout-variant</v-icon></v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { dbConfig } from '@/firebase/init';

@Component({
  components: {}
})
export default class Navbar extends Vue {
    private dialog: boolean = false;

    @Emit('home_status')
    private goHome(): void {
    }

    @Emit('profile_status')
    private goProfile(): void {
    }

    private confirmLogout(): void {
      dbConfig.dbAuth.signOut().then((user) => {
        this.$router.push('/');
      }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
}
</script>

<style scoped>
</style>