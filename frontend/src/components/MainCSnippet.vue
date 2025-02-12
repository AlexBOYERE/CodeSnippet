<script setup>
import { useNotification } from '@/composables/useNotification'
import { computed, ref } from 'vue'

const { showNotification } = useNotification()
const isPinging = ref(false)
const codeSnippet = ref(`
function helloWorld() {
  console.log("Hello, world!");
}
`)

// Animation sur le clique "copier"
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(codeSnippet.value)
    showNotification('Code copié ! 🎉', 'success')

    isPinging.value = true
    setTimeout(() => {
      isPinging.value = false
    }, 500)
  } catch (err) {
    console.error('Erreur de copie :', err)
  }
}

const voteCount = ref(0)
const hasVoted = ref(false)

// Couleur dynamique selon la température du vote
const voteColor = computed(() => {
  if (voteCount.value > 50) return 'text-red-600' // Très chaud
  if (voteCount.value > 20) return 'text-orange-500' // Chaud
  if (voteCount.value > 0) return 'text-yellow-500' // Tiède
  if (voteCount.value === 0) return 'text-gray-500' // Neutre
  if (voteCount.value < -20) return 'text-blue-500' // Froid
  return 'text-blue-600' // Très froid
})

// Gestion du vote
const voteUp = () => {
  voteCount.value++
  hasVoted.value = true
}

const voteDown = () => {
  voteCount.value--
  hasVoted.value = true
}
</script>

<template>
  <div class="card bg-white w-96 shadow-lg rounded-lg border border-gray-200">
    <div class="card-body p-6">
      <!--  Titre + badge new  -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">
          Fonction Hello World
          <span class="badge badge-secondary bg-purple-500 text-white px-2 py-1 rounded-md text-xs ml-2">
            NEW
          </span>
        </h2>

        <!-- VOTE -->
        <div class="flex items-center space-x-3">
          <!-- Boutons visibles seulement si pas encore voté -->
          <template v-if="!hasVoted">
            <button
              @click="voteUp"
              class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md"
            >
              🔥
            </button>

            <button
              @click="voteDown"
              class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
            >
              ❄️
            </button>
          </template>

          <!-- Score avec couleur dynamique -->
          <div class="text-xl font-bold transition-all duration-300" :class="voteColor">
            {{ voteCount }}°
          </div>
        </div>
      </div>

      <!-- CODE SNIPPET -->
      <div class="relative bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
        <button
          @click="copyToClipboard"
          class="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-600 transition"
        >
          Copier
          <span
            v-if="isPinging"
            class="absolute -inset-1 bg-gray-400 opacity-75 rounded-full animate-ping"
          ></span>
        </button>

        <pre><code class="whitespace-pre-wrap">{{ codeSnippet }}</code></pre>
      </div>

      <p class="text-gray-700 mt-3">Appeler l'API JIRA avec une requête tout en optimisant le flux de données.</p>

      <!--  TAGS + LANGUAGE    -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span class="badge badge-outline bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs">
          JavaScript
        </span>
        <span class="badge badge-outline bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs">
          JIRA
        </span>
        <span class="badge badge-outline bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs">
          API
        </span>
        <span class="badge badge-outline bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs">
          IA
        </span>
      </div>
    </div>
  </div>
</template>
