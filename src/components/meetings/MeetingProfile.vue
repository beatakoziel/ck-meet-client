<template>
  <v-card>
    <v-flex row justify-center mt-10>
      <v-card mr-0 color="card" class="ml-10 meeting-card">
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
        <v-container v-if="!isAfterMeeting && isFriendsWithHost && !willExceedMaxNumOfParticipants">
          <ParticipateDialog/>
          <CancelParticipationDialog/>
        </v-container>
        <v-container v-if="isAfterMeeting">
          <p>
            <v-icon color="error" large>mdi-information-outline</v-icon>
          </p>
          Przykro nam, ale to wydarzenie już się odbyło.
        </v-container>
        <v-container v-else-if="willExceedMaxNumOfParticipants">
          <p>
            <v-icon color="error" large>mdi-information-outline</v-icon>
          </p>
          Przykro nam, ale to wydarzenie ma już maksymalną liczbę uczestników.
        </v-container>
        <v-container v-else>
          <p>
            <v-icon color="accent" large>mdi-information-outline</v-icon>
          </p>
          Aby móc wziąć udział w wydarzeniu musisz mieć inicjatora spotkania w znajomych. Wejdź w profil gospodarza i
          kliknij 'Przywitaj się!'.
        </v-container>
        <div v-if="isParticipant()">
          <p class="title">Organizator wydarzenia</p>
          <div>
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
          </div>
          <p v-if="currentMeeting.host.id===currentLoggedUser.id" style="font-size: 20px">
            Ty
          </p>
          <p v-else style="font-size: 20px">
            {{ currentMeeting.host.nickname }}
          </p>
          <p class="title">Uczestnicy wydarzenia</p>
          <v-container v-if="!currentMeeting.participants.length">
            <v-icon large>mdi-information-outline</v-icon>
            Brak
          </v-container>
          <v-container v-else v-for="participant in participantsList" :key="participant.id">
            <v-img
                v-if="participant.avatarBytes == null"
                height="50px"
                width="50px"
                src="../../assets/default-image.png"
            />
            <v-img
                v-else
                height="50px"
                width="50px"
                :src="'data:image/jpeg;base64,' + participant.avatarBytes"
            />
            {{ participant.nickname }}, {{ participant.ageWithString }}
          </v-container>
        </div>
      </v-card>
      <v-container v-if="isParticipant()" color="primary" class=" ml-16 mr-0 meeting-card">
        <v-card-title>Dyskusja</v-card-title>
        <!--            v-model="personalData.description"-->
        <v-textarea
            label="Komentarz"
            :counter="500"
            v-model="content"
            prepend-icon="mdi-comment-outline">
        </v-textarea>
        <v-card-actions>
          <v-flex row justify-end>
            <v-btn outlined color="primary" @click="addNewComment()"> Dodaj</v-btn>
          </v-flex>
        </v-card-actions>
        <v-container v-if="!currentMeeting.comments.length">
          <v-icon color="primary" large>mdi-information-outline</v-icon>
          Brak komentarzy
        </v-container>
        <v-container fluid v-else>
          <v-card color="card" v-for="comment in currentMeeting.comments" :key="comment.id">
            <v-row>
              <v-avatar class="ml-5 mt-3">
                <v-img
                    v-if="comment.commentator.avatarBytes == null"
                    src="../../assets/default-image.png"
                />
                <v-img
                    v-else
                    :src="'data:image/jpeg;base64,' + comment.commentator.avatarBytes"
                />
              </v-avatar>
              <p class="ml-5 mt-5" style=""><b>{{ comment.commentator.nickname }}</b></p>
              <v-card-actions v-if="currentLoggedUser.id == comment.commentator.id" class="ml-8">
                <v-flex row justify-end>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteThisComment(comment.id)" icon>
                        <v-icon outlined color="primary" v-bind="attrs" v-on="on">mdi-delete-outline</v-icon>
                      </v-btn>
                    </template>
                    Usuń komentarz
                  </v-tooltip>
                </v-flex>

              </v-card-actions>
            </v-row>
            <v-card class="mx-5">
              <p class="mx-3 my-3 py-3">{{ comment.content }}</p>
            </v-card>
          </v-card>
        </v-container>
      </v-container>
      <v-card color="primary" class=" ml-16 mr-16 ">
        <v-container v-if="currentMeeting.host.id===currentLoggedUser.id" ml-6>
          <v-flex mt-5 mb-5 row justify-center>
            <EditMeetingDialog :current-meeting="currentMeeting"/>
            <DeleteMeetingDialog class="ml-3" :meeting-id="currentMeeting.id" :meeting-name="currentMeeting.name"/>
          </v-flex>
          <hr/>
          <v-spacer></v-spacer>
        </v-container>
        <v-container v-if="!isParticipant()" ml-8>
          <p class="title">Organizator wydarzenia</p>
          <div>
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
          </div>
          <p v-if="currentMeeting.host.id===currentLoggedUser.id" style="font-size: 20px">
            Ty
          </p>
          <p v-else style="font-size: 20px">
            {{ currentMeeting.host.nickname }}
          </p>
          <p class="title">Uczestnicy wydarzenia</p>
          <v-container v-if="!currentMeeting.participants.length">
            <v-icon large>mdi-information-outline</v-icon>
            Brak
          </v-container>
          <v-container v-else v-for="participant in participantsList" :key="participant.id">
            <v-img
                v-if="participant.avatarBytes == null"
                height="50px"
                width="50px"
                src="../../assets/default-image.png"
            />
            <v-img
                v-else
                height="50px"
                width="50px"
                :src="'data:image/jpeg;base64,' + participant.avatarBytes"
            />
            {{ participant.nickname }}, {{ participant.ageWithString }}
          </v-container>
        </v-container>
      </v-card>
    </v-flex>
  </v-card>
