<template>
  <v-row>
    <v-btn color="error" class="ml-3" @click.stop="dialog = true">
      Zamknij konto
    </v-btn>


    <v-dialog
        v-model="dialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class=" headline justify-center">
          <p>Czy na pewno chcesz zamknąć konto?</p>
        </v-card-title>
        <v-card-text>
          <p>Po zatwierdzeniu nastąpi zamknięcie konta i przeniesienie na stronę logowania.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="secondary"
              text
              @click="dialog = false"
          >
            OK
          </v-btn>
          <v-btn
              color="error"
              text
              @click="deleteLoggedUserAccount()"
          >
            Zamknij konto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import {mapActions, mapMutations, mapState} from "vuex";
import VueNotifications from "vue-notifications";

export default {
  data() {
    return {
      dialog: false,
      status: null
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Sukces',
      message: 'Konto zostało zamknięte poprawnie!'
    }
  },
  methods: {
    ...mapActions(["deleteAccount"]),
    ...mapMutations(["logout"]),
    deleteLoggedUserAccount() {
      this.deleteAccount()
          .then((response) => {
            if(response.status=='200') {
              this.logout();
              this.registrationStatus = null;
              this.$router.push({ name: "Auth" });
              this.showSuccessMsg();
            }
          });
      this.dialog = false;
    },

  },

  computed: {
    ...mapState({
      registrationStatus: (state) => state.authStore.registrationStatus,
    })
  }
}
</script>