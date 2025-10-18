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
            <button @click="toggleMobileMenu" class="mobile-menu-btn" :class="{ 'active': isMobileMenuOpen }">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>

          <!-- Mobile Menu -->
          <Transition name="mobile-menu">
            <div v-if="isMobileMenuOpen" class="mobile-menu">
              <div class="mobile-menu-content">
                <a href="#accueil" class="nav-link-mobile" @click="closeMobileMenu">
                  <span>Accueil</span>
                </a>
                <a href="#menu" class="nav-link-mobile" @click="closeMobileMenu">
                  <span>Menu</span>
                </a>
                <a href="#apropos" class="nav-link-mobile" @click="closeMobileMenu">
                  <span>À propos</span>
                </a>
                <a href="#contact" class="nav-link-mobile" @click="closeMobileMenu">
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </Transition>
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
/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 1001;
  transition: all 0.3s ease;
}

.hamburger-line {
  width: 1.5rem;
  height: 2px;
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hamburger-line:nth-child(1) {
  margin-bottom: 4px;
}

.hamburger-line:nth-child(2) {
  margin-bottom: 4px;
}

/* Hamburger Animation */
.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.1);
  border-top: none;
  overflow: hidden;
  z-index: 1000;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 0.5rem;
}

.nav-link-mobile {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #374151;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-link-mobile::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  opacity: 0.1;
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-link-mobile:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
  transform: translateX(8px);
}

.nav-link-mobile:hover::before {
  left: 0;
}

.nav-icon {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.nav-link-mobile:hover .nav-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Mobile Menu Animations */
.mobile-menu-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

/* Staggered animation for menu items */
.mobile-menu-enter-active .nav-link-mobile {
  animation: slideInUp 0.4s ease forwards;
}

.mobile-menu-enter-active .nav-link-mobile:nth-child(1) { animation-delay: 0.1s; }
.mobile-menu-enter-active .nav-link-mobile:nth-child(2) { animation-delay: 0.15s; }
.mobile-menu-enter-active .nav-link-mobile:nth-child(3) { animation-delay: 0.2s; }
.mobile-menu-enter-active .nav-link-mobile:nth-child(4) { animation-delay: 0.25s; }

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.w-full {
  width: 100%;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>
