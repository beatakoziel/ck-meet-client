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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    PersonalData,
  },
  methods: {
    ...mapActions(["status", "registerPersonalData"]),
    realizeFirstStep() {
      this.registerPersonalData().then( () => {
        this.status();
      });
    },
  },
  mounted() {
    this.status();
  },
  computed: {
    ...mapState({
      registrationStatus: (state) => state.peopleStore.status,
      step: (state) => state.peopleStore.step,
    }),
  },
};
</script>
<style scoped>
.container {
  max-width: 500px;
}
</style>