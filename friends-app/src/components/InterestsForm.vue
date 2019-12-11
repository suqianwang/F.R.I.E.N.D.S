<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Interests</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form lazy-validation>
              <v-select :items="interests" label="Interests" :rules="selectRules" outlined multiple v-model="selectedInterests" required></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="backEducationForm" block color="blue">BACK</v-btn>
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
export default class InterestsForm extends Vue {
  private interests: string[] = ['ARTS', 'FITNESS & SPORTS', 'FOOD & DRINK', 'GAMES', 'MOVIES & TV', 'MUSIC', 'PETS',
  'READING', 'SHOPPING & FASHION', 'TRAVEL'];
  private selectedInterests: string[] = [];
  private selectRules = [(v: any) => v.length === 3 || 'You need to select exactly 3 items']
  private valid: boolean = false;

  @Watch('selectedInterests')
  private onSelectedInterestsChange(): void {
    if (this.selectedInterests.length === 3) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Emit('back_two')
  private backEducationForm(): void {
  }

  @Emit('finished_two')
  private finishedHelper(interests: string[]): void {
  }

  private finished(): void {
    this.selectedInterests.sort();
    this.finishedHelper(this.selectedInterests);
  }
}
</script>

<style lang="scss" scoped>
</style>