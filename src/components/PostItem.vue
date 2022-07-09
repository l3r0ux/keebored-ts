<script setup lang="ts">
import { defineProps } from "vue";
import { Post } from "../models/post";

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <div
    class="relative w-full h-56 rounded-lg my-6 shadow-lg bg-primary-lighten2"
  >
    <div
      class="absolute bottom-0 bg-primary-lighten1 w-full text-primary-lighten2 text-base p-2 rounded-b-lg"
    >
      {{ post.chassis }}
    </div>
  </div>
</template>
