<template>
  <section id="accueil" class="hero">
    <!-- Background -->
    <div class="hero-bg">
      <div class="hero-bg-image"></div>
    </div>

    <!-- Floating Elements -->
    <div class="floating-elements">
      <div class="floating-element">🍔</div>
      <div class="floating-element">🍗</div>
      <div class="floating-element">🥤</div>
      <div class="floating-element">🍟</div>
      <div class="floating-element">🥗</div>
      <div class="floating-element">🧀</div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="animate-fade-in">
        <h1 class="hero-title">
          Bienvenue à
          <span class="text-gradient">L'ESCALE</span>
        </h1>
        
        <p class="hero-subtitle">
          Découvrez nos délicieux smash burgers, riz crousty poulet, poulet dynamite et milkshakes artisanaux. 
          Une expérience culinaire unique qui vous fera voyager.
        </p>

        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
            </svg>
            <span>Voir le Menu</span>
          </a>
          
          <a href="#apropos" class="btn btn-secondary">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Voir les horaires</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-indicator-inner">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero component logic
</script>
