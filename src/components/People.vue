<template>
  <div>
    <v-container>
      <v-flex row justify-center ml-0>
        <div class="display-1">Poznawaj osoby z Twojego miasta i okolicy.</div>
      </v-flex>
      <v-flex row justify-center ml-0>
        <p class="body-1">Przeglądaj profile, a jeśli chcesz się z kimś poznać - pomachaj!</p>
      </v-flex>
    </v-container>
    <v-flex row justify-center ml-0>
      <PersonCard v-for="user in people" :key="user.id" :userData="user" />
      <PersonCard v-for="user in people" :key="user.id" :userData="user" />
    </v-flex>
  </div>
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
