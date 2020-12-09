<template>
  <v-row>
    <v-btn v-if="saidHelloAlready()" ml-2 @click.stop="revertHelloToUser()">
      Cofnij przywitanie
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon style="margin-left: 5px;" class="margin-icon" v-bind="attrs" v-on="on"
          >mdi-hand-wash
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
          <p v-if="personalData.gender==='FEMALE'">Cofnęłaś przywitanie!</p>
          <p v-if="personalData.gender==='MALE'">Cofnąłeś przywitanie!</p>
        </v-card-title>
        <v-flex row class="justify-center mr-0">
          <p>
            <v-icon style="font-size: 200px">mdi-hand-wash</v-icon>
          </p>
          <p>Osoba została usunięta z grona przez Ciebie przywitanych.</p>
          <!--<p style="text-align: center">Osoba została usunięta z grona Twoich znajomych.</p>-->
          <p>Nie możecie się ze sobą skontaktować.</p>
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
    ...mapActions(["revertHello"]),
    revertHelloToUser() {
      this.revertHello(this.currentViewedUser.id)
          .then((response) => this.status = response);
      this.dialog = true;
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
    }
  },
  computed: {
    ...mapState({
      personalData: (state) => state.peopleStore.personalData,
      currentViewedUser: (state) => state.peopleStore.currentUser,
      relationships: (state) => state.relationshipStore.relationships
    })
  }
}
</script>
