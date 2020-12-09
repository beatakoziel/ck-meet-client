<template>
  <v-row>
    <v-btn v-if="!saidHelloAlready()" ml-2 @click.stop="sayHelloToUser()">
      Przywitaj się
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="margin-icon" v-bind="attrs" v-on="on"
          >mdi-hand-right
          </v-icon
          >
        </template>
        <span>Przywitaj się!</span>
      </v-tooltip>
    </v-btn>


    <v-dialog
        v-model="dialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class=" headline justify-center">
          <p v-if="personalData.gender==='FEMALE'">Przywitałaś się!</p>
          <p v-if="personalData.gender==='MALE'">Przywitałeś się!</p>
        </v-card-title>
        <v-flex row class="justify-center mr-0">
          <p>
            <v-icon style="font-size: 200px">mdi-hand</v-icon>
          </p>
          <p v-if="status==='USER_SAID_HELLO'">Już prawie jesteście znajomymi, ale aby nimi</p>
          <p v-if="status==='USER_SAID_HELLO'">zostać zarówno Ty jak i ten użytkownik musicie się przywitać.</p>
          <p v-if="status==='BOTH_SAID_HELLO'">Osoba została dodana do grona Twoich znajomych.</p>
          <p v-if="status==='BOTH_SAID_HELLO'">Teraz możecie się ze sobą skontaktować.</p>
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
    ...mapActions(["sayHello"]),
    sayHelloToUser() {
      this.sayHello(this.currentViewedUser.id)
          .then((response) => {this.status = response;
           console.log(this.status)});
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
      currentViewedUser: (state) => state.peopleStore.currentUser,
      personalData: (state) => state.peopleStore.personalData,
      relationships: (state) => state.relationshipStore.relationships
    })
  }
}
</script>