<template>
  <v-app>
    <!-- <EducationForm v-if="firstStep" :firstStep="firstStep" :secondStep="secondStep" @finished_one="firstFinished"/> -->
    <EducationForm v-if="firstStep" @finished_one="firstFinished"/>
    <InterestsForm v-if="secondStep" @finished_two="secondFinished" @back_two="backEducationForm"/>
    <SpecificInterestsForm v-if="thirdStep" :interests="decidedInterests" @finished_three="thirdFinished" @back_three="backInterestsForm"/>
    <AboutMeForm v-if="fourthStep" @finished_four="fourthFinished" @back_four="backSpecificInterestsForm"/>

    <v-container v-if="finalStep">
      <v-row>
        <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
          <v-card class="elevation-12">
            <v-toolbar dark src="../assets/vbanner.webp">
              <v-toolbar-title>Confirmation</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form lazy-validation>
                <div><h3><b>Major</b>: {{decidedMajor}}</h3></div>
                <div><h3><b>Degree</b>: {{decidedDegree}}</h3></div>
                <div><h3><b>Interests</b>: </h3></div>
                <div><h3>① {{decidedInterests[0]}}: {{decidedSpecificInterests[0]}}, {{decidedSpecificInterests[1]}}, {{decidedSpecificInterests[2]}}</h3></div>
                <div><h3>② {{decidedInterests[1]}}: {{decidedSpecificInterests[3]}}, {{decidedSpecificInterests[4]}}, {{decidedSpecificInterests[5]}}</h3></div>
                <div><h3>③ {{decidedInterests[2]}}: {{decidedSpecificInterests[6]}}, {{decidedSpecificInterests[7]}}, {{decidedSpecificInterests[8]}}</h3></div>
                <div><h3><b>Gender</b>: {{decidedGender}}</h3></div>
                <div><h3><b>Name</b>: {{decidedName}}</h3></div>
                <div><h3><b>Userame</b>: {{decidedUsername}}</h3></div>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="backAboutMeForm" block color="blue">BACK</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="saveAndGoMainPage" block color="pink">START F.R.I.E.N.D.S!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import EducationForm from '@/components/EducationForm.vue';
import InterestsForm from '@/components/InterestsForm.vue';
import SpecificInterestsForm from '@/components/SpecificInterestsForm.vue';
import AboutMeForm from '@/components/AboutMeForm.vue';
import { dbConfig } from '@/firebase/init';
import firebase from 'firebase';

@Component({
  components: {
    EducationForm,
    InterestsForm,
    SpecificInterestsForm,
    AboutMeForm
  },
})
export default class Setting extends Vue {
  private firstStep: boolean = true;
  private secondStep: boolean = false;
  private thirdStep: boolean = false;
  private fourthStep: boolean = false;
  private finalStep: boolean = false;

  private decidedMajor: string = '';
  private decidedDegree: string = '';
  private decidedInterests: string[] = [];
  private decidedSpecificInterests: string[] = [];
  private decidedGender: string = '';
  private decidedName: string = '';
  private decidedUsername: string = '';

  private firstFinished(majorFromChild1: string, degreeFromChild1: string): void {
    this.firstStep = false;
    this.secondStep = true;
    this.decidedMajor = majorFromChild1;
    this.decidedDegree = degreeFromChild1;
  }

  private secondFinished(interestsFromChild2: string[]): void {
    this.secondStep = false;
    this.thirdStep = true;
    this.decidedInterests = interestsFromChild2;
  }

  private thirdFinished(specificInterestsFromChild3: string[]): void {
    this.thirdStep = false;
    this.fourthStep = true;
    this.decidedSpecificInterests = specificInterestsFromChild3;
  }

  private fourthFinished(genderFromChild4: string, nameFromChild4: string, usernameFromChild4: string): void {
    this.fourthStep = false;
    this.finalStep = true;
    this.decidedGender = genderFromChild4;
    this.decidedName = nameFromChild4;
    this.decidedUsername = usernameFromChild4;
  }

  private backEducationForm(): void {
    this.firstStep = true;
    this.secondStep = false;
  }

  private backInterestsForm(): void {
    this.secondStep = true;
    this.thirdStep = false;
  }

  private backSpecificInterestsForm(): void {
    this.thirdStep = true;
    this.fourthStep = false;
  }

  private backAboutMeForm(): void {
    this.fourthStep = true;
    this.finalStep = false;
  }

  private saveAndGoMainPage(): void {
    // const settingsRef = dbConfig.db.ref('settings');
    const user = dbConfig.dbAuth.currentUser!;   // TODO: NULL check needed
    dbConfig.dbFireStore.collection('settings').add({
      uid: user.uid,
      major: this.decidedMajor,
      degree: this.decidedDegree,
      interests: this.decidedInterests,
      specifics: this.decidedSpecificInterests,
      gender: this.decidedGender,
      name: this.decidedName,
      username: this.decidedUsername
    });
    this.$router.push('main');
  }
}
</script>

<style scoped>

</style>