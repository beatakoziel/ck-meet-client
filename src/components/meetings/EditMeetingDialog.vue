<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2" outlined color="primary" v-bind="attrs" v-on="on">
            Edytuj
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Edytuj spotkanie</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-text-field
                  label="Nazwa"
                  v-model="meetingData.name"
                  :rules="[(v) => !!v || 'Pole wymagane']"
                  required
              ></v-text-field>
              <v-textarea
                  v-model="meetingData.description"
                  label="Opis"
                  :counter="500"
                  prepend-icon="mdi-comment-outline"
                  :rules="[(v) => !!v || 'Pole wymagane']"
                  required
              ></v-textarea>
              <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="meetingData.date"
                      label="Data spotkania"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="meetingData.date"
                    @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
              <v-text-field
                  v-model="meetingData.maxNumOfParticipants"
                  single-line
                  type="number"
                  label="Maksymalna liczba uczestników**"
              />
              <v-select
                  v-model="meetingData.category"
                  :items="categories"
                  label="Kategoria"
                  outlined
                  item-text="value"
                  item-value="key"
              ></v-select>
              <v-col cols="12"></v-col>
              <small class="error-message">{{ errorMessage }}</small>
            </v-container>
            <p>** liczba uczestników łącznie z Tobą</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" text @click="dialog = false">Zamknij</v-btn>
            <v-btn color="accent" text @click="editThisMeeting()">Edytuj spotkanie</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default {
  props: ["currentMeeting"],
  data() {
    return {
      menu2: false,
      modal: false,
      meetingType: "meeting",
      meetingData: {
        name: this.currentMeeting.name,
        description: this.currentMeeting.description,
        maxNumOfParticipants: this.currentMeeting.maxNumOfParticipants,
        date: this.currentMeeting.date,
        category: this.currentMeeting.category,
      },
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
      //currentMeeting: (state) => state.meetingsStore.currentMeeting,
    }),
  },
  methods: {
    ...mapGetters(["isAuthenticated"]),
    ...mapMutations(["logout", "resetState"]),
    ...mapActions(["editMeeting", "getCategories"]),
    editThisMeeting() {
      let editObject = {meetingId: this.currentMeeting.id, meeting: this.meetingData};
      this.editMeeting(editObject).then((response) => {
        if (response.status == "200") {
          this.dialog = false;
          this.$router.push({ name: 'Meetings' })
        } else if (response.status == "403") {
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