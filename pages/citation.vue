<template>
  <v-sheet class="my-12 mx-auto px-12 py-10" max-width="800px" :elevation="2" v-html="citation"/>
</template>

<script>
import citationMd from '@/citation/citation.md?raw'
import MarkdownIt from 'markdown-it'

export default {
  computed: {
    citation() {
      const md = new MarkdownIt()      
      return md.render(citationMd)
    }
  }
}
</script>
