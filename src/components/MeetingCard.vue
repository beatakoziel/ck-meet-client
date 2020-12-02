<template>
  <v-container max-width="400" class="mx-auto">
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card class="mx-auto ml-5 mr-5 my-12" max-width="40vw">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline">Wyjście na kawę</v-card-title>
            <v-card-text>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" large
                    >mdi-account-multiple</v-icon
                  >
                </template>
                <span>Max liczba uczestników</span>
              </v-tooltip>
              <span class="participants-num">4</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    style="margin-left: 15px"
                    v-bind="attrs"
                    v-on="on"
                    large
                    >mdi-calendar-check</v-icon
                  >
                </template>
                <span>Data spotkania</span>
              </v-tooltip>
              <span class="participants-num">27.12.2020</span>
            </v-card-text>
            <v-card-text
              >Usłyszałam ostatnio o kawiarni Bosko w Kielcach. Chętnie wyjdę
              tam na kawę i jakieś ciacho.</v-card-text
            >

            <v-card-actions>
              <v-btn color="accent" text @click="setUser">Szczegóły</v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="200" tile>
            <v-img :src="item.src"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
    ],
  }),
};
</script>
<style scoped>
i {
  margin-top: 5px;
}

.participants-num {
  margin-left: 10px;
  font-size: 20px;
}
</style>