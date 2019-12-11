<template>
  <v-app>
    <Navbar @home_status="homeStatus" @profile_status="profileStatus"></Navbar>
    <FriendsList :myUID="myUID" :myDocData="myDocData" :myData="myData" :othersDocData="otherDocsTopFive" :othersData="otherSettingsTopFive" :matchValues="matchValues" :isFriends="isFriends" v-if="atHome && loadedMyData && loadedOthersData" @newFriend="changeIsFriends"></FriendsList>
    <Profile :myData="myData" v-else-if="atProfile && loadedMyData && loadedOthersData"></Profile>
    <v-container v-else>
      <v-row>
        <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="3">
          <h1>Loading All Data...</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import FriendsList from '@/components/FriendsList.vue';
import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';
import { dbConfig } from '@/firebase/init';
import { SettingState } from '@/store/SettingState';

export interface MatchAlg {
  idx: number;
  percentage: number;
}

@Component({
  components: {
    FriendsList,
    Navbar,
    Profile,
  },
})
export default class Main extends Vue {
  private colors: string[] = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
  private model: number = 0;
  private atHome: boolean = true;
  private atProfile: boolean = false;
  private user!: any;
  private myUID!: string;
  private myDocData!: string;
  private myData: SettingState = {major: '', degree: '', interests: [], specifics: [], gender: '', name: '', username: '', friendsUID: []};
  private otherDocsAll: string[] = [];
  private otherDocsTopFive: string[] = ['', '', '', '', ''];
  private otherSettingsAll: SettingState[] = [];
  private otherSettingsTopFive: SettingState[] = [];
  private matchValues: number[] = [0, 0, 0, 0, 0];
  private isFriends: boolean[] = [false, false, false, false, false];
  private loadedMyData: boolean = false;
  private loadedOthersData: boolean = false;


  private homeStatus(): void {
    this.atHome = true;
    this.atProfile = false;
  }

  private profileStatus(): void {
    this.atHome = false;
    this.atProfile = true;
  }

  private async created(): Promise<void> {
    await this.init();
  }

  private async init(): Promise<void> {
    this.user = dbConfig.dbAuth.currentUser!;
    this.myUID = this.user.uid;
    const myRef = dbConfig.dbFireStore.collection('settings').where('uid', '==', this.myUID);
    // this.myData = {major: 'History', degree: 'Masters', interests: ['FOOD & DRINK', 'GAMES', 'READING'], specifics: ['Middle Eastern', 'Spanish', 'Thai', 'Adventure', 'Board', 'Card', 'Manga', 'Mystery', 'Newspaper'], gender: 'FEMALE', name: 'Alice Shen', username: 'AS'}
    myRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.myData.major = doc.data().major;
        this.myData.degree = doc.data().degree;
        this.myData.interests = doc.data().interests;
        this.myData.specifics = doc.data().specifics;
        this.myData.gender = doc.data().gender;
        this.myData.name = doc.data().name;
        this.myData.username = doc.data().username;
        this.myData.friendsUID = doc.data().friendsUID;
      })
    }).then(() => {
      this.loadedMyData = true;
      console.log('loaded myData', this.myData);
    }).then(() => {
      const sortHelper: MatchAlg[] = [];
      let idx = 0;
      const otherRef = dbConfig.dbFireStore.collection('settings').get().then(snapshot => {
        snapshot.forEach(doc => {
          const setting = doc.data();
          if (setting.uid !== this.user.uid) {
            this.otherDocsAll.push(doc.id);
            this.otherSettingsAll.push({
              major: setting.major,
              degree: setting.degree,
              interests: setting.interests,
              specifics: setting.specifics,
              gender: setting.gender,
              name: setting.name,
              username: setting.username,
              friendsUID: setting.friendsUID,
            });
            let matched = 0;
            for (let i = 0; i < 3; i++) {
              const otherInterest = setting.interests[i]
              if (this.myData.interests.includes(otherInterest)) { matched += 1; }
            }
            sortHelper.push({idx, percentage: 100 * matched / 3});
            idx += 1;
          }
          else {
            this.myDocData = doc.id;
          }
        })
      }).then(() => {
        sortHelper.sort((a, b) => (a.percentage < b.percentage) ? 1 : -1);
        for (let i = 0; i < 5; i++) {
          this.otherDocsTopFive[i] = this.otherDocsAll[sortHelper[i].idx];
          this.otherSettingsTopFive.push(this.otherSettingsAll[sortHelper[i].idx]);
          this.matchValues[i] = sortHelper[i].percentage;
          if (this.otherSettingsTopFive[i].friendsUID.includes(this.user.uid)) {
            this.isFriends[i] = true;
          }
        }
      }).then(() => {
        console.log(this.otherSettingsTopFive);
        console.log(this.otherDocsTopFive);
        console.log(this.matchValues);
        this.loadedOthersData = true;
      });
    })
  }

  private changeIsFriends(idxFromChild: number) {
    this.isFriends[idxFromChild] = !this.isFriends[idxFromChild];
    console.log(idxFromChild);
    console.log(this.isFriends);
  }
}
</script>

<style scoped>

</style>