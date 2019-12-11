<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <div><h1>Discover</h1></div>
        <div><h3>You might want to know them. Check them out!</h3></div>
        <v-carousel :show-arrows="false">
          <v-carousel-item v-for="(potentialFriend, i) in potentialFriends" :key="i">
            <v-card class="elevation-12" height="100%" color="#deffe6">
              <v-card-text>
                <div>
                  <h1 style="color: black">{{potentialFriends[i].name}}:
                      <img v-if="potentialFriends[i].gender === 'MALE'" src="../assets/male.jpg" style="width:28px; height:28px;">
                      <img v-if="potentialFriends[i].gender === 'FEMALE'" src="../assets/female.png" style="width:28px; height:28px;">
                  </h1>
                </div>
                <div class="pt-3">
                  <h2 style="color: black">{{potentialFriends[i].major}}, {{potentialFriends[i].degree}}</h2>
                </div>
                <div class="pt-3">
                  <v-chip v-if="potentialFriends[i].interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[0]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[1]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[0] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[0] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[2]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[3]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[4]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[1] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[1] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[5]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[6]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[7]}}</v-chip>

                  <v-chip v-if="potentialFriends[i].interests[2] === 'MUSIC'" class="ma-2" color="indigo" text-color="white"><v-avatar left><v-icon>mdi-music-circle</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'MOVIES & TV'" class="ma-2" color="purple" text-color="white"><v-avatar left><v-icon>mdi-movie-open</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FITNESS & SPORTS'" class="ma-2" color="red" text-color="white"><v-avatar left><v-icon>mdi-dumbbell</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'PETS'" class="ma-2" color="orange" text-color="white"><v-avatar left><v-icon>mdi-paw</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'GAMES'" class="ma-2" color="cyan" text-color="white"><v-avatar left><v-icon>mdi-gamepad-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'FOOD & DRINK'" class="ma-2" color="light-green" text-color="white"><v-avatar left><v-icon>mdi-food</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'SHOPPING & FASHION'" class="ma-2" color="lime" text-color="white"><v-avatar left><v-icon>mdi-shopping</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'ARTS'" class="ma-2" color="amber" text-color="white"><v-avatar left><v-icon>mdi-brush</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'TRAVEL'" class="ma-2" color="light-blue" text-color="white"><v-avatar left><v-icon>mdi-airplane-takeoff</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                  <v-chip v-if="potentialFriends[i].interests[2] === 'READING'" class="ma-2" color="blue-grey" text-color="white"><v-avatar left><v-icon>mdi-book-open-variant</v-icon></v-avatar>{{potentialFriends[i].specifics[8]}}</v-chip>
                </div>
                <div class="pt-3">
                  <v-progress-circular v-if="i === 0" :rotate="360" :size="70" :width="10" :value="matchValue1" color="teal">{{ matchValue1.toFixed(1) }}%</v-progress-circular>
                  <v-progress-circular v-if="i === 1" :rotate="360" :size="70" :width="10" :value="matchValue2" color="teal">{{ matchValue2.toFixed(1) }}%</v-progress-circular>
                  <v-progress-circular v-if="i === 2" :rotate="360" :size="70" :width="10" :value="matchValue3" color="teal">{{ matchValue3.toFixed(1) }}%</v-progress-circular>
                  <v-progress-circular v-if="i === 3" :rotate="360" :size="70" :width="10" :value="matchValue4" color="teal">{{ matchValue4.toFixed(1) }}%</v-progress-circular>
                  <v-progress-circular v-if="i === 4" :rotate="360" :size="70" :width="10" :value="matchValue5" color="teal">{{ matchValue5.toFixed(1) }}%</v-progress-circular>
                  <v-btn icon color="black" height="60" width="60" class="ml-12"><v-icon size="70">mdi-arrow-right</v-icon></v-btn>
                </div>
                <div>
                  <h5><span style="color: black" class="pl-2">Similarity</span><span style="color: black" class="ml-12">Check <span style="color: black" v-if="potentialFriends[i].gender === 'MALE'">him</span><span style="color: black" v-if="potentialFriends[i].gender === 'FEMALE'">her</span> out!</span></h5>
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
import { Vue, Component } from 'vue-property-decorator';
import { SettingGetters, SettingActions, SettingMutations, Setting } from '@/store/Setting';
import { SettingState } from '@/store/SettingState';

export interface matchAlg {
  idx: number;
  percentage: number;
}

