<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Login Form</v-toolbar-title>
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn @click="goMainPage" block dark color="pink">LOG IN</v-btn>
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
export default class Login extends Vue {
  private email: string = '';
  private password: string = '';
  private valid: boolean = true;
  private value: boolean = true;
  private passwordRules = [
    (v: any) => !!v || 'Password is required',
  ]

  private goMainPage() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      dbConfig.dbAuth.signInWithEmailAndPassword(this.email + '@duke.edu', this.password).then((user) => {
        this.$router.push('main');
      }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
