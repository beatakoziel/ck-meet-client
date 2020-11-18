<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed x-large color="accent" v-bind="attrs" v-on="on"
          >Zaloguj się</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Zaloguj się</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nazwa użytkownika*"
                  v-model="loginData.username"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Hasło*"
                  v-model="loginData.password"
                  required
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12"></v-col>
            </v-row>
            <small class="error-message">{{ errorMessage }}</small>
          </v-container>
          <small>* wskazuje wymagane pole</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="accent" text @click="dialog = false">Zamknij</v-btn>
          <v-btn color="accent" text @click="loginUser()">Zaloguj się</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      errorMessage: "",
      show: false,
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["login", "test"]),
    loginUser() {
      if (this.loginData.username && this.loginData.password) {
        this.test();
        this.login(this.loginData).then((response) => {
          if (response.status == "200") {
            this.dialog = false;
            this.$router.push({ name: "People" });
            this.errorMessage = "";
          } else if (response.status == "403") {
            this.errorMessage = "Nieprawidłowy login lub hasło";
          } else {
            this.errorMessage = "Błąd";
          }
        });
      } else {
        this.errorMessage = "Uzupełnij wszystkie pola";
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>