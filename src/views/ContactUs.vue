<template>
  <div class="contact-us section container pb-5">
    <div class="banner text-center mb-5">
      <h1 class="display-3 my-4">Contact Us</h1>
      <p class="lead">
        We're here to help, simply use he option below that works best for you
      </p>
    </div><!--end banner-->


      <div class="row row-cols-1 row-cols-md-2 mb-3">

      <div class="col">
        <div class="card mb-4">
          <div class="card-body p-4">
            <h2 class="card-title">DISABILITY SERVICES</h2>
            <ul class="list-unstyled mt-3 mb-4">
              <li><i class="bi bi-envelope me-3"></i><a href="ADA@csuglobal.edu">ADA@csuglobal.edu</a></li>
              <li><i class="bi bi-phone me-3"></i><a href="tel:1-720-279-0560">(720) 279-0560</a></li>
              <li><b>FAX:</b> (720) 943-2863</li>
            </ul>
            <button type="button" class="btn btn-lg btn-outline-primary rounded-pill me-3">Register With Us</button>
            <button type="button" class="btn btn-lg btn-primary rounded-pill">Request Faculty Notification<i class="bi bi-envelope-fill ms-2"></i></button>
          </div>
        </div>
      </div><!--/col-->

      <div class="col">
        <div class="card mb-4">
          <div class="card-body p-4">
            <h2 class="card-title">COUNSELING SERVICES</h2>
            
              <p>CSU Global has partnered with ESPYR to offer 24/7 Counseling Services. Simply <a href="tel:1-866-734-5890">call the counseling number at (866) 734-5890</a> or go to the Student Assistance Portal and select "Contact Us".</p>

                <p><i class="bi bi-phone"></i>&nbsp;&nbsp;<a href="tel:1-866-734-5890">(866) 734-5890</a></p>
                <div>


              
                <form action="https://care.espyr.com" method="post">
                <input name="password" value="CSUGlobal" type="hidden">
                <button type="submit" class="btn btn-lg btn-outline-primary rounded-pill" formtarget="_blank">Go To Counseling Services <i class="bi bi-box-arrow-up-right ms-2"></i></button>
                </form>
                </div>
                

          </div>
        </div>
      </div><!--/col-->


    </div><!--end row-->
    


  </div>  <!--End Container -->
  <FAQ />
<!-- 
<div class="col-sm">
<h4>COUNSELING SERVICES</h4>
<p>CSU Global has partnered with ESPYR to offer 24/7 Counseling Services. Simply <a href="tel:1-866-734-5890">call the counseling number at (866) 734-5890</a> or go to the Student Assistance Portal and select "Contact Us".</p>
<p><span class="oi oi-phone"></span>&nbsp;&nbsp;<a href="tel:1-866-734-5890">(866) 734-5890</a></p>
<p>
</p><form action="https://espyr.com/sign-in/" method="post">
<input name="password" value="CSUGlobal" type="hidden">
<button type="submit" class="btn btn-info" formtarget="_blank">Go To Counseling Services <span class="oi oi-arrow-right"></span></button>
</form><p></p>

</div>
</div>
</div> -->

</template>


<script>
import FAQ from '@/components/FAQ.vue'
export default {
  name: "ContactUs",
  components: {
    FAQ,
  },
};
</script>


