<script setup lang="ts">
import "@/assets/tailwind.css";
</script>

<template>
  <!-- TODO: put side drawer here -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/detail">Detail</router-link>
  </nav> -->

  <!-- TODO: put header here -->
  <header
    class="fixed top-0 left-0 flex items-center justify-center w-full h-14 text-2xl bg-primary-base text-primary-lighten2"
  >
    <!-- TODO: replace img with svg icon -->
    <button class="absolute left-0 ml-4 w-6 h-6">
      <img src="../public/img/icons/menu.png" alt="Hamburger menu" />
    </button>
    <span>*icon* KeeBORED</span>
  </header>

  <router-view />

  <!-- TODO: put footer here -->
  <footer
    class="fixed bottom-0 left-0 flex items-center justify-around w-full h-14 bg-primary-base"
  >
    <span>home</span>
    <span>sign in</span>
    <span>search</span>
  </footer>
</template>
