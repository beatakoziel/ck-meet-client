<template>
  <v-flex row wrap>
    <v-container body-1 ml-16>Twoje zainteresowania</v-container>
    <v-flex row wrap ml-6>
      <v-container
        v-for="chunk in interestsChunks"
        :key="chunk"
        class="interests-container"
        ml-2
        mr-2
      >
        <v-checkbox
          class="margin-checkbox"
          mr-6
          v-for="interest in chunk"
          :key="interest.key"
          v-model="selectedInterests"
          :value="interest.key"
          :label="interest.value"
        ></v-checkbox>
      </v-container>
    </v-flex>
    <v-flex row wrap ml-6>
      <v-container body-1 ml-16>Płeć osoby, którą chcesz poznać</v-container>
      <v-flex column wrap ml-6 class="interests-container">
        <v-checkbox
          class="margin-checkbox"
          mr-6
          v-model="selectedGenders"
          value="FEMALE"
          label="Kobieta"
        ></v-checkbox>
        <v-checkbox
          class="margin-checkbox"
          mr-6
          v-model="selectedGenders"
          value="MALE"
          label="Mężczyzna"
        ></v-checkbox>
      </v-flex>
    </v-flex>
    <v-flex row ml-6 wrap>
      <v-container body-1 ml-16 mr-16
        >Wiek osoby, którą chcesz poznać</v-container
      >
      <v-container ml-0 mr-16 class="age-container">
        <AgeRangeSlider />
      </v-container>
    </v-flex>
  </v-flex>
</template>

<script>
import AgeRangeSlider from "./AgeRangeSlider";
import { mapState, mapActions } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      selectedInterests: [],
      selectedGenders: [],
    };
  },
  computed: {
    ...mapState({
      interests: (state) => state.infoStore.interests,
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
    console.log(this.interests);
  },
  components: {
    AgeRangeSlider,
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