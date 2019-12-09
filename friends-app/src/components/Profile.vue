<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <div><h1>Profile</h1></div>
        <div><h3>Your Profile</h3></div>
            <v-card class="elevation-12" height="100%" color="#deffe6">
              <v-card-text>
                <div>
                    <h1 style="color: black">{{myData.name}}:
                        <img v-if="myData.gender === 'MALE'" src="../assets/male.jpg" style="width:28px; height:28px;">
                        <img v-if="myData.gender === 'FEMALE'" src="../assets/female.png" style="width:28px; height:28px;">
                    </h1>
                </div>
                <div class="pt-3">
                    <h2 style="color: black">{{myData.major}}, {{myData.degree}}</h2>
                </div>
                <div class="pt-3">
                    <v-chip v-if="myData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[0]}}</v-chip>

                    <v-chip v-if="myData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[1]}}</v-chip>

                    <v-chip v-if="myData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>
                    <v-chip v-if="myData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[2]}}</v-chip>

                    <v-chip v-if="myData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[3]}}</v-chip>

                    <v-chip v-if="myData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[4]}}</v-chip>

                    <v-chip v-if="myData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>
                    <v-chip v-if="myData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[5]}}</v-chip>

                    <v-chip v-if="myData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[6]}}</v-chip>

                    <v-chip v-if="myData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[7]}}</v-chip>

                    <v-chip v-if="myData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                    <v-chip v-if="myData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{myData.specifics[8]}}</v-chip>
                </div>
              </v-card-text>
            </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import { SettingGetters, SettingActions, SettingMutations, Setting } from '@/store/Setting';
import { SettingState } from '@/store/SettingState';

@Component({
  components: {
  },
})
export default class Profile extends Vue {
  private myData: SettingState = {email: '', password: '', major: '', degree: '', interests: [], specifics: [], gender: '', name: '', username: ''};

  private async created(): Promise<void> {
    await this.init();
  }

  private async init(): Promise<void> {
      this.myData = {email: 'yw398@duke.edu', password: 'ertyui', major: 'History', degree: 'Masters', interests: ['FOOD & DRINK', 'GAMES', 'READING'], specifics: ['Middle Eastern', 'Spanish', 'Thai', 'Adventure', 'Board', 'Card', 'Manga', 'Mystery', 'Newspaper'], gender: 'FEMALE', name: 'Alice Shen', username: 'AS'}
  }
}
</script>

<style scoped>

</style>