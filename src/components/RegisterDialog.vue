<template v-if="dialog==true">
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn x-large color="secondary" v-bind="attrs" v-on="on"
          >Zarejstruj się</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Zarejstruj się</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nazwa użytkownika*"
                  v-model="registerData.username"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Hasło*"
                  v-model="passwordsToCheck.password"
                  required
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Powtórzone hasło*"
                  v-model="passwordsToCheck.repeatedPassword"
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
          <v-btn color="secondary" text @click="dialog = false">Zamknij</v-btn>
          <v-btn color="secondary" text @click="registerUser()"
            >Założ konto</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      registerData: {
        username: "",
        password: "",
      },
      passwordsToCheck: {
        password: "",
        repeatedPassword: "",
      },
      show: false,
      dialog: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    ...mapGetters(["isAuthenticated"]),
    registerUser() {
      if (
        this.registerData.username &&
        this.passwordsToCheck.password &&
        this.passwordsToCheck.repeatedPassword
      ) {
        if (
          this.passwordsToCheck.password ===
          this.passwordsToCheck.repeatedPassword
        ) {
          this.registerData.password = this.passwordsToCheck.password;
          this.register(this.registerData).then((response) => {
            console.log(response);
            if (response.status == "201") {
              this.dialog = false;
              this.$router.push({ name: "RegisterData" });
              this.errorMessage = "";
              console.log();
            } else if (response.status == "400") {
              this.errorMessage = "Użytkownik o takiej nazwie już istnieje";
            } else {
              this.errorMessage = "Błąd";
            }
          });
        } else {
          this.errorMessage = "Hasła nie są zgodne";
        }
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