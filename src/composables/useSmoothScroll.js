import { onMounted, onUnmounted } from 'vue'

export const useSmoothScroll = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavClick = (event) => {
    const href = event.target.getAttribute('href')
    if (href && href.startsWith('#')) {
      event.preventDefault()
      const elementId = href.substring(1)
      scrollToElement(elementId)
    }
  }

  onMounted(() => {
    // Add click listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick)
    })
  })

  onUnmounted(() => {
    // Clean up listeners
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.removeEventListener('click', handleNavClick)
    })
  })

  return {
    scrollToElement,
    scrollToTop
  }
}
