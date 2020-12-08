<template>
  <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="chosenDate"
          :label="pickerTitle"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
        v-model="date"
        @input="menu2 = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  props:["pickerTitle","chosenDate"],
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu2: false,
    modal: false,
  }),
  computed: {
    ...mapState({
      personalData: (state) => state.peopleStore.personalData,
    }),
  },
};
</script>