@Component({
  components: {
  },
})
export default class FriendsList extends Vue {
  private potentialFriends: SettingState[] = [];
  private dummyData: SettingState[] = [
    {email: 'yw314@duke.edu', password: 'qwerty', major: 'Electrical and Computer Engineering', degree: 'Masters', interests: ['MUSIC', 'MOVIES & TV', 'FITNESS & SPORTS'], specifics: ['Classical', 'Country', 'Dance', 'Documentary', 'Drama', 'Fantasy', 'Marathon', 'Racing', 'Basketball'], gender: 'MALE', name: 'Yunhe Wang', username: 'yxxxw'},
    {email: 'yw328@duke.edu', password: 'asdfgh', major: 'Computer Science', degree: 'Bachelors', interests: ['MUSIC', 'PETS', 'GAMES'], specifics: ['Gospel', 'Heavy', 'Hip Hop', 'Horse', 'Cat', 'Fish', 'Puzzle', 'Racing', 'Role Playing'], gender: 'FEMALE', name: 'Susan Chen', username: 'SCHN'},
    {email: 'yw342@duke.edu', password: 'zxcvbn', major: 'Biology', degree: 'PHD', interests: ['FOOD & DRINK', 'TRAVEL', 'SHOPPING & FASHION'], specifics: ['Indian', 'Italian', 'Japanese', 'Beach', 'Driving', 'Ecotourism', 'Fragrance', 'Hair', 'Handbag'], gender: 'MALE', name: 'Yun Yue', username: 'YUN'},
    {email: 'yw356@duke.edu', password: 'wertyu', major: 'Physics', degree: 'Bachelors', interests: ['READING', 'ARTS', 'TRAVEL'], specifics: ['E-book', 'Fiction', 'Litrature', 'Drum', 'Fine Art', 'Guitar', 'Hotel', 'Lake', 'Mountain'], gender: 'FEMALE', name: 'Jessie Tang', username: 'TT'},
    {email: 'yw370@duke.edu', password: 'sdfghj', major: 'Computer Science', degree: 'PHD', interests: ['MOVIES & TV', 'SHOPPING & FASHION', 'ARTS'], specifics: ['Horror', 'Musical', 'Science', 'Handbag', 'Jewelry', 'Shoes', 'Performing Art', 'Photography', 'Sculpture'], gender: 'MALE', name: 'Andrew Hilton', username: 'Drew'},
    {email: 'yw384@duke.edu', password: 'xcvbnm', major: 'Linguistics', degree: 'Masters', interests: ['MUSIC', 'FITNESS & SPORTS', 'PETS'], specifics: ['Blues', 'Classical', 'Country', 'Ski', 'Snowboard', 'Soccer', 'Horse', 'Rabbit', 'Reptiles'], gender: 'MALE', name: 'Patrick Zhou', username: 'Pat'},
  ];
  private myData: SettingState = {email: '', password: '', major: '', degree: '', interests: [], specifics: [], gender: '', name: '', username: ''};
  private matchValue1: number = 0;
  private matchValue2: number = 0;
  private matchValue3: number = 0;
  private matchValue4: number = 0;
  private matchValue5: number = 0;

  private async created(): Promise<void> {
    await this.init();
  }

  private async init(): Promise<void> {
    this.myData = {email: 'yw398@duke.edu', password: 'ertyui', major: 'History', degree: 'Masters', interests: ['FOOD & DRINK', 'GAMES', 'READING'], specifics: ['Middle Eastern', 'Spanish', 'Thai', 'Adventure', 'Board', 'Card', 'Manga', 'Mystery', 'Newspaper'], gender: 'FEMALE', name: 'Alice Shen', username: 'AS'}
    const sortHelper: matchAlg[] = [];
    for (let i = 0; i < this.dummyData.length; i++) {
      let matched = 0;
      for (let j = 0; j < 3; j++) {
        const otherInterest = this.dummyData[i].interests[j]
        if (this.myData.interests.includes(otherInterest)) {
          matched += 1;
        }
      }
      sortHelper.push({idx: i, percentage: 100 * matched / 3});
    }
    sortHelper.sort((a, b) => (a.percentage < b.percentage) ? 1 : -1);
    console.log(sortHelper);
    for (let i = 0; i < 5; i++) {
      this.potentialFriends.push(this.dummyData[sortHelper[i].idx]);
      if (i === 0) this.matchValue1 = sortHelper[i].percentage;
      if (i === 1) this.matchValue2 = sortHelper[i].percentage;
      if (i === 2) this.matchValue3 = sortHelper[i].percentage;
      if (i === 3) this.matchValue4 = sortHelper[i].percentage;
      if (i === 4) this.matchValue5 = sortHelper[i].percentage;
    }
    // this.potentialFriends = this.dummyData.slice(0, 5);
  }
}
</script>

<style scoped>

</style>