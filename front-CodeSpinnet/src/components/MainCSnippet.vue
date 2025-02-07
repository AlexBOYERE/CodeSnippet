<script setup>
import Noty from 'noty'

import { ref } from 'vue'

const codeSnippet = ref(`
function helloWorld() {
  console.log("Hello, world!");
}
`)

const showNotification = (text = 'Ceci est une notification ! 🚀', type = 'info') => {
  new Noty({
    text: text,
    type: type, // Type: success, error, warning, info, alert
    layout: 'bottomLeft', // Position: topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight
    timeout: 5000, // Disparaît après 3 secondes
    progressBar: true, // Affiche une barre de progression
  }).show()
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(codeSnippet.value)
    showNotification('Code copié ! 🎉', 'success')
  } catch (err) {
    console.error('Erreur de copie :', err)
  }
}
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        Call jira API
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <div class="relative bg-gray-900 text-white p-4 rounded-lg">
        <button
          @click="copyToClipboard"
          class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600 transition"
        >
          Copier
        </button>

        <pre><code class="whitespace-pre-wrap">{{ codeSnippet }}dfdsfsdfsfd</code></pre>
      </div>
      <p>Appeler l'API JIRA avec une requête tout en optimisant le flux de données.</p><div class="card-actions flex justify-between">
      <div class="flex space-x-2">
        <div class="badge badge-outline">UP</div>
        <div class="badge badge-outline">0</div> <!-- Auto generated -->
        <div class="badge badge-outline">DOWN</div>
      </div>
      <div class="flex space-x-2">
        <div class="badge badge-outline">Javascript</div>
        <div class="badge badge-outline">IA</div>
      </div>
    </div>

    </div>
  </div>
</template>

<style scoped></style>
