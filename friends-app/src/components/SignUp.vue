<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">

        <v-snackbar v-model="snackbar" :timeout="timeout" top vertical>
          {{ errorMsg }}
          <v-btn color="blue" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>

        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Sign Up Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Duke Email"
                suffix="@duke.edu"
                id="email"
                type="text"
                :rules="[v => !!v || 'Duke Email is required']"
                required
                v-model="email"
              ></v-text-field>
              <!-- <v-text-field
                prepend-icon="account_circle"
                name="username"
                label="username"
                id="username"
                type="text"
                :rules="[v => !!v || 'Username is required']"
                required
                v-model="username"
              ></v-text-field> -->
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                @click:append="() => (value = !value)"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                :type="value ? 'password' : 'text'"
                id="password"
                :rules="passwordRules"
                required
                v-model="password"
              ></v-text-field>
              <!-- <v-text-field
                prepend-icon="autorenew"
                name="confPassword"
                label="Re-enter Password"
                id="confPassword"
                type="password"
                :rules="rePasswordRules"
                required
                v-model="confPassword"
              ></v-text-field> -->
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn @click="goSetting" block dark color="pink">SIGN UP</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { dbConfig } from '@/firebase/init';

@Component({
  components: {}
})
export default class SignUp extends Vue {
  private email: string = '';
  // private username: string = '';
  private password: string = '';
  // private confPassword: string = '';
  private valid: boolean = true;
  private value: boolean = true;
  private passwordRules = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Must have 8+ characters',
    (v: any) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
    (v: any) => /(?=.*\d)/.test(v) || 'Must have one number',
    (v: any) => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
  ]
  private snackbar: boolean = false;
  private errorMsg: string = '';
  private timeout: number = 6000;

  private goSetting() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      dbConfig.dbAuth.createUserWithEmailAndPassword(this.email + '@duke.edu', this.password).then(
        (user) => {
          this.$router.push('setting');
        },
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.errorMsg = errorMessage;
          this.snackbar = true;
          console.log(errorCode);
          console.log(errorMessage);
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
