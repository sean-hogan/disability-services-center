

<template>
  <header class="big-hero">
    <div class="container col-xxl-8 py-5">
    <div class="row py-5">
      
      <div class="col-12 col-lg-8">
        <h1 class="hero-title lh-1 mb-3 text-center text-lg-start">{{ title }}
          
        </h1>
        <p class="lead text-center text-lg-start">{{ body }}</p>
       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <router-link to="/registration" class="btn btn-lg btn-primary mb-3 me-3 rounded-pill">Register With Us</router-link>
  
        <a href="mailto:ADA@csuglobal.edu?subject=Faculty%20Notification%20Request&body=Hi%20There,%20I%20would%20like%20to%20request%20a%20faculty%20notification%20letter%20for%20my%20courses." class="btn btn-lg btn-outline-primary rounded-pill mb-3">Request Faculty Notification Letter</a>
        </div>
      </div>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    body: String,
    imgsrc: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.big-hero{
  background-image: url(https://images.prismic.io/csug/f2f98746-f47b-46a6-b7d7-bed3cd9ef987_Appeals-Center-UI-Header-1600x600px-A2.jpg);
  background-size:cover;
}
.hero-title {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size:5rem;
}
.lead {
  font-family: 'Source Sans Pro', sans-serif;
}
.btn {
  text-decoration:none;
}



</style>

