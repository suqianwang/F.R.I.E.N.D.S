<template>
  <v-app>
    <EducationForm v-if="firstStep" :firstStep="firstStep" :secondStep="secondStep" @finished_one="firstFinished"/>
    <InterestsForm v-if="secondStep" :secondStep="secondStep" :thirdStep="thirdStep"/>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import EducationForm from '@/components/EducationForm.vue';
import InterestsForm from '@/components/InterestsForm.vue';


@Component({
  components: {
    EducationForm,
    InterestsForm,
    // SpecificInterestsForm,
    // AboutMeForm
  },
})
export default class Setting extends Vue {
  private firstStep: boolean = true;
  private secondStep: boolean = false;
  private thirdStep: boolean = false;
  private fourthStep: boolean = false;

  private firstFinished(): void {
    this.firstStep = false;
    this.secondStep = true;
  }
}
</script>

<style scoped>

</style>