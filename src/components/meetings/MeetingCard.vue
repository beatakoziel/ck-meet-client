<template>
  <v-card
      class="mx-auto ml-5 mr-5 my-12"
      min-width="fit-content"
      max-width="40vw"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">{{ meetingData.name }}</v-card-title>
        <v-card-text>
          <div class="d-flex flex-wrap">
            <div class="d-flex flex-no-wrap">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" large>mdi-account-multiple-outline</v-icon>
                </template>
                <span>Max liczba uczestników</span>
              </v-tooltip>
              <span class="participants-num">
                {{ meetingData.maxNumOfParticipants }}
              </span>
            </div>
            <div class="d-flex flex-no-wrap">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon style="margin-left: 15px" v-on="on" large
                  >mdi-calendar-blank-outline
                  </v-icon
                  >
                </template>
                <span>Data spotkania</span>
              </v-tooltip>
              <span v-if="meetingData.date != null" class="participants-num">{{
                  meetingData.date
                }}</span>
              <span v-else class="participants-num">Kiedykolwiek</span>
            </div>
            <div class="d-flex flex-no-wrap">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon style="margin-left: 15px" v-on="on" large
                  >mdi-label-outline
                  </v-icon
                  >
                </template>
                <span>Kategoria</span>
              </v-tooltip>
              <span class="participants-num">{{ meetingData.category.value }}</span>
            </div>
          </div>
        </v-card-text>
        <v-card-text>{{ meetingData.description }}</v-card-text>

        <v-card-actions>
          <router-link
              :to="{ name: 'MeetingProfile', params: { id: meetingData.id } }"
          >
            <v-btn color="accent" text @click="setMeeting">Szczegóły</v-btn>
          </router-link>
        </v-card-actions>
      </div>
        <v-img
            height="250px"
            width="250px"
            :src="getImgUrl()"
        />
    </div>
  </v-card>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  props: ["meetingData"],
  data: () => ({}),
  mounted() {
    console.log(this.meetingData);
  },
  methods: {
    ...mapMutations(["setCurrentViewedMeeting"]),
    setMeeting() {
      this.setCurrentViewedMeeting(this.meetingData);
    },
    getImgUrl() {
      return require('../../assets/categories/'+this.meetingData.category.key +'.jpg');
    },
  },
};
</script>
<style scoped>
i {
  margin-top: 5px;
}

.participants-num {
  margin-left: 10px;
  font-size: 20px;
  margin-top: 10px;
}

a {
  text-decoration: none;
}
</style>