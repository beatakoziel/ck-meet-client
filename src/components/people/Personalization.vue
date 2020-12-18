<template>
  <v-flex row wrap>
    <v-container body-1 ml-16>Twoje zainteresowania</v-container>
    <v-flex row wrap ml-1>
      <v-container
          v-for="(chunk, idx) in interestsChunks"
          :key="idx"
          class="interests-container"
          ml-2
          mr-2
      >
        <v-checkbox
            class="margin-checkbox"
            mr-6
            v-for="interest in chunk"
            :key="interest.key"
            v-model="personalizationData.interests"
            :value="interest"
            :label="interest.value"
        ></v-checkbox>
      </v-container>
    </v-flex>
    <v-container body-1 ml-16>Płeć osoby, którą chcesz poznać</v-container>
    <v-flex column wrap ml-6 class="interests-container">
      <v-checkbox
          class="margin-checkbox"
          mr-6
          v-model="personalizationData.preferredGenderToMeet"
          value="FEMALE"
          label="Kobieta"
      ></v-checkbox>
      <v-checkbox
          class="margin-checkbox"
          mr-6
          v-model="personalizationData.preferredGenderToMeet"
          value="MALE"
          label="Mężczyzna"
      ></v-checkbox>
    </v-flex>
    <v-container body-1 ml-16 mr-16
    >Wiek osoby, którą chcesz poznać
    </v-container
    >
    <v-container ml-0 mr-16 class="age-container">
      <v-card
          flat
          color="transparent"
      >
        <v-card-text>
          <v-text-field
              type="number"
              v-model="personalizationData.preferredAgeToMeetFrom"
              style="width: 150px;"
              :rules="[(v) => !!v || 'Pole wymagane']"
              label="Minimalny wiek"
              required
          ></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-text-field
              type="number"
              v-model="personalizationData.preferredAgeToMeetTo"
              style="width: 150px;"
              :rules="[(v) => !!v || 'Pole wymagane']"
              label="Maksymalny wiek"
              required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-container>
  </v-flex>
</template>

<script>
import {mapState, mapActions} from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      min: 18,
      max: 80,
      range: [18, 80],
      selectedInterests: [],
      selectedGenders: [],
    };
  },
  computed: {
    ...mapState({
      interests: (state) => state.infoStore.interests,
      personalizationData: (state) => state.peopleStore.personalizationData,
    }),
    interestsChunks() {
      return _.chunk(Object.values(this.interests), 4);
    },
  },
  methods: {
    ...mapActions(["getInterests"]),
  },
  mounted() {
    this.getInterests();
  },
};
</script>
<style scoped>
.interests-container {
  max-width: 250px;
}

.age-container {
  max-width: 600px;
}

.margin-checkbox {
  margin-right: 10px;
  margin-top: 0px;
}
</style>