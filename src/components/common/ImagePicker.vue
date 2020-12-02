<template>
  <v-flex row wrap>
    <v-container>
      <v-container ml-0 mr-0>
        <v-img
          v-if="image.image == null"
          height="250px"
          width="250px"
          src="../../assets/default-image.png"
        />
        <v-img
          v-else
          height="250px"
          width="250px"
          :src="'data:image/jpeg;base64,' + image.image"
        />
      </v-container>
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Wybierz zdjęcie z komputera"
        prepend-icon="mdi-camera"
        label="Avatar"
        v-model="image.image"
      ></v-file-input>
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
  },
  mounted() {},
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