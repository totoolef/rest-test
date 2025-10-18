<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Floating Food Icons -->
    <div 
      v-for="(element, index) in floatingElements" 
      :key="index"
      :class="[
        'absolute text-4xl opacity-20 animate-bounce-slow',
        element.position
      ]"
      :style="{ animationDelay: `${element.delay}s` }"
    >
      {{ element.icon }}
    </div>
    
    <!-- Floating Circles -->
    <div 
      v-for="(circle, index) in floatingCircles" 
      :key="`circle-${index}`"
      :class="[
        'absolute rounded-full bg-gradient-primary opacity-10 animate-pulse-slow',
        circle.position
      ]"
      :style="{ 
        width: circle.size, 
        height: circle.size,
        animationDelay: `${circle.delay}s`
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const floatingElements = ref([
  { icon: '🍔', position: 'top-20 left-10', delay: 0 },
  { icon: '🍗', position: 'top-40 right-20', delay: 1 },
  { icon: '🥤', position: 'bottom-20 left-20', delay: 2 },
  { icon: '🍟', position: 'top-60 left-1/4', delay: 3 },
  { icon: '🥗', position: 'bottom-40 right-1/4', delay: 4 },
  { icon: '🧀', position: 'top-80 right-10', delay: 5 }
])

const floatingCircles = ref([
  { position: 'top-32 right-1/3', size: '60px', delay: 0.5 },
  { position: 'bottom-32 left-1/3', size: '80px', delay: 1.5 },
  { position: 'top-1/2 left-10', size: '40px', delay: 2.5 },
  { position: 'bottom-1/2 right-10', size: '100px', delay: 3.5 }
])
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

.animate-pulse-slow {
  animation: pulse 4s infinite;
}
</style>
