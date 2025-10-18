<template>
  <section id="contact" class="contact">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          Nous <span class="text-gradient">Contacter</span>
        </h2>
        <p class="section-subtitle">
          Une question ? Une réservation ? N'hésitez pas à nous contacter, nous serons ravis de vous aider !
        </p>
      </div>

      <div class="contact-content">
        <!-- Contact Form -->
        <div class="contact-form">
          <h3 class="form-title">Envoyez-nous un message</h3>
          
          <form @submit.prevent="submitForm" class="form">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Prénom</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  class="form-input"
                  placeholder="Votre prénom"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Nom</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  class="form-input"
                  placeholder="Votre nom"
                  required
                >
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                class="form-input"
                placeholder="votre@email.com"
                required
              >
            </div>

            <div class="form-group">
              <label class="form-label">Téléphone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="form-input"
                placeholder="06 12 34 56 78"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Sujet</label>
              <select 
                v-model="form.subject"
                class="form-select"
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="reservation">Réservation</option>
                <option value="commande">Commande</option>
                <option value="question">Question générale</option>
                <option value="reclamation">Réclamation</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="form-textarea"
                placeholder="Votre message..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="btn btn-primary form-submit"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else class="loading-content">
                <svg class="loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <!-- Info Cards -->
          <div class="info-card">
            <h3 class="info-title">Informations</h3>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="info-content">
                  <h4 class="info-content-title">Adresse</h4>
                  <p class="info-content-text">123 Rue de la Gastronomie<br>75001 Paris, France</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="info-content">
                  <h4 class="info-content-title">Téléphone</h4>
                  <p class="info-content-text">01 23 45 67 89</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="info-content">
                  <h4 class="info-content-title">Email</h4>
                  <p class="info-content-text">contact@lescale.fr</p>
                </div>
              </div>
            </div>
          </div>


          <!-- Social Media -->
          <div class="social-card">
            <h3 class="social-title">Suivez-nous</h3>
            
            <div class="social-links">
              <a href="#" class="social-link twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.604 3.447-2.04 1.587-4.61 2.54-7.4 2.54-.48 0-.961-.028-1.44-.084 2.652 1.699 5.8 2.69 9.18 2.69 11.012 0 17.024-9.12 17.024-17.024 0-.258-.006-.526-.018-.784 1.169-.844 2.187-1.9 2.992-3.104z"/>
                </svg>
                <span>@lescale_twitter</span>
              </a>
              <a href="#" class="social-link pinterest">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
                <span>@lescale_pinterest</span>
              </a>
              <a href="#" class="social-link instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@lescale_instagram</span>
              </a>
              <a href="#" class="social-link facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <span>@lescale_facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from '../composables/useToast.js'

const { success, error } = useToast()
const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    success('Message envoyé !', 'Nous vous répondrons dans les plus brefs délais.')
  } catch (err) {
    error('Erreur', 'Une erreur est survenue lors de l\'envoi du message.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.form-submit {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
</style>