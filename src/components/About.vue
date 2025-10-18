<template>
  <section id="apropos" class="about">
    <div class="container">
      <!-- Hours Section -->
      <div class="hours-section">
        <div class="hours-container">
          <h2 class="hours-section-title">
            Nos <span class="text-gradient">Horaires</span>
          </h2>
          <p class="hours-section-subtitle">
            Venez nous rendre visite aux heures d'ouverture
          </p>
          
          <div class="hours-grid">
            <div class="hours-day-card">
              <div class="day-name">Lundi</div>
              <div class="day-hours">11h00 - 22h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Mardi</div>
              <div class="day-hours">11h00 - 22h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Mercredi</div>
              <div class="day-hours">11h00 - 22h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Jeudi</div>
              <div class="day-hours">11h00 - 22h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Vendredi</div>
              <div class="day-hours">11h00 - 23h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Samedi</div>
              <div class="day-hours">11h00 - 23h00</div>
            </div>
            <div class="hours-day-card">
              <div class="day-name">Dimanche</div>
              <div class="day-hours">12h00 - 21h00</div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content">
        <!-- Content -->
        <div class="about-text animate-slide-in-left">
          <h2 class="about-title">
            Notre <span class="text-gradient">Histoire</span>
          </h2>
          
          <p class="about-description">
            Depuis notre ouverture, L'ESCALE s'est imposé comme la référence du fast-food de qualité 
            dans la région. Notre passion pour la cuisine et notre engagement envers des ingrédients 
            frais et locaux font de nous bien plus qu'un simple restaurant.
          </p>
          
          <p class="about-description">
            Chaque plat est préparé avec amour et attention aux détails. Nos smash burgers sont 
            cuits à la perfection, notre riz crousty poulet vous fera voyager en Asie, et nos 
            milkshakes artisanaux sont un véritable délice.
          </p>

          <!-- Values -->
          <div class="about-values">
            <div class="value-item">
              <div class="value-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="value-title">Qualité</h3>
              <p class="value-description">Ingrédients frais et sélectionnés</p>
            </div>
            
            <div class="value-item">
              <div class="value-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="value-title">Rapidité</h3>
              <p class="value-description">Service rapide et efficace</p>
            </div>
            
            <div class="value-item">
              <div class="value-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="value-title">Communauté</h3>
              <p class="value-description">Un lieu de rencontre convivial</p>
            </div>
          </div>

          <button class="btn btn-primary">
            Découvrir notre équipe
          </button>
        </div>

        <!-- Image -->
        <div class="about-image animate-slide-in-right">
          <div class="about-image-bg"></div>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Équipe L'ESCALE"
          >
        </div>
      </div>

      <!-- Stats -->
      <div class="about-stats">
        <div class="stats-grid">
          <div class="stat-item animate-fade-in">
            <div class="stat-number">500+</div>
            <div class="stat-label">Clients satisfaits</div>
          </div>
          <div class="stat-item animate-fade-in">
            <div class="stat-number">50+</div>
            <div class="stat-label">Plats au menu</div>
          </div>
          <div class="stat-item animate-fade-in">
            <div class="stat-number">3</div>
            <div class="stat-label">Années d'expérience</div>
          </div>
          <div class="stat-item animate-fade-in">
            <div class="stat-number">4.8</div>
            <div class="stat-label">Note moyenne</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About component logic
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
