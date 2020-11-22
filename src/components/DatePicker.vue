<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="personalData.dateOfBirth"
        label="Data urodzenia"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        min="1950-01-01"
        v-on="on"
        @click="modal = true"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
  }),
  computed: {
    ...mapState({
      personalData: (state) => state.peopleStore.personalData,
    }),
  },
};
</script>