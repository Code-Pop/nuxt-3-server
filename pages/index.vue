<script setup>
const { data: scizor } = await useFetch('/api/charizard')
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <ul>
    <li>
      <img :src="scizor.sprite" />
    </li>
    <li>{{ scizor.id }}: {{ scizor.name }}</li>
  </ul>
</template>
