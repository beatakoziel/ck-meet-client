<template>
  <v-card>
    <v-flex row justify-center mt-10>
      <v-card mr-0 color="card" class="meeting-card">
        <v-img
          v-if="currentMeeting.cover == null"
          height="250px"
          width="250px"
          src="../../assets/default-image.png"
        />
        <v-img
          v-else
          height="250px"
          width="250px"
          :src="getImgUrl()"
        />
        <hr class="horizontal-line" />
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
                  >mdi-calendar-blank-outline</v-icon
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
                  >mdi-label-outline</v-icon
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
        <v-container>
          <v-toolbar>
            <v-icon color="primary" large>mdi-information-outline</v-icon>
            <span>
              Aby móc wziąć udział w wydarzeniu i zobaczyć komentarze
              uczestników Ty oraz założyciel wydarzenia musicie się zapoznać.
            </span>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-container>
      </v-container>
    </v-flex>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    ageString: "",
  }),
  methods: {
    getImgUrl() {
      return require('../../assets/categories/'+this.currentMeeting.category.key +'.jpg');
    },
  },
  computed: {
    ...mapState({
      currentMeeting: (state) => state.meetingsStore.currentMeeting,
    }),
  },
  mounted() {},
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

.font {
  font-size: 17px;
}

a {
  text-decoration: none;
}

.horizontal-line {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 250px;
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