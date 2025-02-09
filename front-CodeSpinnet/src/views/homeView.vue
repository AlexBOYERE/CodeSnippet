<script setup>
import MainCSnippet from '@/components/MainCSnippet.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-white-800 pb-5 pl-5">À la une</h1>
    <div class="flex flex-wrap justify-center gap-5">
      <MainCSnippet v-for="index in 6" :key="index" />
    </div>
  </div>
</template>
