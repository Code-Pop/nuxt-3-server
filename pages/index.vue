<script setup>
const { data: scizor, error } = await useFetch('/api/newmew')
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <ul v-if="scizor">
    <li>
      <img :src="scizor.sprite" />
    </li>
    <li>{{ scizor.id }}: {{ scizor.name }}</li>
  </ul>
  <div v-else>
    <p>{{ error }}</p>
  </div>
</template>
