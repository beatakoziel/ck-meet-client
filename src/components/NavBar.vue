<template>
  <v-app-bar
    app
    absolute
    color="grey"
    dark
    prominent
    src="../assets/navbar-pic4.jpg"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" class="image"></v-img>
    </template>

    <v-toolbar-title class="display-3">CKmeet</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      persistent-hint
      class="mt-3"
    ></v-switch>
    <v-menu offset-y transition="slide-y-transition" bottom right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon>
          <v-icon large v-bind="attrs" v-on="on">mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-if="registrationStatus == 'COMPLETED'"
          @click="$router.push({ name: 'ProfileSettings' })"
        >
          <v-list-item-title>Ustawienia konta</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="registrationStatus == 'COMPLETED'">
          <v-list-item-title>Kontakty</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="registrationStatus == 'COMPLETED'">
          <v-list-item-title>Spotkania</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logoutUser()">
          <v-list-item-title>Wyloguj się</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs align-with-title v-if="registrationStatus == 'COMPLETED'">
        <v-tab @click="$router.push({ name: 'People' })">Ludzie</v-tab>
        <v-tab @click="$router.push({ name: 'Meetings' })">Spotkania</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["logout", "resetState"]),
    ...mapActions(["status"]),
    logoutUser() {
      this.logout();
      this.resetState();
      this.$router.push({ name: "Auth" });
    },
  },
  computed: {
    ...mapState({
      registrationStatus: (state) => state.authStore.status,
    }),
  },
};
</script>

<style scoped>
.image {
  filter: brightness(90%);
}
</style>