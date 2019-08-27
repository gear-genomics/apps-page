<template>
  <v-app>
    <v-app-bar app>
      <nuxt-link class="header-logo" to="/">
        <img src="@/assets/gear-g.png" height="75%" class="mx-4" />
        <v-toolbar-title class="headline text-uppercase d-none d-sm-flex">
          <span>GEAR</span>
          <span class="font-weight-light">-GENOMICS</span>
        </v-toolbar-title>
      </nuxt-link>
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
          <v-btn text v-on="on" to="/contact">
            <v-icon left>far fa-paper-plane</v-icon>
            <span class="d-none d-md-flex">Contact</span>
          </v-btn>
        </template>
        <span>Contact Us</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" to="/terms">
            <v-icon left>fas fa-balance-scale</v-icon>
            <span class="d-none d-md-flex">ToU</span>
          </v-btn>
        </template>
        <span>Terms of Use</span>
      </v-tooltip>
    </v-app-bar>
    <v-content class="pb-12">
      <nuxt />
    </v-content>
    <v-footer
      class="d-flex justify-end align-center pa-4"
      absolute
      elevation="2"
    >
      <span>Supported by</span>
      <a href="https://embl.de">
        <img class="footer-logo ml-1" src="@/assets/embl.svg" alt="EMBL logo" />
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
  background: url('~@/assets/pattern.png');
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