</template>

<script>
import {mapState, mapActions} from "vuex";
import EditMeetingDialog from "@/components/meetings/EditMeetingDialog";
import DeleteMeetingDialog from "@/components/meetings/DeleteMeetingDialog";
import ParticipateDialog from "@/components/meetings/ParticipateDialog";
import CancelParticipationDialog from "@/components/meetings/CancelParticipationDialog";

export default {
  data: () => ({
    content: "",
    ageString: "",
    participantsList: [],
    participantData: {
      id: null,
      username: "",
      nickname: "",
      avatarBytes: null,
      ageWithString: ""
    }
  }),
  methods: {
    ...mapActions(['addComment', 'deleteComment']),
    getImgUrl() {
      return require('../../assets/categories/' + this.currentMeeting.category.key + '.jpg');
    },
    getParticipantsList() {
      this.currentMeeting.participants.forEach((value) => {
        let result = this.people.filter(obj => {
          return obj.id === value.id
        })[0];
        var lastDigit = result.age % 10;
        var checkList = [0, 1, 5, 6, 7, 8, 9];
        if (checkList.indexOf(lastDigit) > -1) this.ageString = "lat";
        else this.ageString = "lata";
        let obj = {
          id: result.id,
          username: result.username,
          nickname: result.nickname,
          avatarBytes: result.avatarBytes,
          ageWithString: result.age + " " + this.ageString
        }
        this.participantsList.push(obj);
      });
    },
    isParticipant() {
      let found = false;
      for (let i = 0; i < this.participantsList.length; i++) {
        if ((this.participantsList[i].id === this.currentLoggedUser.id)) {
          found = true;
          break;
        }
      }
      return found;
    },
    addNewComment() {
      this.addComment({meetingId: this.currentMeeting.id, content: this.content}).then(() => {
        this.content = "";
      });
    },
    deleteThisComment(commentId) {
      this.deleteComment({meetingId: this.currentMeeting.id, commentId: commentId}).then(() => {
        console.log("UDAO")
      });
    },
  },
  components: {
    EditMeetingDialog,
    DeleteMeetingDialog,
    ParticipateDialog,
    CancelParticipationDialog
  },
  computed: {
    ...mapState({
      currentMeeting: (state) => state.meetingsStore.currentMeeting,
      currentLoggedUser: (state) => state.peopleStore.currentLoggedUser,
      people: (state) => state.peopleStore.people,
      relationships: (state) => state.relationshipStore.relationships
    }),
    isFriendsWithHost() {
      let found = false;
      for (let i = 0; i < this.relationships.length; i++) {
        if ((this.relationships[i].userToWhoSaidHello == this.currentMeeting.host.id) &&
            this.relationships[i].status == "BOTH_SAID_HELLO") {
          found = true;
          break;
        }
      }
      return found;
    },
    willExceedMaxNumOfParticipants() {
      if (this.currentMeeting.maxNumOfParticipants >= (this.currentMeeting.participants.length + 2))
        return false;
      else return true;
    },
    isAfterMeeting() {
      if (this.currentMeeting.date != null) {
        return new Date(this.currentMeeting.date).valueOf() < new Date().valueOf();
      } else return false;

    }
  },
  mounted() {
    this.getParticipantsList();
  }
  ,
}
;
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
  width: 350px;
}

.meeting-card {
  width: 600px;
  padding-left: 40px;
  padding-right: 40px;
}

span {
  margin-left: 10px;
}

.description-title {
  margin-top: 15px;
}

comment {
  margin-left: 10px;
}
</style>