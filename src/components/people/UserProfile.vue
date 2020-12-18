<template>

  <v-card pb-5>
    <!--    <v-toolbar>
          <v-icon color="primary" large>mdi-information-outline</v-icon>
          <span>
            Jeśli chcesz się zapoznać kliknij przycisk "Przywitaj się<v-icon class="margin-icon" v-bind="attrs" v-on="on">mdi-hand-right</v-icon>"!
          </span>
          <v-spacer></v-spacer>
        </v-toolbar>-->
    <v-flex row justify-center mt-10>
      <v-container ml-0 mr-16 class="my-6 inner-container">
        <v-img
            v-if="currentViewedUser.avatarBytes == null"
            height="350px"
            width="350px"
            src="../../assets/default-image.png"
        />
        <v-img
            v-else
            height="350px"
            width="350px"
            :src="'data:image/jpeg;base64,' + currentViewedUser.avatarBytes"
        />
        <hr class="horizontal-line"/>
        <p class="display-1 picture-text" mt-5>
          {{ currentViewedUser.nickname }}, {{ currentViewedUser.age }} {{ setAgeString() }}
          <v-tooltip v-if="currentViewedUser.gender === 'FEMALE'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-female</v-icon>
            </template>
            <span>Kobieta</span>
          </v-tooltip>
          <v-tooltip v-if="currentViewedUser.gender === 'MALE'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-male</v-icon>
            </template>
            <span>Mężczyzna</span>
          </v-tooltip>
        </p>
        <v-container class="hello-container" ml-0 mr-0 pl-0 pr-0>
          <RevertSayHelloDialog/>
          <SayHelloDialog/>
          <p v-if="areFriends()" class="caption info-caption">
            Jeżeli Ty i ten użytkownik przybijecie sobie piątki wówczas zostanie
            odblokowana możliwość skontaktowania się ze sobą.
          </p>
        </v-container>
      </v-container>
      <v-container class="inner-container" ml-16 mr-0>
        <v-card class="my-6" color="card">
          <v-container>
            <p class="title">Zainteresowania</p>

            <p class="display-1">
              <v-tooltip v-for="interest in currentViewedUser.interests" :key="interest.key" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" large>{{ interest.iconName }}</v-icon>
                </template>
                <span>{{ interest.value }}</span>
              </v-tooltip>
            </p>
            <p class="title">Opis</p>
            <p>{{ currentViewedUser.description }}</p>
          </v-container>
        </v-card>
        <v-card class="my-6" color="card">
          <v-container>
            <p class="title">Preferowane dane osoby, którą {{ currentViewedUser.nickname }} chce poznać</p>
            <v-flex ml-1 row flex-justify-start flex-align-center>
              <v-flex column flex-justify-start flex-align-center>
                Płeć:
                <p v-if="currentViewedUser.preferredGenderToMeet.includes('FEMALE')">
                  <v-icon large>mdi-checkbox-marked-circle-outline</v-icon>
                  Kobieta
                </p>
                <p v-if="currentViewedUser.preferredGenderToMeet.includes('FEMALE')">
                  <v-icon large>mdi-checkbox-marked-circle-outline</v-icon>
                  Mężczyzna
                </p>
                Wiek:
                <p v-if="currentViewedUser.preferredGenderToMeet.includes('FEMALE')">
                  <v-icon large>mdi-checkbox-marked-circle-outline</v-icon>
                  od {{ currentViewedUser.preferredAgeToMeetFrom }} do {{ currentViewedUser.preferredAgeToMeetTo }} lat
                </p>
              </v-flex>
            </v-flex>
          </v-container>
        </v-card>
      </v-container>
    </v-flex>

  </v-card>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SayHelloDialog from "@/components/people/SayHelloDialog";
import RevertSayHelloDialog from "@/components/people/RevertSayHelloDialog";

export default {
  data() {
    return {
      ageString: "",
      min: 18,
      max: 5,
      range: [1, 9],
      ageToMeet: [
        this.currentViewedUser.preferredAgeToMeetFrom,
        this.currentViewedUser.preferredAgeToMeetTo
      ]
    };
  },
  components: {SayHelloDialog, RevertSayHelloDialog},
  methods: {
    setAgeString() {
      var lastDigit = this.currentViewedUser.age % 10;
      var checkList = [0, 1, 5, 6, 7, 8, 9];
      if (checkList.indexOf(lastDigit) > -1) this.ageString = "lat";
      else this.ageString = "lata";
      return this.ageString;
    },
    saidHelloAlready() {
      let found = false;
      for (let i = 0; i < this.relationships.length; i++) {
        if (this.relationships[i].userToWhoSaidHello === this.currentViewedUser.id) {
          found = true;
          break;
        }
      }
      return found;
    },
    areFriends() {
      let found = false;
      for (let i = 0; i < this.relationships.length; i++) {
        if ((this.relationships[i].userToWhoSaidHello === this.currentViewedUser.id) &&
            this.relationships[i].status === 'BOTH_SAID_HELLO') {
          found = true;
          break;
        }
      }
      return found;
    },
    ...mapActions(["currentUser"]),
  },
  computed: {
    ...mapState({
      currentViewedUser: (state) => state.peopleStore.currentUser,
      relationships: (state) => state.relationshipStore.relationships
    }),
  },
  mounted() {
    this.currentUser();
    this.setAgeString();
  },
};
</script>

<style scoped>
.picture-text {
  margin-top: 10px;
}

i {
  margin-right: 5px;
}

.inner-container {
  max-width: 550px;
}

.margin-checkbox {
  margin-right: 10px;
  margin-top: 0px;
}

span {
  margin-left: 5px;
}

header {
  margin-top: 20px;
}

.hello-container {
  margin-top: 30px;
}

.info-caption {
  margin-top: 10px;
}

.margin-icon {
  margin-left: 10px;
}

.horizontal-line {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
}
</style>