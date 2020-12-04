<template>
  <v-app>
    <NavBar v-if="registrationStatus" class="mb-16" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer v-if="registrationStatus" />
  </v-app>
</template>

<script>
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { mapGetters, mapState, mapActions } from "vuex";

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
    ...mapActions(["status"]),
  },
  computed: {
    ...mapState({
      registrationStatus: (state) => state.authStore.status,
    }),
    statusFromStorage: function () {
      return localStorage.getItem("status");
    },
  },
  mounted() {
    this.status();
    if (this.isAuthenticated() === false && this.$route.path !== "/auth") {
      this.$router.push({ name: "Auth" });
    }
    if (this.isAuthenticated() === true) {
      if (this.registrationStatus != "COMPLETED") {
        this.$router.push({ name: "RegisterData" });
      } else {
        if (this.$route.path == "/auth" || this.$route.path == "/register") {
          this.$router.push({ name: "People" });
        }
      }
    }
  },
};
</script>

