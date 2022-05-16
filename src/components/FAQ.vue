<template>
<section class="faq section mb-5" id="faq" aria-labelledby="faq-heading">

<div class="container px-4 py-5">
  <div class="text-center">
  <h2 id="faq-heading" class="display-3 mb-5">FAQ</h2>

  </div>
         <div class="row justify-content-center">
           <div class="col-md-8">

         <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How do I contact Disability and Accessibility Services?
      </button>
    </h3>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can contact Disability and Accessibility Services by emailing <a href="mailto:ada@csuglobal.edu">ada@csuglobal.edu</a> or calling 720-279-0650. Our office is open Monday through Friday and we strive to respond within 1 business day. At peak times, like term starts, our response time may be 2 business days.
        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       What are academic accommodations?
      </button>
    </h3>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Academic accommodations are any <b>modification or adjustment in the learning environment</b> that ensures students with disabilities can participate in a course, program, facility, activity, or service. Accommodations ensure that students with disabilities have equal access and rights to students without disabilities. Essentially, academic accommodations create equal educational opportunities.
        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How do I request academic accommodations?
      </button>
    </h3>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Register with us, and submit accommodation request paperwork through the student portal. Refer to the to <router-link to="/registration">Registering And Requesting Accommodations</router-link> page for more information.

        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Do I have to use the approved accommodations in every class I take at CSU Global?
      </button>
    </h3>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><b>No</b>. It is your choice which courses to use approved accommodations. If you choose to use your accommodations in a course, you must request a Faculty Notification letter from Disability and Accessibility Services and then share that letter with your faculty. Faculty must honor accommodations once you send the Faculty Notification Letter. If you wait to send the letter until week 5 of the term, the accommodations will not be retroactive to the completed weeks of the term.</div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          What are Faculty Notification Letters and/or how do I use accommodations each term?
      </button>
    </h3>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Faculty Notification Letters are the form you will use to notify faculty of approved academic accommodations. Refer to the <router-link to="/information/faculty-notification">Faculty Notification Letters and Using Accommodations Each Term</router-link> page for more information. 
      </div>
    </div>
  </div><!--end accordion item-->

    <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
         What should I do if my faculty is not honoring my accommodations?
      </button>
    </h3>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">First, reach out to your faculty by email or phone. This may genuinely be an accident that can be corrected by a conversation or email reminding the instructor. If the issue continues or the faculty is not responsive, contact Disability and Accessibility Services at <a href="mailto:ada@csuglobal.edu">ada@csuglobal.edu</a> or 720-279-0650. We will work together to communicate with the faculty and ensure your accommodations are honored in the course.
      </div>
    </div>
  </div><!--end accordion item-->



</div><!--end accordion-->










           </div><!--end accordion col-->
         </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->

</template>

<script>
export default {
  name: 'FAQ',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accordion-button {
  font-size:1.3rem;
}
.accordion-body {
  font-size:1.2rem;
}
</style>
