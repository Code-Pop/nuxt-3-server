<script setup>
const { data: scizor } = await useFetch(
  'https://pokeapi.co/api/v2/pokemon/scizor'
)
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <pre>
    {{ scizor }}
  </pre>
</template>
