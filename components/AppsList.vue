<template>
  <v-container>
    <v-img :src="require('@/assets/gear-logo.v2.png')" class="my-3" contain max-height="100"></v-img>
    <h1 class="headline text-center mb-4">genome analysis server</h1>

    <section class="card-grid my-6">
      <v-hover v-slot:default="{ hover }" v-for="app in appsSorted" :key="app.name">
        <v-card class="text-center" :elevation="hover ? 10 : 2" :href="app.url">
          <v-card-title class="app-name">{{ app.name }}</v-card-title>
          <div class="card-header d-flex justify-center align-center">
            <div
              class="app-logo elevation-1"
              :style="{
                backgroundColor: stringToColor(app.name),
                color: adjustColor(app.name)
              }"
            >{{ abbreviate(app) }}</div>
          </div>
          <v-card-text>{{ app.description }}</v-card-text>
        </v-card>
      </v-hover>
    </section>

    <div class="teaser text-center mb-3">...stay tuned for more...</div>
  </v-container>
</template>

<script>
import md5 from 'md5'
import { randomPastel, relativeLuminance } from '@/utils'

export default {
  props: {
    apps: {
      type: Array
    }
  },
  data: () => ({}),
  methods: {
    abbreviate(app) {
      return app.abbreviation || app.name.substr(0, 2).toUpperCase()
    },
    stringToColor(str) {
      const hashed = md5(str)
      return randomPastel(hashed)
    },
    // TODO revisit this
    adjustColor(str) {
      const bgColorHex = this.stringToColor(str)
      const lum = relativeLuminance(
        parseInt(bgColorHex.substr(1, 2), 16),
        parseInt(bgColorHex.substr(3, 2), 16),
        parseInt(bgColorHex.substr(5, 2), 16)
      )
      return lum < 0.5 ? 'white' : undefined
    }
  },
  computed: {
    appsSorted() {
      return [...this.apps].sort((app1, app2) =>
        app1.name.localeCompare(app2.name)
      )
    }
  }
}
</script>

<style scoped>
h1.headline {
  font-family: Unica One, sans-serif !important;
}

.card-header {
  height: 125px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: url(~@/assets/hero-patterns-circuit-board.svg);
}

.app-name {
  font-family: 'Rosarivo', serif;
  flex-direction: column;
}

.app-logo {
  font-size: 1.3rem;
  height: 60px;
  line-height: 60px;
  width: 60px;
  border-radius: 50%;
  font-family: Unica One, sans-serif;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.teaser {
  font-family: 'Dancing Script', sans-serif;
  font-size: 2rem;
}
</style>
