<template>
  <v-flex row wrap>
    <v-container>
      <v-container @click="check()" body-1 ml-16>Zdjęcie profilowe</v-container>
      <v-file-input
        @click="check()"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
        v-model="image.image"
      ></v-file-input>
      {{ image }}
    </v-container>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selectedInterests: [],
      selectedGenders: [],
    };
  },
  computed: {
    ...mapState({
      image: (state) => state.peopleStore.image,
    }),
  },
  methods: {
    ...mapActions(["getInterests"]),
    check() {
      console.log(this.image);
    },
  },
  mounted() {
    console.log(this.image);
  },
};
</script>
<style scoped>
.container {
  max-width: 600px;
}

.margin-checkbox {
  margin-right: 10px;
  margin-top: 0px;
}
</style>