<template>
  <div>
    <v-container v-if="!friends.length">
      <v-icon color="primary" large>mdi-information-outline</v-icon> Brak
    </v-container>
    <v-flex row justify-center ml-0>
      <PersonCard v-for="user in friends" :key="user.id" :userData="user" />
    </v-flex>
  </div>
</template>

<script>
import {mapState} from "vuex";
import PersonCard from "@/components/people/PersonCard";

export default {
  methods: {
  },
  computed: {
    ...mapState({
      people: (state) => state.peopleStore.people,
    }),
    friends() {
      return this.people.filter( (el) => {
        return el.status != null && el.status === 'BOTH_SAID_HELLO';
      });
    }
  },
  created() {
  }, components: {
    PersonCard
  }
}
</script>

<style scoped>

</style>