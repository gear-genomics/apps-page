<template>
  <v-sheet
    class="my-12 mx-auto px-12 py-10"
    max-width="800px"
    :elevation="2"
    v-html="terms"
  />
</template>

<script>
import terms from '@/terms-of-use/terms.md'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  computed: {
    terms() {
      return terms
    }
  }
}
</script>
