<template>
  <div>
    <v-toolbar>
      <v-icon color="primary" large>mdi-information-outline</v-icon>
      <span>
        Jeśli chcesz gdzieś się z kimś wybrać utwórz spotkanie lub dołącz do już
        istniejącego.
      </span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-flex row justify-center ml-0>
      <MeetingCard />
    </v-flex>
  </div>
</template>

<script>
import MeetingCard from "./MeetingCard";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    MeetingCard,
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
