<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        Dane osobowe
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">
        Personalizacja
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Zdjęcie profilowe </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="pl-5">
          <PersonalData />
        </v-card>

        <v-btn class="mt-5" color="primary" @click="realizeFirstStep()">
          Zatwierdź
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="pl-5">
          <Personalization />
        </v-card>

        <v-btn class="mt-5" color="primary" @click="realizeSecondStep()">
          Zatwierdź
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="pl-5">
          <ImagePicker />
        </v-card>

        <v-btn class="mt-5" color="primary" @click="realizeThirdStep()">
          Zatwierdź
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import PersonalData from "./PersonalData";
import Personalization from "./Personalization";
import ImagePicker from "./ImagePicker";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    PersonalData,
    Personalization,
    ImagePicker,
  },
  methods: {
    ...mapActions([
      "status",
      "registerPersonalData",
      "registerPersonalizationData",
      "uploadImage",
      "currentUser",
    ]),
    realizeFirstStep() {
      this.registerPersonalData().then(() => {
        this.status();
      });
    },
    realizeSecondStep() {
      this.registerPersonalizationData().then(() => {
        this.status();
      });
    },
    realizeThirdStep() {
      this.uploadImage().then(() => {
        this.status();
        this.$router.push({ name: "People" });
      });
    },
  },
  mounted() {},
  computed: {
    ...mapState({
      registrationStatus: (state) => state.authStore.status,
      step: (state) => state.authStore.step,
    }),
  },
};
</script>
<style scoped>
.container {
  max-width: 500px;
}
</style>