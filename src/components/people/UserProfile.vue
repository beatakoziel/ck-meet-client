<template>
  <v-card>
    <v-flex row justify-center mt-10>
      <v-container ml-0 mr-0>
        <v-img
          v-if="currentUser.avatarBytes == null"
          height="250px"
          width="250px"
          src="../../assets/default-image.png"
        />
        <v-img
          v-else
          height="250px"
          width="250px"
          :src="'data:image/jpeg;base64,' + currentUser.avatarBytes"
        />
        <hr class="horizontal-line" />
        <p class="display-1 picture-text" mt-5>
          {{ currentUser.nickname }}, {{ currentUser.age }} {{ ageString }}
          <v-tooltip v-if="currentUser.gender == 'WOMAN'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-female</v-icon>
            </template>
            <span>Kobieta</span>
          </v-tooltip>
          <v-tooltip v-if="currentUser.gender == 'MAN'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-male</v-icon>
            </template>
            <span>Mężczyzna</span>
          </v-tooltip>
        </p>
      </v-container>
      <v-container ml-0 mr-0>
        <p class="title">Zainteresowania</p>
        <p class="display-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-translate</v-icon>
            </template>
            <span>Języki obce</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-earth</v-icon>
            </template>
            <span>Podróże</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-car</v-icon>
            </template>
            <span>Motoryzacja</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large
                >mdi-palette-outline</v-icon
              >
            </template>
            <span>Sztuka</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-chef-hat</v-icon>
            </template>
            <span>Gotowanie</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-playlist-music</v-icon>
            </template>
            <span>Muzyka</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-dance-ballroom</v-icon>
            </template>
            <span>Taniec</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-dumbbell</v-icon>
            </template>
            <span>Siłownia</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-bike</v-icon>
            </template>
            <span>Przejażdżki rowerowe</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-hiking</v-icon>
            </template>
            <span>Wędrówki górskie</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large
                >mdi-cards-playing-outline</v-icon
              >
            </template>
            <span>Gry karciane i planszówki</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large
                >mdi-movie-open-outline</v-icon
              >
            </template>
            <span>Filmy</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-party-popper</v-icon>
            </template>
            <span>Imprezy</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large
                >mdi-gamepad-variant-outline</v-icon
              >
            </template>
            <span>Gry komputerowe</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-walk</v-icon>
            </template>
            <span>Spacery</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-drama-masks</v-icon>
            </template>
            <span>Teatr i komedia</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-soccer</v-icon>
            </template>
            <span>Gry zespołowe</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large
                >mdi-book-open-page-variant-outline</v-icon
              >
            </template>
            <span>Czytanie</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-snowboard</v-icon>
            </template>
            <span>Sporty zimowe</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template >
              <v-icon v-bind="attrs" v-on="on" large>mdi-swim</v-icon>
            </template>
            <span>Sporty wodne</span>
          </v-tooltip>
        </p>
        <p class="title">Opis</p>
        <p>{{ currentUser.description }}</p>
        <v-container class="hello-container" ml-0 mr-0 pl-0 pr-0>
          <v-btn>
            Przywitaj się
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="margin-icon" v-bind="attrs" v-on="on"
                  >mdi-hand-right</v-icon
                >
              </template>
              <span>Przybij piątkę!</span>
            </v-tooltip>
          </v-btn>
          <p class="caption info-caption">
            Jeżeli Ty i ten użytkownik przybijecie sobie piątki wówczas zostanie
            odblokowana możliwość skontaktowania się ze sobą.
          </p>
        </v-container>
      </v-container>
    </v-flex>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    ageString: "",
  }),
  methods: {
    setAgeString() {
      var lastDigit = this.currentUser.age % 10;
      var checkList = [0, 1, 5, 6, 7, 8, 9];
      if (checkList.indexOf(lastDigit) > -1) this.ageString = "lat";
      else this.ageString = "lata";
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.peopleStore.currentUser,
    }),
  },
  mounted() {
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

.container {
  max-width: 500px;
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
  width: 250px;
}
</style>