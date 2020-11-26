<template>
  <div>
    <div class="bg-image">
      <p class="big-logo">ckmeet</p>
      <p class="my-2">
        <LoginDialog />
      </p>
      <p class="my-2">
        <RegisterDialog />
      </p>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterDialog from "./RegisterDialog";
import LoginDialog from "./LoginDialog";
import Footer from "./Footer";
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    RegisterDialog,
    LoginDialog,
    Footer,
  },
  methods: {
    ...mapMutations(["logout"]),
  },
  mounted() {
    this.logout();
  },
};
</script>

<style scoped>
.bg-image {
  display: table;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url("../assets/navbar-pic5.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.big-logo {
  font-size: 10.5vw;
  font-weight: bold;
  color: white;
  margin: 0 50px 0 50px;
}

.footer {
  width: 100vw;
  position: absolute;
  bottom: 0px;
}
</style>
