<template>
  <v-card>
    <v-flex row justify-center mt-10>
      <v-card mr-0 color="card" class="meeting-card">
        <v-img

            height="350px"
            width="350px"
            :src="getImgUrl()"
        />
        <hr class="horizontal-line"/>
        <p class="display-1 picture-text" mt-5>
          {{ currentMeeting.name }}
        </p>
        <div class="d-flex column flex-no-wrap">
          <div class="d-flex flex-no-wrap">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" large>mdi-account-multiple-outline</v-icon>
              </template>
              <span>Max liczba uczestników</span>
            </v-tooltip>
            <span class="participants-num">
              {{ currentMeeting.maxNumOfParticipants }}
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
            <span v-if="currentMeeting.date != null" class="participants-num">{{
                currentMeeting.date
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
            <span class="participants-num">{{ currentMeeting.category.value }}</span>
          </div>
        </div>
        <p class="title description-title">Opis</p>
        <p class="font">{{ currentMeeting.description }}</p>
      </v-card>
      <v-container ml-6 mr-0>
        <v-container  v-if="currentMeeting.host.id===currentLoggedUser.id" ml-6>
<!--          <hr/>-->
            <v-flex mt-5 mb-5 row justify-center>
              <v-btn class="ml-2" outlined color="primary">Edytuj</v-btn>
              <v-btn class="ml-3"  outlined color="secondary">Usuń</v-btn>
            </v-flex>
          <hr/>
            <v-spacer></v-spacer>
        </v-container>
        <v-container ml-8>
          <p class="title">Organizator wydarzenia</p>
          <v-img
              v-if="currentMeeting.host.avatarBytes == null"
              height="150px"
              width="150px"
              src="../../assets/default-image.png"
          />
          <v-img
              v-else
              height="150px"
              width="150px"
              :src="'data:image/jpeg;base64,' + currentMeeting.host.avatarBytes"
          />
          <p style="font-size: 20px">
            {{ currentMeeting.host.nickname }}
          </p>
        </v-container>

      </v-container>
    </v-flex>
  </v-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  data: () => ({
    ageString: "",
  }),
  methods: {
    getImgUrl() {
      return require('../../assets/categories/' + this.currentMeeting.category.key + '.jpg');
    },
  },
  computed: {
    ...mapState({
      currentMeeting: (state) => state.meetingsStore.currentMeeting,
      currentLoggedUser: (state) => state.peopleStore.currentLoggedUser,
    }),
  },
  mounted() {
  },
};
</script>
<style scoped>
.container {
  max-width: 40vw;
}

i {
  margin-top: 5px;
}

.participants-num {
  margin-left: 10px;
  font-size: 20px;
  margin-top: 10px;
}

.font {
  font-size: 17px;
}

a {
  text-decoration: none;
}

.horizontal-line {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
}

.meeting-card {
  max-width: 600px;
  padding-left: 40px;
  padding-right: 40px;
}

span {
  margin-left: 10px;
}

.description-title {
  margin-top: 15px;
}
</style>