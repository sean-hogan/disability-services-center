<template>
<navbar></navbar>
  <router-view></router-view>
<Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactUs",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">

</style>
