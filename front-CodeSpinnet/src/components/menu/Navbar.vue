<template>
  <div class="navbar bg-base-100 px-4">
    <!-- Section gauche : Logo + Barre de recherche -->
    <div class="flex flex-1 justify-start">
      <a class="btn btn-ghost text-xl">CodeSnippet</a>
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
      <button type="button" class="btn">New CSnippet</button>
    </div>

    <!-- Section droite : Liens + Profil -->
    <div class="flex justify-end gap-2">
      <nav class="hidden md:flex">
        <a href="#" class="btn btn-ghost">À la une</a>
        <a href="#" class="btn btn-ghost">Tendances</a>
        <a href="#" class="btn btn-ghost">Privés</a>
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
