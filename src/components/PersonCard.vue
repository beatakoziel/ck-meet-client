<template>
  <v-card class="mx-auto my-12" max-width="250">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="150px" contain src="../assets/user-example.jpg" />

    <v-card-title>Anita, 22 lata</v-card-title>
    <v-card-text>Interesuję się grą w piłkę siatkową. Lubię też czytać o biznesie oraz oglądać filmy przyrodnicze.</v-card-text>

    <v-card-actions>
      <v-btn color="accent" text>Pokaż profil</v-btn>
    </v-card-actions>
  </v-card>
</template>

