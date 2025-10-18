<template>
  <div class="relative overflow-hidden rounded-2xl">
    <img 
      :src="src" 
      :alt="alt"
      :class="[
        'w-full h-full object-cover transition-transform duration-500',
        hover ? 'group-hover:scale-110' : ''
      ]"
      loading="lazy"
    >
    <div v-if="overlay" class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  hover: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: false
  }
})
</script>
