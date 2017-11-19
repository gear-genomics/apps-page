<template>
  <div class="page">
    <header>
      <img src="~/assets/img/gear.png" alt="GEAR logo" style="width: 350px; margin: 35px 0 15px;">
      <div style="font-size: 1.6rem; font-family: 'Unica One'">GENOME ANALYSIS SERVER</div>
    </header>
    <div class="container">
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
    <footer>
      <img src="~/assets/img/EMBL_logo.svg" alt="EMBL logo">
      <div style="float: right; margin-right: 10px;">Hosted with <span class="embl-red">♥</span> by</div>
    </footer>
  </div>
</template>

<script>
const crypto = require('crypto')
import { relativeLuminance } from '~/utils'

export default {
  data () {
    return {
      apps: require('~/apps.json').sort((app1, app2) => 
        app1.name.toLowerCase().localeCompare(app2.name.toLowerCase()))
    }
  },
  methods: {
    abbreviate: function (app) {
      return app.abbreviation || app.name.substr(0, 2).toUpperCase()
    },
    stringToColor: function (str) {
      const hashed = crypto.createHash('sha1').update(str).digest('hex')
      return '#' + hashed.substr(0, 6)
    },
    adjustColor: function (str) {
      const bgColorHex = this.stringToColor(str)
      const lum = relativeLuminance(
        parseInt(bgColorHex.substr(1, 2), 16),
        parseInt(bgColorHex.substr(3, 2), 16),
        parseInt(bgColorHex.substr(5, 2), 16)
      )
      return lum < .5 ? 'white' : undefined
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400|Unica+One|Dancing+Script');

.page {
  font-family: 'Muli', sans-serif;
  color: #444;
  background-color: #fdfdfd;
  min-height: 100vh;
}

.page * {
  box-sizing: border-box;
}

header {
  height: 200px;
  background: url(~/assets/img/pattern.png);
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
}

footer {
  position: fixed;
  bottom: 0;
  background: url(~/assets/img/pattern.png);
  border-top: 1px solid #f0f0f0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 20px;
}

footer > img {
  float: right;
  height: 70%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.embl-red {
  color: #e2001a;
}

.container {
  padding: 10px 0 60px;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
}

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
  width: 75px;
  height: 75px;
  border-radius: 50%;
  text-align: center;
  line-height: 75px;
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
  font-size: 1.2rem;
  display: block;
  margin-bottom: .5rem;
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

