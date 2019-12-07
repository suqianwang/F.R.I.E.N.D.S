<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card class="elevation-12">
          <v-toolbar dark src="../assets/vbanner.webp">
            <v-toolbar-title>Specific Interests</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form lazy-validation>
              <v-select v-if="interests[0] === 'MUSIC'" :items="specificMusic" label="Music" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'MOVIES & TV'" :items="specificMovies" label="MOVIES & TV" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'FITNESS & SPORTS'" :items="specificSports" label="FITNESS & SPORTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'PETS'" :items="specificPets" label="PETS" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'GAMES'" :items="specificGames" label="GAMES" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'FOOD & DRINK'" :items="specificFood" label="FOOD & DRINK" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'SHOPPING & FASHION'" :items="specificShopping" label="SHOPPING & FASHION" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'ARTS'" :items="specificArts" label="ARTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'TRAVEL'" :items="specificTravel" label="TRAVEL" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>
              <v-select v-if="interests[0] === 'READING'" :items="specificReading" label="READING" :rules="selectRules" outlined multiple v-model="selectedSpecificsFirst" required></v-select>

              <v-select v-if="interests[1] === 'MUSIC'" :items="specificMusic" label="Music" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'MOVIES & TV'" :items="specificMovies" label="MOVIES & TV" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'FITNESS & SPORTS'" :items="specificSports" label="FITNESS & SPORTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'PETS'" :items="specificPets" label="PETS" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'GAMES'" :items="specificGames" label="GAMES" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'FOOD & DRINK'" :items="specificFood" label="FOOD & DRINK" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'SHOPPING & FASHION'" :items="specificShopping" label="SHOPPING & FASHION" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'ARTS'" :items="specificArts" label="ARTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'TRAVEL'" :items="specificTravel" label="TRAVEL" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>
              <v-select v-if="interests[1] === 'READING'" :items="specificReading" label="READING" :rules="selectRules" outlined multiple v-model="selectedSpecificsSecond" required></v-select>

              <v-select v-if="interests[2] === 'MUSIC'" :items="specificMusic" label="Music" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'MOVIES & TV'" :items="specificMovies" label="MOVIES & TV" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'FITNESS & SPORTS'" :items="specificSports" label="FITNESS & SPORTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'PETS'" :items="specificPets" label="PETS" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'GAMES'" :items="specificGames" label="GAMES" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'FOOD & DRINK'" :items="specificFood" label="FOOD & DRINK" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'SHOPPING & FASHION'" :items="specificShopping" label="SHOPPING & FASHION" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'ARTS'" :items="specificArts" label="ARTS" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'TRAVEL'" :items="specificTravel" label="TRAVEL" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
              <v-select v-if="interests[2] === 'READING'" :items="specificReading" label="READING" :rules="selectRules" outlined multiple v-model="selectedSpecificsThird" required></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="backInterestsForm" block color="blue">BACK</v-btn>
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
export default class SpecificInterestsForm extends Vue {
  @Prop() private interests!: string[];

  private specificMusic: string[] = ['Music1', 'Music2', 'Music3', 'Music4', 'Music5', 'Music6', 'Music7', 'Music8'];
  private specificMovies: string[] = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5', 'Movie6', 'Movie7', 'Movie8'];
  private specificSports: string[] = ['Sports1', 'Sports2', 'Sports3', 'Sports4', 'Sports5', 'Sports6', 'Sports7', 'Sports8'];
  private specificPets: string[] = ['Pets1', 'Pets2', 'Pets3', 'Pets4', 'Pets5', 'Pets6', 'Pets7', 'Pets8'];
  private specificGames: string[] = ['Game1', 'Game2', 'Game3', 'Game4', 'Game5', 'Game6', 'Game7', 'Game8'];
  private specificFood: string[] = ['Food1', 'Food2', 'Food3', 'Food4', 'Food5', 'Food6', 'Food7', 'Food8'];
  private specificShopping: string[] = ['Shop1', 'Shop2', 'Shop3', 'Shop4', 'Shop5', 'Shop6', 'Shop7', 'Shop8'];
  private specificArts: string[] = ['Arts1', 'Arts2', 'Arts3', 'Arts4', 'Arts5', 'Arts6', 'Arts7', 'Arts8'];
  private specificTravel: string[] = ['Travel1', 'Travel2', 'Travel3', 'Travel4', 'Travel5', 'Travel6', 'Travel7', 'Travel8'];
  private specificReading: string[] = ['Read1', 'Read2', 'Read3', 'Read4', 'Read5', 'Read6', 'Read7', 'Read8'];

  private selectedSpecificsFirst: string[] = [];
  private selectedSpecificsSecond: string[] = [];
  private selectedSpecificsThird: string[] = [];
  // private selectedNineSpecifics: string[] = [];
  private selectRules = [(v: any) => v.length === 3 || 'You need to select exactly 3 items']
  private valid: boolean = false;

  @Watch('selectedSpecificsFirst')
  private onSelectedSpecificsFirstChange(): void {
    if (this.selectedSpecificsFirst.length === 3 && this.selectedSpecificsSecond.length === 3 && this.selectedSpecificsThird.length === 3) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('selectedSpecificsSecond')
  private onSelectedSpecificsSecondChange(): void {
    if (this.selectedSpecificsFirst.length === 3 && this.selectedSpecificsSecond.length === 3 && this.selectedSpecificsThird.length === 3) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Watch('selectedSpecificsThird')
  private onSelectedSpecificsThirdChange(): void {
    if (this.selectedSpecificsFirst.length === 3 && this.selectedSpecificsSecond.length === 3 && this.selectedSpecificsThird.length === 3) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @Emit('back_three')
  private backInterestsForm(): void {
  }

  @Emit('finished_three')
  private finishedHelper(interests: string[]): void {
  }

  private finished(): void {
    const selectedNineSpecifics: string[] = [];
    for (let i = 0; i < 9; i++) {
      if (i < 3) {
        selectedNineSpecifics.push(this.selectedSpecificsFirst[i]);
      }
      else if (i < 6) {
        selectedNineSpecifics.push(this.selectedSpecificsSecond[i - 3]);
      }
      else {
        selectedNineSpecifics.push(this.selectedSpecificsThird[i - 6]);
      }
    }
    console.log('selectedNineSpecifics', selectedNineSpecifics);
    this.finishedHelper(selectedNineSpecifics);
  }
}
</script>

<style lang="scss" scoped>
</style>