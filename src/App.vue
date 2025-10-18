<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ToastContainer from './components/ToastContainer.vue'
import BackToTop from './components/BackToTop.vue'
import { useSmoothScroll } from './composables/useSmoothScroll.js'

// Initialize smooth scrolling
useSmoothScroll()
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <Menu />
      <About />
      <Contact />
    </main>
    <Footer />
    <ToastContainer />
    <BackToTop />
  </div>
</template>

<style>
/* Global styles are handled in main.css */
</style>
