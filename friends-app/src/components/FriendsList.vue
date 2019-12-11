<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">

        <v-dialog v-model="dialog" persistent max-width="320">
          <v-card>
            <v-card-title class="headline" v-if="!friendsNow">Want to become friends with {{opponentName}}?</v-card-title>
            <v-card-title class="headline" v-else>Want to disconnect from {{opponentName}}?</v-card-title>
            <v-card-actions>
              <v-btn color="blue-grey darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="alterFriend(idxNow)">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <div><h1>Discover</h1></div>
        <div><h3>You might want to know them. Check them out!</h3></div>
        <v-carousel :show-arrows="false">
          <v-carousel-item v-for="(otherData, i) in othersData" :key="i">
            <v-card class="elevation-12" height="100%" color="#deffe6">
              <v-card-text>
                <div>
                  <h1 style="color: black">{{otherData.name}}:
                      <img v-if="otherData.gender === 'MALE'" src="../assets/male.jpg" style="width:28px; height:28px;">
                      <img v-if="otherData.gender === 'FEMALE'" src="../assets/female.png" style="width:28px; height:28px;">
                  </h1>
                </div>
                <div class="pt-3">
                  <h2 style="color: black">{{otherData.major}}, {{otherData.degree}}</h2>
                </div>
                <div class="pt-3">
                  <v-chip v-if="otherData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[0]}}</v-chip>

                  <v-chip v-if="otherData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[1]}}</v-chip>

                  <v-chip v-if="otherData.interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>
                  <v-chip v-if="otherData.interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[2]}}</v-chip>

                  <v-chip v-if="otherData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[3]}}</v-chip>

                  <v-chip v-if="otherData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[4]}}</v-chip>

                  <v-chip v-if="otherData.interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>
                  <v-chip v-if="otherData.interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[5]}}</v-chip>

                  <v-chip v-if="otherData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[6]}}</v-chip>

                  <v-chip v-if="otherData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[7]}}</v-chip>

                  <v-chip v-if="otherData.interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                  <v-chip v-if="otherData.interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{otherData.specifics[8]}}</v-chip>
                </div>
                <div class="pt-3">
                  <v-progress-circular :rotate="360" :size="70" :width="10" :value="matchValues[i]" color="teal">{{ matchValues[i].toFixed(1) }}%</v-progress-circular>
                  <!-- <v-btn @click.stop="dialog = true" icon color="black" height="70" width="70" class="ml-12" v-if="!isFriends[i]"><v-icon size="70">mdi-account-multiple-plus</v-icon></v-btn>
                  <v-btn @click.stop="dialog = true" icon color="black" height="70" width="70" class="ml-12" v-else><v-icon size="70">mdi-handshake</v-icon></v-btn> -->
                  <v-btn @click.stop="handleConnection(i)" icon color="black" height="70" width="70" class="ml-12" v-if="!isFriends[i]"><v-icon size="70">mdi-account-multiple-plus</v-icon></v-btn>
                  <v-btn @click.stop="handleConnection(i)" icon color="black" height="70" width="70" class="ml-12" v-else><v-icon size="70">mdi-handshake</v-icon></v-btn>
                </div>
                <div>
                  <!-- <h5><span style="color: black" class="pl-2">Similarity</span><span style="color: black" class="ml-12">Check <span style="color: black" v-if="otherData.gender === 'MALE'">him</span><span style="color: black" v-if="otherData.gender === 'FEMALE'">her</span> out!</span></h5> -->
                  <h5>
                    <span style="color: black" class="pl-2">Similarity</span>
                    <span style="color: black" class="ml-12" v-if="!isFriends[i]">Let's F.R.I.E.N.D.S</span>
                    <span style="color: black" class="ml-12" v-else>Already Friends!</span>
                  </h5>
                </div>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { SettingGetters, SettingActions, SettingMutations, Setting } from '@/store/Setting';
import { SettingState } from '@/store/SettingState';
import { dbConfig } from '@/firebase/init';

@Component({
  components: {
  },
})
export default class FriendsList extends Vue {
  @Prop() private myUID!: string;
  @Prop() private myDocData!: string;
  @Prop() private myData!: SettingState;
  @Prop() private othersDocData!: string[];
  @Prop() private othersData!: SettingState[];
  @Prop() private matchValues!: number[];
  @Prop() private isFriends!: boolean[];
  private dialog: boolean = false;
  private friendsNow: boolean = false;
  private opponentName: string = '';
  private idxNow: number = 0;
  private opponentUID: string = '';

  @Emit('newFriend')
  private alterFriendHelper(idx: number): void {
  }

  private alterFriend(idx: number): void {
    this.alterFriendHelper(idx);
    this.dialog = false;
    const otherRef = dbConfig.dbFireStore.collection('settings').doc(this.othersDocData[idx]);
    otherRef.get().then(snapshot => {
      if (snapshot.exists) {
        const tmpData = snapshot.data();
        this.opponentUID = tmpData!.uid;
        let tmpFriendsUID: string[] = tmpData!.friendsUID;
        // console.log(tmpFriendsUID);
        // console.log(this.myUID);

        if (this.friendsNow === false) {
          tmpFriendsUID.push(this.myUID);
        }
        else {
          tmpFriendsUID = this.removeElementFromStrArray(tmpFriendsUID, this.myUID);
        }

        otherRef.update({
          friendsUID: tmpFriendsUID
        }).then(() => {
          const myRef = dbConfig.dbFireStore.collection('settings').doc(this.myDocData);
          myRef.get().then(snapshot2 => {
            if (snapshot.exists) {
              const tmpData2 = snapshot.data();
              let tmpFriendsUID2: string[] = tmpData!.friendsUID;

              if (this.friendsNow === false) {
                tmpFriendsUID2.push(this.opponentUID);
              }
              else {
                tmpFriendsUID2 = this.removeElementFromStrArray(tmpFriendsUID2, this.opponentUID);
              }

              myRef.update({
                friendsUID: tmpFriendsUID2
              }).then(() => {
                console.log('Friends List Update Finished');
              })
            }
          })
        })
      }
    })
  }

  private handleConnection(idx: number): void {
    this.idxNow = idx;
    this.friendsNow = this.isFriends[idx];
    this.opponentName = this.othersData[idx].name;
    // console.log('idxNow', this.idxNow);
    // console.log('friendsNow', this.friendsNow);
    // console.log('opponentName', this.opponentName);
    this.dialog = true;
  }

  private removeElementFromStrArray(arr: string[], target: string): string[] {
    arr.forEach((item, index) => {
      if (item === target) {
        arr.splice(index, 1);
      }
    });
    return arr;
  }
}
</script>

<style scoped>

</style>