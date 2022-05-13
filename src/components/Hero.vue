

<template>
  <header class="big-hero">
    <div class="container col-xxl-8 py-5">
    <div class="row py-5">
      
      <div class="col-12 col-lg-8">
        <h1 class="hero-title lh-1 mb-3">{{ title }}
          
        </h1>
        <p class="lead">{{ body }}</p>
       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <router-link to="/registration" class="btn btn-lg btn-primary mb-3 me-3 rounded-pill">Register With Us</router-link>
  
        <router-link to="/information/faculty-notification" class="btn btn-lg btn-outline-primary rounded-pill mb-3">Faculty Notifications</router-link>
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

