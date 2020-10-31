<template>
  <v-app>
    <NavBar />
    <v-main class="mt-16">
      <People />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import People from "./components/People";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    People,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

