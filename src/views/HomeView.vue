<script setup lang="ts">
import dummyPosts from "@/data";
import PostItem from "@/components/PostItem.vue";

const posts = dummyPosts;
</script>

<template>
  <div v-for="post in posts" :key="post.postId">
    <PostItem :post="post" />
  </div>
</template>
