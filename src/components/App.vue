<template>
  <div class="text-center">
    <a v-for="app in apps" :key="app.name" :href="app.url" target="_blank" class="card">
      <span class="card__left">
        <span class="app-logo" :style="{
          backgroundColor: stringToColor(app.name),
          color: adjustColor(app.name)
        }">
          {{ abbreviate(app) }}
        </span>
      </span>
      <span class="card__right">
        <span class="app-description">
          <span class="app-description__header">{{ app.name }}</span>
          <span class="app-description__text">
            {{ app.description }}
          </span>
        </span>
      </span>
    </a>
    <div class="teaser">...stay tuned for more...</div>
  </div>
</template>

<script>
import md5 from "md5"
import { relativeLuminance } from "../utils"

export default {
  data() {
    return {
      apps: require("../apps.json").sort((app1, app2) =>
        app1.name.toLowerCase().localeCompare(app2.name.toLowerCase())
      )
    }
  },
  methods: {
    abbreviate: function(app) {
      return app.abbreviation || app.name.substr(0, 2).toUpperCase()
    },
    stringToColor: function(str) {
      const hashed = md5(str)
      return "#" + hashed.substr(0, 6)
    },
    adjustColor: function(str) {
      const bgColorHex = this.stringToColor(str);
      const lum = relativeLuminance(
        parseInt(bgColorHex.substr(1, 2), 16),
        parseInt(bgColorHex.substr(3, 2), 16),
        parseInt(bgColorHex.substr(5, 2), 16)
      );
      return lum < 0.5 ? "white" : undefined
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  background-color: white;
  width: 350px;
  height: 150px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  color: inherit;
  text-decoration: none;
  transition: box-shadow 150ms ease-out;
}

.card:hover {
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
}

.card__left {
  display: block;
  width: 35%;
  height: 100%;
  float: left;
}

.card__right {
  display: block;
  float: left;
  width: 65%;
  height: 100%;
  padding: 20px 30px 20px 0;
}

.app-logo {
  display: block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  text-align: center;
  line-height: 65px;
  text-decoration: none;
  font-family: 'Unica One', sans-serif;
  font-size: 1.5rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.app-description {
  color: #444;
}

.app-description__header {
  font-family: 'Rosarivo', sans-serif;
  font-size: 1.3rem;
  display: block;
  margin-bottom: .25rem;
}

.app-description__text {
  display: block;
  text-align: left;
  font-weight: 300;
}

.teaser {
  margin-top: 20px;
  font-family: 'Dancing Script', sans-serif;
  font-size: 2rem;
}
</style>

