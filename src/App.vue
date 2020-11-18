<template>
  <v-app>
    <NavBar v-if="isAuthenticated()" class="mb-16" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer v-if="isAuthenticated()" />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    if (this.isAuthenticated() === false && this.$route.path !== "/auth") {
      this.$router.push({ name: "Auth" });
    }
    if (this.isAuthenticated() === true && this.$route.path == "/auth") {
      this.$router.push({ name: "People" });
    }
  },
};
</script>

