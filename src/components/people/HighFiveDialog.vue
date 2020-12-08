<template>
  <v-row>
    <v-btn ml-2 @click.stop="dialog = true">
      Przywitaj się
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="margin-icon" v-bind="attrs" v-on="on"
          >mdi-hand-right
          </v-icon
          >
        </template>
        <span>Przybij piątkę!</span>
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
          <!--<p>Jesteście znajomymi!</p>-->
        </v-card-title>
          <v-flex row class="justify-center mr-0">
            <p>
<!--              <v-icon style="font-size: 200px">mdi-handshake</v-icon>-->
              <v-icon style="font-size: 200px">mdi-hand</v-icon>
            </p>
            <p style="text-align: center">Druga osoba musi także się z Tobą przywitać abyście zostali znajomymi.</p>
<!--            <p style="text-align: center">Teraz jesteście znajomymi i możecie się ze sobą skontaktować.</p>-->
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
import {mapState} from "vuex";

export default {
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapState({
      personalData: (state) => state.peopleStore.personalData,
    })
  }
}
</script>