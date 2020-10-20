<template>
  <v-app>
    <v-main>
      <NavBar />
      <Peoples />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Peoples from "./components/Peoples";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Peoples,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
