<script setup>
import { ref, onMounted } from 'vue'
import { register } from '@/api/authService.js'
import { useNotification } from '@/composables/useNotification'

const { showNotification } = useNotification()

const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

const typedNameText = ref('')
const typedEmailText = ref('')
const typedPasswordText = ref('')
const typedSubmitText = ref('')
const nameText = '$ Votre nom:'
const emailText = '$ Votre adresse mail:'
const passwordText = '$ Votre mot de passe:'
const submitText = "[S'inscrire]"

const typeText = (fullText, refVar, speed = 50) => {
  refVar.value = ''
  let i = 0
  const interval = setInterval(() => {
    if (i < fullText.length) {
      refVar.value += fullText[i]
      i++
    } else {
      clearInterval(interval)
    }
  }, speed)
}

onMounted(() => {
  typeText(nameText, typedNameText)
})

const showEmailField = ref(false)
const showPasswordField = ref(false)
const showSubmitField = ref(false)

const handleNameInput = () => {
  if (name.value && !showEmailField.value) {
    showEmailField.value = true
    setTimeout(() => {
      typeText(emailText, typedEmailText)
    }, 500)
  }
}

const handleEmailInput = () => {
  if (email.value && !showPasswordField.value) {
    showPasswordField.value = true
    setTimeout(() => {
      typeText(passwordText, typedPasswordText)
    }, 500)
  }
}

const handlePasswordInput = () => {
  if (password.value && !showSubmitField.value) {
    showSubmitField.value = true
    setTimeout(() => {
      typeText(submitText, typedSubmitText)
    }, 500)
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await register(name.value, email.value, password.value)
    showNotification('Inscription réussie ! 🎉', 'success')
    console.log('Utilisateur inscrit:', data)
  } catch (error) {
    showNotification('Erreur lors de l’inscription ! 🚨', 'error')
    errorMessage.value = error.message || 'Erreur lors de l’inscription'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5">
    <div
      class="bg-black text-green-400 font-mono p-6 rounded-lg w-full max-w-md mx-auto mt-10 shadow-lg border border-green-600"
    >
      <h1 class="text-3xl font-bold text-green-400 pb-5">Inscription</h1>
      <p class="text-sm">CodeSnippet Terminal</p>

      <form @submit.prevent="handleSubmit">
        <p class="mt-2">{{ typedNameText }}</p>
        <p>
          &gt;
          <input
            type="text"
            v-model="name"
            @input="handleNameInput"
            class="bg-transparent text-green-400 border-none outline-none w-3/4"
            placeholder="Votre nom"
            required
          />
        </p>
        <div v-if="showEmailField">
          <p class="mt-2">{{ typedEmailText }}</p>
          <p>
            &gt;
            <input
              type="email"
              v-model="email"
              @input="handleEmailInput"
              class="bg-transparent text-green-400 border-none outline-none w-3/4"
              placeholder="email@example.com"
              required
            />
          </p>
        </div>
        <div v-if="showPasswordField">
          <p class="mt-2">{{ typedPasswordText }}</p>
          <p>
            &gt;
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              @input="handlePasswordInput"
              class="bg-transparent text-green-400 border-none outline-none w-3/4"
              placeholder="********"
              required
            />
          </p>
          <p class="mt-2">
            $
            <button type="button" @click="showPassword = !showPassword" class="text-blue-400 underline">
              {{ showPassword ? 'Masquer' : 'Afficher' }} le mot de passe
            </button>
          </p>
        </div>

        <div v-if="errorMessage" class="text-red-400 mt-2">$ {{ errorMessage }}</div>

        <div v-if="showSubmitField">
          <p class="mt-2">
            $
            <button type="submit" class="text-green-300 underline" :disabled="isLoading">
              {{ isLoading ? '[Inscription...]' : typedSubmitText }}
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
