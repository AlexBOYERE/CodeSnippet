<script setup>
import Navbar from './components/menu/Navbar.vue'
import MainCSnippet from './components/MainCSnippet.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="pt-5">
    <router-view />
  </main>
</template>
