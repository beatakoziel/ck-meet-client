<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="../assets/navbar-pic2.jpg"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>CKmeet</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>Ludzie</v-tab>
        <v-tab>Spotkania</v-tab>
        <v-tab>Wydarzenia</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>