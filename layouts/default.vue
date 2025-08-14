<template>
  <v-app>
    <v-app-bar app>
      <nuxt-link class="header-logo" to="/">
        <img src="/gear-g.png" height="75%" class="mx-4">
        <v-toolbar-title class="headline text-uppercase d-none d-sm-flex">
          <span>GEAR</span>
          <span class="font-weight-light">-GENOMICS</span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" to="/contact">
            <v-icon left>far fa-paper-plane</v-icon>
            <span class="d-none d-md-flex">Contact</span>
          </v-btn>
        </template>
        <span>Contact Us</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" to="/citation">
            <v-icon left>fas fa-user-graduate</v-icon>
            <span class="d-none d-md-flex">Citation</span>
          </v-btn>
        </template>
        <span>Citation</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" to="/terms">
            <v-icon left>fas fa-balance-scale</v-icon>
            <span class="d-none d-md-flex">Terms</span>
          </v-btn>
        </template>
        <span>Terms of Use</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" href="https://github.com/gear-genomics">
            <v-icon left>fab fa-github</v-icon>
            <span class="d-none d-md-flex">GitHub</span>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-app-bar>
    <v-main class="pb-12">
      <NuxtPage />
    </v-main>
    <v-footer class="d-flex justify-end align-center pa-4" absolute elevation="2">
      <span>Supported by</span>
      <a href="https://embl.de">
        <img class="footer-logo ml-1" src="/embl.svg" alt="EMBL logo">
      </a>
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-app-bar .v-btn {
  height: 100% !important;
}

.v-app-bar,
.v-footer {
  background-color: rgba(255, 255, 255, 0.95);
  background-image: url('/hero-patterns-topography.svg');
  background-repeat: repeat;
}

.footer-logo {
  height: 2rem;
  vertical-align: middle;
}

.header-logo {
  height: 100%;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}
</style>