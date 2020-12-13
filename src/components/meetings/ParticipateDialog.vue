<template>
  <v-row>
    <v-btn outlined large color="primary" v-if="!participateAlready()" class=" mb-3" @click.stop="participateInMeeting()">
      Weź udział
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon style="margin-left: 5px;" v-bind="attrs" v-on="on"
          >mdi-account-multiple-plus-outline
          </v-icon
          >
        </template>
        <span>Weź udział w spotkaniu</span>
      </v-tooltip>
    </v-btn>


    <v-dialog
        v-model="dialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class=" headline justify-center">
          <p v-if="personalData.gender==='FEMALE'">Wzięłaś udział w spotkaniu!</p>
          <p v-if="personalData.gender==='MALE'">Wziąłeś udział w spotkaniu!</p>
        </v-card-title>
        <v-flex row class="justify-center mr-0">
          <p>
            <v-icon style="font-size: 200px">mdi-account-multiple-plus-outline</v-icon>
          </p>
          <p>Teraz możesz brać udział w dyskusji spotkania.</p>
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
    ...mapActions(["participate"]),
    participateInMeeting() {
      this.participate(this.currentViewedMeeting.id)
          .then((response) => {this.status = response;
           console.log(this.status)});
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
<style scoped>
.margin-icon {
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>