<script setup>
import Navbar from './components/menu/Navbar.vue'
import MainCSnippet from './components/MainCSnippet.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="pt-5">
    <div class="flex flex-wrap justify-center gap-5">
      <MainCSnippet v-for="index in 10" :key="index" />
    </div>
  </main>
</template>
