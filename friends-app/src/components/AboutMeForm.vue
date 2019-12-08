<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>About Me</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form lazy-validation>
              <v-select :items="genderList" label="Gender" :rules="[v => !!v || 'Gender is required']" outlined v-model="selectedGender" required></v-select>
              <v-text-field v-model="inputtedFirstName" :rules="nameRules" :counter="30" label="First Name" required></v-text-field>
              <v-text-field v-model="inputtedLastName" :rules="nameRules" :counter="30" label="Last Name" required></v-text-field>
              <v-text-field v-model="inputtedUsername" :rules="usernameRules" :counter="30" label="Username" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="backSpecificInterestsForm" block color="blue">BACK</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="finished" block color="pink" :disabled="!valid">NEXT</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class AboutMeForm extends Vue {
  private genderList: string[] = ['MALE', 'FEMALE', 'OTHER', 'PREFER NOT TO ANSWER'];
  private nameRules = [(v: any) => !!v || 'Name is required', (v: any) => v.length <= 30 || 'Name must be less than 30 characters',]
  private usernameRules = [(v: any) => !!v || 'Username is required', (v: any) => v.length <= 30 || 'Username must be less than 30 characters',]
  private valid: boolean = false;
  private selectedGender: string = '';
  private inputtedFirstName: string = '';
  private inputtedLastName: string = '';
  private inputtedUsername: string = '';

  @Watch('selectedGender')
  private onSelectedGenderChange(): void {
    if (!(this.selectedGender === '' || this.inputtedFirstName === '' || this.inputtedLastName === '' || this.inputtedUsername === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('inputtedFirstName')
  private onInputtedFirstNameChange(): void {
    if (!(this.selectedGender === '' || this.inputtedFirstName === '' || this.inputtedLastName === '' || this.inputtedUsername === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('inputtedLastName')
  private onInputtedLastNameChange(): void {
    if (!(this.selectedGender === '' || this.inputtedFirstName === '' || this.inputtedLastName === '' || this.inputtedUsername === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('inputtedUsername')
  private onInputtedUsernameChange(): void {
    if (!(this.selectedGender === '' || this.inputtedFirstName === '' || this.inputtedLastName === '' || this.inputtedUsername === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Emit('back_four')
  private backSpecificInterestsForm(): void {
  }

  @Emit('finished_four')
  private finishedHelper(gender: string, name: string, username: string): void {
  }

  private finished(): void {
    const fullName = this.inputtedFirstName + ' ' + this.inputtedLastName;
    this.finishedHelper(this.selectedGender, fullName, this.inputtedUsername);
  }
}
</script>

<style lang="scss" scoped>
</style>