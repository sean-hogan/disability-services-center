<template>
  <div class="home">
  <Hero 
    title="Welcome"
    body="The Disability Services Center provides students with resources, guidance, and materials to help you achieve your academic goals" 
    imgsrc="hello.svg" />
  <main id="main-content">
  <Features />
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Features from '@/components/Features.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Features,

  }
}
</script>
