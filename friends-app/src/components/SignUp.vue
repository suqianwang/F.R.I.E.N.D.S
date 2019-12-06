<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Sign Up Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Duke Email"
                suffix="@duke.edu"
                id="email"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="account_circle"
                name="username"
                label="username"
                id="username"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
              <v-text-field
                prepend-icon="autorenew"
                name="confPassword"
                label="Re-enter Password"
                id="confPassword"
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
  components: {}
})
export default class SignUp extends Vue {
  private email: string = '';
  private username: string = '';
  private password: string = '';
  private confPassword: string = '';
}
</script>

<style lang="scss" scoped>
</style>
