<template>
  <v-flex row justify-center mt-10>
    <v-container>
      <v-text-field
        v-model="personalData.nickname"
        :counter="30"
        :rules="[(v) => !!v || 'Pole wymagane']"
        label="Nazwa użytkownika"
        required
      ></v-text-field>
      <DatePicker />
      <v-textarea
        v-model="personalData.description"
        label="Opis"
        :counter="500"
        prepend-icon="mdi-comment-outline"
        :rules="[(v) => !!v || 'Pole wymagane']"
        required
      ></v-textarea>
      <v-radio-group
        v-model="personalData.gender"
        mandatory
        label="Płeć"
        prepend-icon="mdi-gender-male-female"
      >
        <v-radio label="Kobieta" value="FEMALE"></v-radio>
        <v-radio label="Mężczyzna" value="MALE"></v-radio>
      </v-radio-group>
    </v-container>
    <v-container>
      <v-card class="my-6" color="card">
        <v-card-title>Dane kontaktowe</v-card-title>
        <v-card-subtitle>Uzupełnij przynajmniej jedno pole</v-card-subtitle>
        <v-card-text>
          <v-text-field
            v-model="personalData.email"
            label="Adres email"
          ></v-text-field>
          <v-text-field
            v-model="personalData.phoneNumber"
            label="Numer telefonu"
          ></v-text-field>
          <v-text-field
            v-model="personalData.linkToFacebookProfile"
            label="Link do profilu na facebooku"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-checkbox
        v-model="checkbox"
        label="Czy zgadzasz się na przetwarzanie danych?"
        required
      ></v-checkbox>
    </v-container>
  </v-flex>
</template>

<script>
import DatePicker from "./DatePicker";
import { mapState } from "vuex";
export default {
  data() {
    return {
      selected: [],
      checkbox: null,
      items: [
        {
          value: "email",
          label: "Adres email",
        },
        {
          value: "phoneNumber",
          label: "Numer telefonu",
        },
        {
          value: "linkToFacebookProfile",
          label: "Link do profilu na Facebooku",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      personalData: (state) => state.peopleStore.personalData,
    }),
  },
  components: {
    DatePicker,
  },
};
</script>
<style scoped>
.container {
  max-width: 500px;
}

.v-input--radio-group--column .v-input--radio-group__input > .v-label {
  margin-bottom: 16px;
}
</style>