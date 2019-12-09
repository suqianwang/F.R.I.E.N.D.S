<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-toolbar dense>
            <v-toolbar-title>F.R.I.E.N.D.S</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="goHome" icon><v-icon>mdi-home</v-icon></v-btn>
            <v-btn @click="goProfile" icon><v-icon>mdi-information-outline</v-icon></v-btn>
            <v-btn @click="confirmLogout" icon><v-icon>mdi-logout-variant</v-icon></v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Navbar extends Vue {
    @Emit('home_status')
    private goHome(): void {
    }

    @Emit('profile_status')
    private goProfile(): void {
    }

    private confirmLogout(): void {
        console.log('confirmLogout');
    }
}
</script>

<style scoped>
</style>