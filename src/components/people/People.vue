<template>
  <div>
    <v-container>
      <v-flex row justify-center ml-0 mt-10>
        <div class="display-1">
          Zyskaj nowych znajomych z Twojego miasta i okolicy.
        </div>
      </v-flex>
<!--      <v-flex row justify-center ml-0 mb-5>
        <p class="body-1">
          Przeglądaj profile, szukaj wspólnych zainteresowań.
        </p>
      </v-flex>-->
    </v-container>
    <v-container>
      <v-flex row justify-center ml-0 mt-10>
        <div style="color: #6199bf;" class="display-1">
          Najlepsze dopasowania
        </div>

      </v-flex>
    </v-container>
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
    ...mapActions(["getPeople", "getRelationships"]),
  },
  computed: {
    ...mapState({
      people: (state) => state.peopleStore.people,
    }),
  },
  created() {
    this.getPeople();
    this.getRelationships();
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