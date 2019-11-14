<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-toolbar-title>Sign Up Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="email"
                name="login"
                label="Duke Email"
                suffix="@duke.edu"
                id="login"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn block dark color="pink">SIGN UP</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    components: {
    },
})

export default class SignUp extends Vue {
  private username: string = '';
  private password: string = '';
}
</script>

<style lang="scss" scoped>
</style>
