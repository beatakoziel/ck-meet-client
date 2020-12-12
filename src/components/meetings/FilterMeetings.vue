<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2" outlined color="secondary" v-bind="attrs" v-on="on">
            <v-icon large>mdi-filter</v-icon>
            Filtruj
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Usuń spotkanie</span>
          </v-card-title>
          <v-card-text>
            Czy na pewno chcesz usunąć spotkanie "{{meetingName}}" ?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" text @click="dialog = false">Zamknij</v-btn>
            <v-btn color="secondary" text @click="deleteThisMeeting()">Usuń spotkanie</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default {
  props: ["meetingId", "meetingName"],
  data() {
    return {
      menu2: false,
      modal: false,
      meetingType: "meeting",
      errorMessage: "",
      show: false,
      dialog: false,
    };
  },
  components: {},
  mounted() {
    this.getCategories();
  },
  computed: {
    ...mapState({
      categories: (state) => state.infoStore.categories,
    }),
  },
  methods: {
    ...mapGetters(["isAuthenticated"]),
    ...mapMutations(["logout", "resetState"]),
    ...mapActions(["deleteMeeting", "getCategories"]),
    deleteThisMeeting() {
      this.deleteMeeting(this.meetingId).then((response) => {
        if (response.status === "200") {
          this.dialog = false;
          this.$router.push({ name: 'Meetings' })
        } else if (response.status === "403") {
          this.logout();
          this.resetState();
          this.$router.push({name: "Auth"});
        } else {
          this.errorMessage = "Upewnij się, że wprowadzone dane są prawidłowe.";
        }
      });
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>