<script setup>
import Navbar from './components/menu/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="pt-5">
  <!--  Gérer la navigation en se basant sur l'URL  -->
    <router-view />
  </main>
</template>
