<template>
  <v-sheet class="my-12 mx-auto px-12 py-10" max-width="800px" :elevation="2" v-html="citation"/>
</template>

<script>
import citation from '@/citation/citation.md'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  computed: {
    citation() {
      return citation
    }
  }
}
</script>
