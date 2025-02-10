<script setup>
import { useModalCSnippet } from '@/composables/useModalCSnippet.js';
import ModalForm from '@/components/modals/createCSnippetModal.vue';

const { isModalOpen, openModal, closeModal, formData } = useModalCSnippet();
</script>

<template>
  <div class="navbar bg-base-100 px-4">
    <!-- Section gauche : Logo + Barre de recherche -->
    <div class="flex flex-1 justify-start">
      <router-link to="/" class="btn btn-ghost">CodeSnippet</router-link>
      <div class="form-control">
        <input
          type="text"
          placeholder="Rechercher..."
          class="input input-bordered w-32 md:w-64"
        />
      </div>
    </div>

    <!-- Section centre : Bouton "New CSnippet" -->
    <div class=" flex flex-1 justify-center">
      <button @click="openModal" type="button" class="btn">New CSnippet</button>
      <ModalForm :isOpen="isModalOpen" :closeModal="closeModal" :formData="formData" />
    </div>

    <!-- Section droite : Liens + Profil -->
    <div class="flex justify-end gap-2">
      <nav class="hidden md:flex">
        <router-link to="/" class="btn btn-ghost">À la une</router-link>
        <router-link to="/trend" class="btn btn-ghost">Tendances</router-link>
        <router-link to="/private" class="btn btn-ghost">Privé</router-link>
      </nav>

      <!-- Menu Profil -->
      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </button>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a class="justify-between">Profile<span class="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
