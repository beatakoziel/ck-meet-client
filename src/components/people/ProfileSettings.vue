<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title class="light-color">Ustawienia konta</v-toolbar-title>
    </v-toolbar>
    <v-tabs fixed-tabs>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Dane osobowe
      </v-tab>
      <v-tab>
        <v-icon left> mdi-lock </v-icon>
        Personalizacja
      </v-tab>
      <v-tab>
        <v-icon left> mdi-camera </v-icon>
        Zdjęcie profilowe
      </v-tab>
      <v-tab>
        <v-icon left> mdi-security </v-icon>
        Bezpieczeństwo
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container>
              <PersonalData />
              <v-btn
                class="mt-5 mb-5"
                color="primary"
                @click="updatePersonalData()"
              >
                Zatwierdź
              </v-btn>
            </v-container>
          </v-card-text>
          <v-spacer></v-spacer>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container>
              <Personalization />
              <v-btn
                class="mt-5 mb-5"
                color="primary"
                @click="updatePersonalizationData()"
              >
                Zatwierdź
              </v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container>
              <ImagePicker />
              <v-btn
                class="mt-5 mb-5"
                color="primary"
                @click="updateProfileImage()"
              >
                Zatwierdź
              </v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container>
              <p>Zmiana hasła</p>
              <p>Zamknięcie konta</p>
              <v-btn
                class="mt-5 mb-5"
                color="primary"
                @click="updatePassword()"
              >
                Zatwierdź
              </v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import PersonalData from "./PersonalData";
import Personalization from "./Personalization";
import ImagePicker from "../common/ImagePicker";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    PersonalData,
    Personalization,
    ImagePicker,
  },
  methods: {
    ...mapActions(["currentUser"]),
  },
  mounted() {
    this.currentUser();
  },
};
</script>
<style scoped>
.light-color {
  color: white;
}
</style>