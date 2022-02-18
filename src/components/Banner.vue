<template>
<div class="site-header">
  <div class="container p-5">
  
  <div style="background:rgba(0,0,0,0.7);" class="p-5">
    <h1 class="display-3 text-center">Welcome!</h1>
    <p class="mb-5 text-center">CSU Global Disability Services - Your Partner in Educational Success</p>


	<p class="text-center"> 
    <router-link to="/registration"><button type="button" class="btn btn-lg btn-outline-info mb-3 me-3">Get Started</button></router-link>
  
  <a href="mailto:ADA@csuglobal.edu?subject=Faculty%20Notification%20Request&amp;body=Hi There, I would like to request a faculty notification letter for my courses."><button type="button" class="btn btn-lg btn-outline-info mb-3 me-3">Request Faculty Notification</button></a>
 
  <a href="http://csuglobal.libguides.com/disability_services/contact_us"><button type="button" class="btn btn-lg btn-outline-info mb-3">Get Counseling</button></a>

</p>
  
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Banner',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.site-header {
    background-image: url(https://libapps.s3.amazonaws.com/accounts/129967/images/dis-srv-banner-3.png);
    background-size: cover;
    min-height: 400px;
    color: #fff;
}

#app h1.display-3 {
  font-weight:400;
}
</style>
