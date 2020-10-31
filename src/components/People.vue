<template>
  <v-container>
    <p class="display-1">Poznawaj osoby z Twojego miasta i okolicy.</p>
    <p class="body-1">Przeglądaj profile, a jeśli chcesz się z kimś poznać - pomachaj!</p>
    <v-flex row justify-start wrap>
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </v-flex>
  </v-container>
</template>

<script>
import PersonCard from "./PersonCard";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    PersonCard
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getPeople"])
  },
  mounted() {
    this.getPeople();
  }
};
</script>
