<script setup lang="ts">
import "@/assets/tailwind.css";
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/detail">Detail</router-link>
  </nav>
  <div class="bg-primary-base text-primary-lighten2">hi</div>
  <router-view />
</template>
