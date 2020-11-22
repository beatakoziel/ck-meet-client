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
import { mapGetters, mapActions } from "vuex";

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
    ...mapActions(["status"]),
    ...mapGetters(["isAuthenticated"]),
  },
  mounted() {
    if (this.isAuthenticated() === false && this.$route.path !== "/auth") {
      console.log("auth");
      this.$router.push({ name: "Auth" });
    }
    if (this.isAuthenticated() === true) {
      console.log(this.isAuthenticated());
      var status = this.status();
      if (status != "COMPLETED") {
        console.log("register");
        this.$router.push({ name: "RegisterData" });
      } else {
        if (this.$route.path == "/auth") {
          console.log("people");
          this.$router.push({ name: "People" });
        }
      }
    }
  },
};
</script>

