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
    <v-flex row justify-end mt-6 mr-12>
<AddMeetingDialog/>
      <v-btn class="ma-2" outlined color="secondary">
        <v-icon large>mdi-filter</v-icon>
        Filtruj
      </v-btn>
    </v-flex>
    <v-flex row justify-center ml-0>
      <MeetingCard
        v-for="meeting in meetings"
        :key="meeting.id"
        :meetingData="meeting"
      />
    </v-flex>
  </div>
</template>

<script>
import MeetingCard from "./MeetingCard";
import AddMeetingDialog from "./AddMeetingDialog"
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    MeetingCard,
    AddMeetingDialog
  },

  data: () => ({}),
  methods: {
    ...mapActions(["getMeetings"]),
  },
  computed: {
    ...mapState({
      meetings: (state) => state.meetingsStore.meetings,
    }),
  },
  created() {
    this.getMeetings().then((response) => {
      console.log(response);
    });
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
