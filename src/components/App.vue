<template>
  <div>
    <div class="gear-app-grid">
      <div
        v-for="app in apps"
        :key="app.name"
        class="gear-app-grid-item"
      >
        <div class="gear-app-grid-item-header">
          <a class="gear-app-grid-item-link" :href="app.url" target="_blank">
            <div class="gear-app-name">{{ app.name }}</div>
            <div
              class="gear-app-logo"
              :style="{
                backgroundColor: stringToColor(app.name),
                color: adjustColor(app.name)
              }">
              {{ abbreviate(app) }}
            </div>
          </a>
        </div>
        <div class="gear-app-grid-item-main">
          <a class="gear-app-grid-item-link" :href="app.url" target="_blank">
            <div class="gear-app-description">{{ app.description }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="teaser">...stay tuned for more...</div>
  </div>
</template>

<script>
import md5 from 'md5'
import { relativeLuminance } from '../utils'

export default {
  data() {
    return {
      apps: require('../apps.json').sort((app1, app2) =>
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
      return '#' + hashed.substr(0, 6)
    },
    adjustColor: function(str) {
      const bgColorHex = this.stringToColor(str)
      const lum = relativeLuminance(
        parseInt(bgColorHex.substr(1, 2), 16),
        parseInt(bgColorHex.substr(3, 2), 16),
        parseInt(bgColorHex.substr(5, 2), 16)
      )
      return lum < 0.5 ? 'white' : undefined
    }
  }
}
</script>

<style scoped>
.gear-app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.gear-app-grid-item {
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.15s ease-out;
}

.gear-app-grid-item:hover {
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.gear-app-grid-item-header {
  border-radius: 0.5em 0.5em 0 0;
  height: 150px;
  background: url(../static/img/gplaypattern.png);
  border-bottom: 1px solid #f1f1f1;
}

.gear-app-grid-item-link {
  display: block;
  position: relative;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.gear-app-grid-item-link:hover,
.gear-app-grid-item-link:active,
.gear-app-grid-item-link:visited {
  color: inherit;
  text-decoration: none;
}

.gear-app-grid-item-main {
  height: 150px;
}

.gear-app-logo {
  height: 65px;
  line-height: 65px;
  width: 65px;
  text-align: center;
  border-radius: 50%;
  background-color: rgb(157, 227, 253);
  font-family: Unica One, sans-serif;
  font-size: 1.5rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.gear-app-name {
  font-family: Rosarivo, sans-serif;
  font-size: 1.5rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.gear-app-description {
  padding: 45px 1.5rem 2rem;
  font-weight: 300;
  text-align: center;
}

.teaser {
  margin-top: 1.5rem;
  font-family: 'Dancing Script', sans-serif;
  font-size: 2rem;
  text-align: center;
}
</style>

