<template>
  <v-row>
    <v-btn outlined large color="primary" v-if="participateAlready()" class="ml-3" @click.stop="cancelParticipationInMeeting()">
      Cofnij wzięcie udziału
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon style="margin-left: 5px;" class="margin-icon" v-bind="attrs" v-on="on"
          >mdi-account-multiple-minus-outline
          </v-icon
          >
        </template>
        <span>Cofnięcie spowoduje usunięcie osoby z grona przywitanych</span>
        <!--        <span>Cofnięcie spowoduje usunięcie osoby z grona znajomych</span>-->
      </v-tooltip>
    </v-btn>


    <v-dialog
        v-model="dialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class=" headline justify-center">
          <p v-if="personalData.gender==='FEMALE'">Wycofałaś swój udział w wydarzeniu!</p>
          <p v-if="personalData.gender==='MALE'">Wycofałeś swój udział w wydarzeniu!</p>
        </v-card-title>
        <v-flex row class="justify-center mr-0">
          <p>
            <v-icon style="font-size: 200px">mdi-account-multiple-minus-outline</v-icon>
          </p>
          <p v-if="personalData.gender==='FEMALE'">Nie będziesz mógła śledzić dyskusji wydarzenia.</p>
          <!--<p style="text-align: center">Osoba została usunięta z grona Twoich znajomych.</p>-->
          <p v-if="personalData.gender==='MALE'">Nie będziesz mógła śledzić dyskusji wydarzenia.</p>
        </v-flex>
        <v-card-actions>
          <v-spacer></v-spacer>


          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      dialog: false,
      status: null
    }
  },
  methods: {
    ...mapActions(["cancelParticipation"]),
    cancelParticipationInMeeting() {
      this.cancelParticipation(this.currentViewedMeeting.id)
          .then((response) => this.status = response);
      this.dialog = true;
    },
    participateAlready() {
      let found = false;
      for (let i = 0; i < this.currentViewedMeeting.participants.length; i++) {
        if (this.currentViewedMeeting.participants[i].id === this.currentLoggedUser.id) {
          found = true;
          break;
        }
      }
      return found;
    }
  },
  computed: {
    ...mapState({
      currentLoggedUser: (state) => state.peopleStore.currentLoggedUser,
      currentViewedMeeting: (state) => state.meetingsStore.currentMeeting,
      personalData: (state) => state.peopleStore.personalData,
      relationships: (state) => state.relationshipStore.relationships
    })
  }
}
</script>
