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

  private specificMusic: string[] = ['Blues', 'Classical', 'Country', 'Dance', 'Electronic', 'Gospel', 'Heavy', 'Hip Hop', 'Jazz', 'Pop', 'Rock', 'Soul'];   // 12
  private specificMovies: string[] = ['Action', 'Animation', 'Bollywood', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Horror', 'Musical', 'Science', 'Thriller'];   // 11
  private specificSports: string[] = ['Baseball', 'Basketball', 'Football', 'Golf', 'Marathon', 'Racing', 'Ski', 'Snowboard', 'Soccer', 'Swimming', 'Tennis', 'Thriathlon', 'Volleyball'];   // 13
  private specificPets: string[] = ['Bird', 'Cat', 'Dog', 'Fish', 'Hamster', 'Horse', 'Rabbit', 'Reptiles'];   // 8
  private specificGames: string[] = ['Action', 'Adventure', 'Board', 'Card', 'Music', 'Puzzle', 'Racing', 'Role Playing', 'Simulation', 'Shooting', 'Sports'];   // 11
  private specificFood: string[] = ['American', 'Chinese', 'French', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Latin American', 'Mexican', 'Middle Eastern', 'Spanish', 'Thai', 'Vietnamese'];   // 15
  private specificShopping: string[] = ['Beauty Salon', 'Clothe', 'Cosmetic', 'Dress', 'Fragrance', 'Hair', 'Handbag', 'Jewelry', 'Shoes', 'SPA', 'Sunglass', 'Tattoo'];   // 12
  private specificArts: string[] = ['Acting', 'Craft', 'Dance', 'Drawing', 'Drum', 'Fine Art', 'Guitar', 'Painting', 'Performing Art', 'Photography', 'Sculpture', 'Singing', 'Writing'];   // 13
  private specificTravel: string[] = ['Adventure', 'Beach', 'Driving', 'Ecotourism', 'Flight', 'Hotel', 'Lake', 'Mountain', 'Nature', 'Theme Park', 'Tourism', 'Vacation'];   // 12
  private specificReading: string[] = ['Book', 'Comic', 'E-book', 'Fiction', 'Litrature', 'Magazine', 'Manga', 'Mystery', 'Newspaper', 'Non-fiction', 'Romance'];   // 11

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
    this.selectedSpecificsFirst.sort();
    this.selectedSpecificsSecond.sort();
    this.selectedSpecificsThird.sort();
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
    this.finishedHelper(selectedNineSpecifics);
  }
}
</script>

<style lang="scss" scoped>
</style>