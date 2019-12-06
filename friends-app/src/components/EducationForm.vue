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
  @Prop() private firstStep!: boolean;
  @Prop() private secondStep!: boolean;

  private majors: string[] = ['foo', 'bar'];
  private degrees: string[] = ['fizz', 'buzz'];
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
  private finished(): void {
    // if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
    //   /**/
    // }
    /**/
  }
}
</script>

<style lang="scss" scoped>
</style>
