<template>
  <v-sheet class="my-12 mx-auto px-12 py-10" max-width="800px" :elevation="2" v-html="terms"/>
</template>

<script>
import termsMd from '@/terms-of-use/terms.md?raw'
import MarkdownIt from 'markdown-it'

export default {
  computed: {
    terms() {
      const md = new MarkdownIt({
        linkify: true,
        html: true
      })
      return md.render(termsMd)
     }
  }
}
</script>
