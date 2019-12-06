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
            <v-btn @click="finished" block color="pink">NEXT</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class InterestsForm extends Vue {
  @Prop() private firstStep!: boolean;
  @Prop() private secondStep!: boolean;

  private interests: string[] = ['foo', 'bar', 'fizz', 'buzz'];
  private selectedInterests: string[] = [];
  private test: string = '';
  private selectRules = [(v: any) => v.length === 3 || 'You need to select exactly 3 items']

  @Emit('finished_one')
  private finished(): void {/**/}
}
</script>

<style lang="scss" scoped>
</style>