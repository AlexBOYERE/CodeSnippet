<script setup>
import { ref, watch } from 'vue'
import { useNotification } from '@/composables/useNotification.js'
import "@vueform/multiselect/themes/default.css";
import Multiselect from '@vueform/multiselect' // Languages et tags

// Gérer le formulaire
const { showNotification } = useNotification()
const props = defineProps(['isOpen', 'closeModal', 'formData'])
const emit = defineEmits(['update:formData'])

const localFormData = ref({ ...props.formData })

watch(
  () => props.formData,
  (newValue) => {
    localFormData.value = { ...newValue }
  },
  { deep: true },
)

const tagOptions = ['IA', 'Ergonomie', 'Call API']
const languagesOptions = ['JavaScript', 'Vue.js', 'Tailwind', 'Node.js', 'Python']

const submitForm = () => {
  emit('update:formData', localFormData.value)

  let visibility = localFormData.value.isPrivate ? 'privé ! 🕵️' : 'public ! 🔥'
  showNotification('Le code est bien envoyé en ' + visibility)

  props.closeModal()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg transition-all duration-300">
        <!-- Titre et bouton de fermeture -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold text-gray-900">Créer un Snippet</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">
            &times;
          </button>
        </div>

        <!-- Formulaire -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- TITRE -->
          <div>
            <label class="block text-sm font-medium text-gray-900">Titre</label>
            <input
              v-model="localFormData.title"
              type="text"
              maxlength="50"
              placeholder="Entrez un titre..."
              class="w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg placeholder-gray-400"
              required
            />
          </div>

          <!-- DESCRIPTION -->
          <div>
            <label class="block text-sm font-medium text-gray-900">Description</label>
            <textarea
              v-model="localFormData.description"
              placeholder="Ajoutez une description..."
              class="w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg placeholder-gray-400"
              rows="3"
            ></textarea>
          </div>

          <div class="flex flex-wrap gap-4">
            <!-- LANGUAGES -->
            <div class="w-full md:w-1/2">
              <label class="block text-sm font-medium text-gray-900">Langages</label>
              <Multiselect
                v-model="localFormData.languages"
                :options="languagesOptions"
                mode="tags"
                class="border border-gray-300 text-gray-500 rounded-lg shadow-sm"
              />
            </div>

            <!-- TAGS -->
            <div class="w-full md:w-1/2">
              <label class="block text-sm font-medium text-gray-900">Tags</label>
              <Multiselect
                v-model="localFormData.tags"
                :options="tagOptions"
                mode="tags"
                class="border border-gray-300 text-gray-500 rounded-lg shadow-sm"
              />
            </div>
          </div>

          <!-- CODE -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Code</label>
            <textarea
              v-model="localFormData.code"
              placeholder="Collez votre code ici..."
              class="w-full mt-1 p-3 border border-gray-300 bg-gray-900 text-green-300 font-mono text-sm rounded-lg h-40 placeholder-gray-500"
            ></textarea>
          </div>

          <!-- PRIVÉ OU PUBLIC -->
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              v-model="localFormData.isPrivate"
              class="w-5 h-5 text-blue-600"
            />
            <label class="text-sm text-gray-700">Snippet Privé</label>
          </div>

          <!-- BOUTONS -->
          <div class="flex justify-end gap-3">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border text-gray-600 hover:bg-gray-100 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
