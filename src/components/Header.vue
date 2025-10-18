<template>
      <header class="header">
        <nav class="nav container">
          <div class="nav-content">
            <!-- Logo -->
            <a href="#accueil" class="logo">
              <div class="logo-icon">L</div>
              <span class="logo-text">L'ESCALE</span>
            </a>

            <!-- Desktop Navigation -->
            <ul class="nav-links">
              <li><a href="#accueil" class="nav-link">Accueil</a></li>
              <li><a href="#menu" class="nav-link">Menu</a></li>
              <li><a href="#apropos" class="nav-link">À propos</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="mobile-menu-btn">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div v-if="isMobileMenuOpen" class="mobile-menu">
            <div class="mobile-menu-content">
              <a href="#accueil" class="nav-link-mobile" @click="closeMobileMenu">Accueil</a>
              <a href="#menu" class="nav-link-mobile" @click="closeMobileMenu">Menu</a>
              <a href="#apropos" class="nav-link-mobile" @click="closeMobileMenu">À propos</a>
              <a href="#contact" class="nav-link-mobile" @click="closeMobileMenu">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    </template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.mobile-menu {
  display: none;
  margin-top: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link-mobile {
  color: #374151;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-link-mobile:hover {
  color: #ef4444;
}

.w-full {
  width: 100%;
}

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
}
</style>
