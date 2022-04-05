<template>
  <div class="home">
  <Hero 
    title="Welcome"
    body="Disability & Accessibility Services provides students with resources, guidance, and materials to help you achieve your academic goals" 
    imgsrc="hello.svg" />
  <main id="main-content">
  <FAQ />
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import FAQ from '@/components/FAQ.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    FAQ,

  }
}
</script>
