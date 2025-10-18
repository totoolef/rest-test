<template>
  <section id="menu" class="menu">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          Notre <span class="text-gradient">Menu</span>
        </h2>
        <p class="section-subtitle">
          Découvrez nos spécialités culinaires préparées avec des ingrédients frais et de qualité
        </p>
      </div>

      <!-- Menu Categories -->
      <div class="menu-categories">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'category-btn',
            activeCategory === category.id ? 'active' : ''
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Menu Items -->
      <div class="menu-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="menu-item"
        >
          <!-- Item Image -->
          <div class="menu-item-image">
            <img 
              :src="item.image" 
              :alt="item.name"
            >
            <div class="menu-item-price">{{ item.price }}€</div>
          </div>

          <!-- Item Content -->
          <div class="menu-item-content">
            <h3 class="menu-item-title">{{ item.name }}</h3>
            <p class="menu-item-description">{{ item.description }}</p>
            
            <!-- Ingredients -->
            <div class="menu-item-ingredients">
              <span 
                v-for="ingredient in item.ingredients" 
                :key="ingredient"
                class="ingredient-tag"
              >
                {{ ingredient }}
              </span>
            </div>

            <!-- Actions -->
            <div class="menu-item-actions">
              <div class="menu-item-rating">
                <svg class="rating-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="rating-text">{{ item.rating }}/5</span>
              </div>
              
              <button class="btn btn-primary">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Special Offers -->
      <div class="special-offer">
        <h3>Offres Spéciales</h3>
        <p>Menu Complet Burger + Frites + Boisson pour seulement 15€</p>
        <button class="btn btn-secondary">
          Profiter de l'offre
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('burgers')

const categories = [
  { id: 'burgers', name: 'Burgers' },
  { id: 'plats', name: 'Plats' },
  { id: 'boissons', name: 'Boissons' },
  { id: 'desserts', name: 'Desserts' }
]

const menuItems = [
  // Burgers
  {
    id: 1,
    name: 'Smash Burger Classique',
    description: 'Steak haché, fromage cheddar, salade, tomate, oignon, sauce spéciale',
    price: 12,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Steak haché', 'Cheddar', 'Salade', 'Tomate'],
    rating: 4.8
  },
  {
    id: 2,
    name: 'Smash Burger Bacon',
    description: 'Steak haché, bacon croustillant, fromage, salade, sauce BBQ',
    price: 14,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Steak haché', 'Bacon', 'Fromage', 'Sauce BBQ'],
    rating: 4.9
  },
  {
    id: 3,
    name: 'Smash Burger Végétarien',
    description: 'Steak végétal, fromage, avocat, salade, tomate, sauce vegan',
    price: 13,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Steak végétal', 'Avocat', 'Fromage', 'Sauce vegan'],
    rating: 4.7
  },
  
  // Plats
  {
    id: 4,
    name: 'Riz Crousty Poulet',
    description: 'Riz parfumé, poulet croustillant, légumes sautés, sauce teriyaki',
    price: 11,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Riz', 'Poulet', 'Légumes', 'Sauce teriyaki'],
    rating: 4.6
  },
  {
    id: 5,
    name: 'Poulet Dynamite',
    description: 'Poulet épicé, riz, légumes croquants, sauce piquante',
    price: 13,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Poulet', 'Riz', 'Légumes', 'Sauce piquante'],
    rating: 4.8
  },
  
  // Boissons
  {
    id: 6,
    name: 'Milkshake Vanille',
    description: 'Milkshake crémeux à la vanille, chantilly, cerise',
    price: 5,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Lait', 'Vanille', 'Chantilly'],
    rating: 4.5
  },
  {
    id: 7,
    name: 'Milkshake Chocolat',
    description: 'Milkshake au chocolat, chantilly, pépites de chocolat',
    price: 5,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Lait', 'Chocolat', 'Pépites'],
    rating: 4.7
  },
  {
    id: 8,
    name: 'Milkshake Fraise',
    description: 'Milkshake aux fraises fraîches, chantilly, fraises',
    price: 5,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Lait', 'Fraises', 'Chantilly'],
    rating: 4.6
  },
  
  // Desserts
  {
    id: 9,
    name: 'Tiramisu Caramel Kit Kat',
    description: 'Caramel coulant et éclats de Kit Kat dans un tiramisu fondant fait maison',
    price: 4.9,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredients: ['Mascarpone', 'Caramel', 'Kit Kat', 'Café', 'Cacao'],
    rating: 4.9
  }
]

const filteredItems = computed(() => {
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
