<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Education</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-select :items="majors" label="Major" :rules="[v => !!v || 'Major is required']" outlined v-model="selectedMajor"></v-select>
              <v-select :items="degrees" label="Degree Level" :rules="[v => !!v || 'Degree is required']" outlined v-model="selectedDegree"></v-select>
            </v-form>
          </v-card-text>
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
export default class EducationForm extends Vue {
  // @Prop() private firstStep!: boolean;
  // @Prop() private secondStep!: boolean;

  private majors: string[] = ['African and African American Studies', 'Art History', 'Asian and Middle Eastern Studies',
  'Biology', 'Biomedical Engineering', 'Biophysics', 'Brazilian and Global Portuguese Studies', 'Chemistry',
  'Civil Engineering', 'Classical Civilization', 'Classical Languages', 'Computer Science', 'Cultural Anthropology',
  'Dance', 'Earth and Ocean Sciences', 'Economics', 'Electrical and Computer Engineering', 'English', 'Environmental Engineering',
  'Environmental Sciences', 'Environmental Sciences and Policy', 'Evolutionary Anthropology', 'French Studies', 'Gender, Sexuality, and Feminist Studies',
  'German', 'Global Cultural Studies', 'Global Health', 'History', 'Interdepartmental Major', 'International Comparative Studies',
  'Italian Studies', 'Linguistics', 'Mathematics', 'Mechanical Engineering', 'Medieval and Renaissance Studies', 'Music',
  'Neuroscience', 'Philosophy', 'Physics', 'Political Science', 'Program II', 'Psychology', 'Public Policy Studies', 'Religious Studies',
  'Romance Studies', 'Russian', 'Slavic and Eurasian Studies', 'Sociology', 'Spanish, Latin American, and Latino/a Studies',
  'Statistical Science', 'Theater Studies', 'Visual Arts', 'Visual and Media Studies', 'Others'];
  private degrees: string[] = ['Bachelors', 'Masters', 'PHD', 'Others'];
  private selectedMajor: string = '';
  private selectedDegree: string = '';
  private test: string = '';
  private valid: boolean = false;

  @Watch('selectedMajor')
  private onSelectedMajorChange(newValue: string, oldValue: string): void {
    if (!(this.selectedMajor === '' || this.selectedDegree === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('selectedDegree')
  private onSelectedDegreeChange(newValue: string, oldValue: string): void {
    if (!(this.selectedMajor === '' || this.selectedDegree === '')) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Emit('finished_one')
  private finishedHelper(major: string, degree: string): void {
  }

  private finished(): void {
      this.finishedHelper(this.selectedMajor, this.selectedDegree);
  }
}
</script>

<style lang="scss" scoped>
</style>
