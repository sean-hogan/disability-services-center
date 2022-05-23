<template>
  <div class="home">
  <Hero 
    title="Welcome"
    body="Disability and Accessibility Services is committed to individualized assistance that honors the uniqueness of each student. We collaborate with instructors, staff, and stakeholders to create effective, equitable, and inclusive learning environments so that you can achieve your educational goals." 
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
