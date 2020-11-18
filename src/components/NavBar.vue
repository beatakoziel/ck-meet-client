<template>
  <v-app-bar app absolute color="grey" dark prominent src="../assets/navbar-pic2.jpg">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" class="image"></v-img>
    </template>

    <v-toolbar-title class="display-3">CKmeet</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-switch v-model="$vuetify.theme.dark" inset persistent-hint class="mt-3"></v-switch>
    <v-btn icon>
      <v-icon large>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon large>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>Ludzie</v-tab>
        <v-tab>Spotkania</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<style scoped>
.image {
  filter: brightness(90%);
}
</style>