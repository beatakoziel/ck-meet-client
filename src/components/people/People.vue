<template>
  <div>
    <v-container>
      <v-flex row justify-center ml-0 mt-10>
        <div class="display-1">
          Zyskaj nowych znajomych z Twojego miasta i okolicy.
        </div>
      </v-flex>
      <v-flex row justify-center ml-0 mb-5>
        <p class="body-1">
          Przeglądaj profile, szukaj wspólnych zainteresowań.
        </p>
      </v-flex>
    </v-container>
    <v-toolbar>
      <v-icon color="primary" large>mdi-information-outline</v-icon>
      <span>
        Jeśli chcesz się z kimś zapoznać wejdź w szczegóły profilu i przywitaj
        się!
      </span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-flex row justify-center ml-0>
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
    PersonCard,
  },

  data: () => ({}),
  methods: {
    ...mapActions(["getPeople"]),
  },
  computed: {
    ...mapState({
      people: (state) => state.peopleStore.people,
    }),
  },
  created() {
    this.getPeople();
  },
};
</script>
<style scoped>
span {
  margin-left: 5px;
}
header {
  margin-top: 20px;
}
</style>