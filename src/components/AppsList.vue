<template>
  <v-container>
    <v-img
      :src="require('@/assets/gear-logo.v2.png')"
      class="my-3"
      contain
      max-height="100"
    ></v-img>

    <h1 class="headline text-center mb-4">
      genome analysis server
    </h1>

    <section class="card-grid my-6">
      <v-card
        v-for="app in appsSorted"
        :key="app.name"
        class="text-center"
        :href="app.url"
      >
        <div class="card-header d-flex justify-center align-center">
          <div
            class="app-logo"
            :style="{
              backgroundColor: stringToColor(app.name),
              color: adjustColor(app.name)
            }"
          >
            {{ abbreviate(app) }}
          </div>
        </div>
        <v-card-title class="d-inline-block">{{ app.name }}</v-card-title>
        <v-card-text>{{ app.description }}</v-card-text>
      </v-card>
    </section>

    <div class="teaser text-center mb-3">...stay tuned for more...</div>
  </v-container>
</template>

<script>
import md5 from "md5";
import { relativeLuminance } from "../utils";

export default {
  props: {
    apps: {
      type: Array
    }
  },
  data: () => ({}),
  methods: {
    abbreviate(app) {
      return app.abbreviation || app.name.substr(0, 2).toUpperCase();
    },
    stringToColor(str) {
      const hashed = md5(str);
      return "#" + hashed.substr(0, 6);
    },
    adjustColor(str) {
      const bgColorHex = this.stringToColor(str);
      const lum = relativeLuminance(
        parseInt(bgColorHex.substr(1, 2), 16),
        parseInt(bgColorHex.substr(3, 2), 16),
        parseInt(bgColorHex.substr(5, 2), 16)
      );
      return lum < 0.5 ? "white" : undefined;
    }
  },
  computed: {
    appsSorted() {
      return [...this.apps].sort((app1, app2) =>
        app1.name.localeCompare(app2.name)
      );
    }
  }
};
</script>

<style scoped>
h1.headline {
  font-family: Unica One, sans-serif !important;
}

.card-header {
  height: 100px;
  background: url(~@/assets/gplaypattern.png);
}

.v-card__title {
  font-family: "Rosarivo", serif;
}

.app-logo {
  font-size: 1.3rem;
  height: 60px;
  line-height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #9de3fd;
  font-family: Unica One, sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.teaser {
  font-family: "Dancing Script", sans-serif;
  font-size: 2rem;
}
</style>
