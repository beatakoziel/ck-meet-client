<template>
  <v-layout row ml-5>
    <p class="display-1">Poznawaj osoby z Twojego miasta i okolicy.</p>
    <p class="body-1">Przeglądaj profile, a jeśli chcesz się z kimś poznać - pomachaj!</p>
    <v-flex row justify-start>
      <PersonCard v-for="user in people" :key="user.id" :userData="user" />
      <PersonCard v-for="user in people" :key="user.id" :userData="user" />
    </v-flex>
  </v-layout>
</template>

<script>
import PersonCard from "./PersonCard";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    PersonCard
  },

  data: () => ({}),
  methods: {
    ...mapActions(["getPeople"])
  },
  computed: {
    ...mapState({
      people: state => state.people.people
    })
  },
  created() {
    this.getPeople();
    console.log("ZMIANY");
    console.log(this.people);
  }
};
</script>
