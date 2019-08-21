<template>
  <v-app>
    <v-app-bar app>
      <img src="@/assets/gear-g.png" height="75%" class="mx-4" />
      <v-toolbar-title class="headline text-uppercase d-none d-sm-flex">
        <span>GEAR</span>
        <span class="font-weight-light">-GENOMICS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" href="https://github.com/gear-genomics">
            <v-icon left>fab fa-github</v-icon>
            <span class="d-none d-md-flex">GitHub</span>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" href="https://gear-genomics.com/contact/">
            <v-icon left>far fa-envelope</v-icon>
            <span class="d-none d-md-flex">Contact</span>
          </v-btn>
        </template>
        <span>Contact Us</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" href="https://gear-genomics.com/terms/">
            <v-icon left>fas fa-balance-scale</v-icon>
            <span class="d-none d-md-flex">TOS</span>
          </v-btn>
        </template>
        <span>Terms of Service</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
      <AppsList :apps="apps" />
    </v-content>
  </v-app>
</template>

<script>
import AppsList from "./components/AppsList";

export default {
  name: "App",
  components: {
    AppsList
  },
  data: () => ({
    apps: require("./apps.json")
  })
};
</script>

<style scoped>
.v-app-bar {
  background: url("~@/assets/pattern.png");
}

.v-app-bar .v-btn {
  height: 100% !important;
}
</style>
