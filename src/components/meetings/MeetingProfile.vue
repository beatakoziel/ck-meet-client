<template>
  <v-card>
    <v-flex row justify-center mt-10>
      <v-container ml-0 mr-0>
        <v-img
          v-if="currentUser.avatarBytes == null"
          height="250px"
          width="250px"
          src="../../assets/default-image.png"
        />
        <v-img
          v-else
          height="250px"
          width="250px"
          :src="'data:image/jpeg;base64,' + currentUser.avatarBytes"
        />
        <hr class="horizontal-line" />
        <p class="display-1 picture-text" mt-5>
          {{ currentUser.nickname }}, {{ currentUser.age }} {{ ageString }}
          <v-tooltip v-if="currentUser.gender == 'WOMAN'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-female</v-icon>
            </template>
            <span>Kobieta</span>
          </v-tooltip>
          <v-tooltip v-if="currentUser.gender == 'MAN'" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large>mdi-gender-male</v-icon>
            </template>
            <span>Mężczyzna</span>
          </v-tooltip>
        </p>
      </v-container>
      <v-container ml-0 mr-0>
        <p class="title">Opis</p>
        <p>{{ currentUser.description }}</p>
        <v-container class="hello-container" ml-0 mr-0 pl-0 pr-0>
          <v-btn>
            Przywitaj się
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="margin-icon" v-bind="attrs" v-on="on"
                  >mdi-hand-right</v-icon
                >
              </template>
              <span>Przybij piątkę!</span>
            </v-tooltip>
          </v-btn>
          <p class="caption info-caption">
            Jeżeli Ty i ten użytkownik przybijecie sobie piątki wówczas zostanie
            odblokowana możliwość skontaktowania się ze sobą.
          </p>
        </v-container>
      </v-container>
    </v-flex>
  </v-card>
</template>