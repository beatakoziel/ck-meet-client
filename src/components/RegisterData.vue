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
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="step = 3"> Kontynuuj </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="step = 1"> Kontynuuj </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import PersonalData from "./PersonalData";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      step: 1,
    };
  },
  components: {
    PersonalData,
  },
  methods: {
    ...mapActions(["status", "registerPersonalData"]),
    realizeFirstStep() {
      this.registerPersonalData();
      this.step = 2;
    },
  },
  mounted() {
    var status = this.status();
    if (status == "NOT_COMPLETED") this.step = 1;
    else if (status == "PERSONAL_DATA") this.step = 2;
    else if (status == "PERSONALIZE") this.step = 3;
  },
};
</script>
<style scoped>
.container {
  max-width: 500px;
}
</style>