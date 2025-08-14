<template>
  <v-card max-width="344" class="mx-auto mt-8">
    <v-list-item>
      <v-icon left>far fa-paper-plane</v-icon>
      <v-list-item-title class="headline">Contact</v-list-item-title>
    </v-list-item>

    <v-img src="/pexels-1884017.jpg" height="194"></v-img>

    <v-card-text class="contact-address">
      Genomics Core Facility
      EMBL Heidelberg
      Meyerhofstraße 1
      69117 Heidelberg, Germany
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        href="https://www.embl.org/groups/genomics/contact-gear-genomics/"
      >
        <v-icon left>far fa-envelope</v-icon>Email us
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.contact-address {
  white-space: pre-line;
}
</style>
