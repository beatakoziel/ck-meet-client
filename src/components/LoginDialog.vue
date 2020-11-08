<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed x-large color="accent" v-bind="attrs" v-on="on">Zaloguj się</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Zaloguj się</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nazwa użytkownika*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Hasło*"
                  required
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12"></v-col>
            </v-row>
          </v-container>
          <small>* wskazuje wymagane pole</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="accent" text @click="dialog = false">Zamknij</v-btn>
          <v-btn color="accent" text @click="dialog = false">Zaloguj się</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      dialog: false
    };
  }
};
</script>