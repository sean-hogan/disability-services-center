<template>
  <div class="home">
  <Banner />
  <Features />

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Features from '@/components/Features.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Features,

  }
}
</script>
