<template>
  <v-app>
    <Navbar @home_status="homeStatus" @profile_status="profileStatus"></Navbar>
    <FriendsList :myData="myData" :othersData="otherSettingsTopFive" :matchValues="matchValues" v-if="atHome && loadedMyData && loadedOthersData"></FriendsList>
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

export interface matchAlg {
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
  private myData: SettingState = {major: '', degree: '', interests: [], specifics: [], gender: '', name: '', username: '', friendsUID: []};
  private otherSettingsAll: SettingState[] = [];
  private otherSettingsTopFive: SettingState[] = [];
  private matchValues: number[] = [];
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
    const myUID = this.user.uid;
    const myRef = dbConfig.dbFireStore.collection('settings').where('uid', '==', myUID);
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
      const sortHelper: matchAlg[] = [];
      let idx = 0;
      const otherRef = dbConfig.dbFireStore.collection('settings').get().then(snapshot => {
        snapshot.forEach(doc => {
          let setting = doc.data();
          if (setting.uid !== this.user.uid) {
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
            sortHelper.push({idx: idx, percentage: 100 * matched / 3});
            idx += 1;
          }
        })
      }).then(() => {
        sortHelper.sort((a, b) => (a.percentage < b.percentage) ? 1 : -1);
        for (let i = 0; i < 5; i++) {
          this.otherSettingsTopFive.push(this.otherSettingsAll[sortHelper[i].idx]);
          this.matchValues.push(sortHelper[i].percentage);
        }
      }).then(() => {
        console.log(this.otherSettingsAll);
        console.log(this.otherSettingsTopFive);
        console.log(this.matchValues);
        this.loadedOthersData = true;
      });
    })
  }
}
</script>

<style scoped>

</style>