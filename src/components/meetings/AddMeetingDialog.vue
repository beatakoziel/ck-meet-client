<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" outlined color="primary" v-bind="attrs" v-on="on">
          <v-icon large>mdi-plus</v-icon>
          Dodaj spotkanie
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Dodaj nowe spotkanie</span>
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
            <DatePicker :chosen-date="meetingData.date" picker-title="Data spotkania"/>
            <v-text-field
                v-model="meetingData.maxNumOfParticipants"
                single-line
                type="number"
                label="Maksymalna liczba uczestników**"
                :rules="participantsNumRules"
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
          <v-btn color="accent" text @click="addMeeting()">Dodaj spotkanie</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DatePicker from "../common/DatePicker";
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default {
  data() {
    return {
      meetingData: {
        name: "",
        description: "",
        maxNumOfParticipants: null,
        date: null,
        category: null,

      },
      participantsNumRules: [
        v => !!v || 'Pole wymagane',
        v => (Number(v) < 2) || 'Maksymalna liczba uczestników powinna być pomiędzy 2 a 20',
        v => (Number(v) > 20) || 'Maksymalna liczba uczestników powinna być pomiędzy 2 a 20'
      ],
      errorMessage: "",
      show: false,
      dialog: false,
    };
  },
  components: {
    DatePicker,
  },
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
    ...mapActions(["addMeeting", "getCategories"]),
    addMeeting() {
      console.log(this.categories);
/*      if (this.checkProperties(this.meetingData)) {
        this.addMeeting(this.meetingData).then((response) => {
          if (response.status === "200") {
            this.dialog = false;
          } else if (response.status === "403") {
            this.logout();
            this.resetState();
            this.$router.push({name: "Auth"});
          } else {
            this.errorMessage = "Upewnij się, że wprowadzone dane są prawidłowe.";
          }
        });
      } else {
        this.errorMessage = "Uzupełnij wszystkie pola";
      }*/
    },
    checkProperties(obj) {
      for (const property in obj) {
        if (obj[property] !== null && obj[property] !== "")
          return false;
      }
      return true;
    }
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>