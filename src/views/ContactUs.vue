<template>
  <div class="contact-us section container pb-5">
    <div class="banner text-center mb-5">
      <h1 class="display-3 my-4">Contact Us</h1>
      <p class="lead">Students can request a phone appointment or email Disability and Accessibility Services to discuss the accommodations process, implementation of approved accommodations, course or faculty concerns, and any other applicable inquiries. Our office is open Monday through Friday and we strive to respond to all inquiries and outreach within 1 business day. At peak times, like term starts, our response time may be 2 business days.</p>

    </div><!--end banner-->


      <div class="row row-cols-1 mb-3 justify-content-center">

      <div class="col-lg-6 mb-4">
        <div class="card mb-4 h-100">
          <div class="card-body px-4">
            <h2 class="card-title">DISABILITY & ACCESSIBILITY SERVICES</h2>
            <ul class="list-unstyled mt-3 mb-4">
              <li><i class="bi bi-envelope me-3"></i>Email: <a href="ADA@csuglobal.edu">ada@csuglobal.edu</a></li>
              <li><i class="bi bi-phone me-3"></i>Phone: <a href="tel:1-720-279-0560">(720) 279-0650</a></li>
              <li><b>FAX:</b> (720) 943-2863</li>
              <li><i class="bi bi-envelope me-3"></i>Mailing Address:
              <br />CSU Global, Disability and Accessibility Services
              <br />585 Salida Way
              <br />Aurora, CO 80011
              </li>
            </ul>
            <router-link to="/registration" class="btn btn-lg btn-outline-primary rounded-pill me-3 mb-3 mb-lg-0">Register With Us</router-link>
            <a href="mailto:ADA@csuglobal.edu?subject=Faculty%20Notification%20Request&body=Hi%20There,%20I%20would%20like%20to%20request%20a%20faculty%20notification%20letter%20for%20my%20courses." class="btn btn-lg btn-primary rounded-pill">Request Faculty Notification<i class="bi bi-envelope-fill ms-2"></i></a>
          </div>
        </div>
      </div><!--/col-->

    </div><!--end row-->
    


  </div>  <!--End Container -->
  <!-- <FAQ /> -->

</template>


<script>
// import FAQ from '@/components/FAQ.vue'
export default {
  name: "ContactUs",
  components: {
    // FAQ,
  },
};
</script>


