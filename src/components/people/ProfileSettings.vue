<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title class="light-color">Ustawienia konta</v-toolbar-title>
    </v-toolbar>
    <v-tabs fixed-tabs>
      <v-tab>
        <v-icon left> mdi-account</v-icon>
        Dane osobowe
      </v-tab>
      <v-tab>
        <v-icon left> mdi-lock</v-icon>
        Personalizacja
      </v-tab>
      <v-tab>
        <v-icon left> mdi-camera</v-icon>
        Zdjęcie profilowe
      </v-tab>
      <v-tab>
        <v-icon left> mdi-security</v-icon>
        Bezpieczeństwo
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container>
              <PersonalData/>
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
              <Personalization/>
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
              <ImagePicker/>
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
              <template>
                <v-tabs vertical color="error">
                  <v-tab>Zmiana hasła</v-tab>
                  <v-tab>Zamknięcie konta</v-tab>
                  <v-tab-item>
                    <v-card class="ml-10" flat>
                      <v-card-title class="ml-10">
                        <p>Wprowadź nowe hasło, a następnie zatwierdź</p>
                      </v-card-title>
                      <v-card-text>
                        <v-layout style="max-width: 400px; margin-left: 30px;">
                          <v-col cols="12">
                            <v-text-field
                                label="Hasło*"

                                required
                                :type="show ? 'text' : 'password'"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show = !show"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                                label="Powtórzone hasło*"

                                required
                                :type="show ? 'text' : 'password'"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show = !show"
                            ></v-text-field>
                          </v-col>
                        </v-layout>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn class=" ml-10 mt-5" color="error">
                          Zmień hasło
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card class="ml-10" flat>
                      <v-card-title>
                        <p>Jeżeli chcesz zamknąć konto kliknij przycisk poniżej.</p>
                      </v-card-title>
                      <v-card-subtitle>Konta nie będzie można przywrócić.</v-card-subtitle>
                      <v-card-actions>
         <DeleteAccountDialog/>
                      </v-card-actions>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </template>
              <!--              <p>Zmiana hasła</p>
                            <p>Zamknięcie konta</p>
                            <v-btn
                              class="mt-5 mb-5"
                              color="primary"
                              @click="updatePassword()"
                            >
                              Zatwierdź
                            </v-btn>-->
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
import DeleteAccountDialog from "@/components/people/DeleteAccountDialog";
import {mapActions} from "vuex";

export default {
  name: "App",
  data: () => ({
    show:false
  }),
  components: {
    PersonalData,
    Personalization,
    ImagePicker,
    DeleteAccountDialog
  },
  methods: {
    ...mapActions(["currentUser", "registerPersonalData", "registerPersonalizationData", "uploadImage"]),
    updatePersonalData() {
      this.registerPersonalData().then(() => {
        this.status();
      });
    },
    updatePersonalizationData() {
      this.registerPersonalData().then(() => {
        this.status();
      });
    }
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