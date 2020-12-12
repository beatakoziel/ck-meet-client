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
    <v-flex mt-5 justify-center>
        <AddMeetingDialog/>
        <FilterMeetings/>
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
import {mapState, mapActions} from "vuex";
import FilterMeetings from "@/components/meetings/FilterMeetings";

export default {
  name: "App",
  components: {
    FilterMeetings,
    MeetingCard,
    AddMeetingDialog
  },

  data: () => ({}),
  methods: {
    ...mapActions(["getMeetings", "currentUser"]),
  },
  computed: {
    ...mapState({
      meetings: (state) => state.meetingsStore.meetings,
      currentLoggedUser: (state) => state.peopleStore.currentLoggedUser,
    }),
  },
  created() {
    this.currentUser();
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
