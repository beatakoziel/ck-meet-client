<template>
  <v-card class="mx-auto ml-5 mr-5 my-12" max-width="250" max-height="400">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img v-if="userData.avatarBytes==null" height="180px" src="../assets/default-image.png" />
    <v-img v-else height="180px" :src="'data:image/jpeg;base64,' + userData.avatarBytes" />

    <v-card-title>{{userData.nickname}}, {{userData.age}} {{ageString}}</v-card-title>
    <v-card-text>{{userData.description}}</v-card-text>

    <v-card-actions>
      <v-btn color="accent" text>Pokaż profil</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["userData"],
  data: () => ({
    ageString: ""
  }),
  methods: {
    setAgeString() {
      var lastDigit = this.userData.age % 10;
      var checkList = [0, 1, 5, 6, 7, 8, 9];
      if (checkList.indexOf(lastDigit) > -1) this.ageString = "lat";
      else this.ageString = "lata";
    }
  },
  mounted() {
    this.setAgeString();
  }
};
</script>
<style scoped>
.v-card__text {
  display: block;
  display: -webkit-box;
  height: 90px;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

