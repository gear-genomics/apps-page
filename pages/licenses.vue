<template>
  <v-card max-width="900" class="mx-auto my-12 px-12 py-10" :elevation="2">
    <v-list-item>
      <v-icon left>fas fa-file-contract</v-icon>
      <v-list-item-title class="headline">Licenses</v-list-item-title>
    </v-list-item>
    <v-card-text>
      <p>
        Below you can find the licenses for the individual applications and services
        available on the GEAR Genomics platform. Each entry links to the corresponding
        license in the application’s GitHub repository.
      </p>

      <p>
      Teal: <a href='https://github.com/gear-genomics/teal/blob/main/LICENSE' target="_blank">GNU General Public License v3.0</a>
      </p>
      <p>
      Sage: <a href='https://github.com/gear-genomics/sage/blob/main/LICENSE' target="_blank">GNU General Public License v3.0</a>
      </p>
    </v-card-text>
  </v-card>
</template>
