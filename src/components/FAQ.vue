<template>
<section class="faq section" id="faq" aria-labelledby="faq-heading">

<div class="container px-4 py-5" data-aos="fade" data-aos-duration="500" data-aos-once="true">
  <div class="text-center">
  <h2 id="faq-heading">FAQ</h2>

  </div>
         <div class="row justify-content-center">
           <div class="col-md-8">

         <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Are CSU Global Direct these courses transferable?
      </button>
    </h3>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, CSU Global Direct courses are accredited through the Higher Learning Commission. We recommend that you also check with your selected institution regarding the transfer credit.</div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        When do CSU Global Direct classes begin?
      </button>
    </h3>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our flexible <router-link class="link-primary text-decoration-none" to="/calendar">Academic Calendar</router-link> aligns with the CSU Global academic calendar, which means we have classes starting at regular intervals throughout the year. <router-link class="link-primary text-decoration-none" to="/get-started#register">Enroll now</router-link> to start classes next term.</div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How do I enroll in a CSU Global Direct course?
      </button>
    </h3>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">It is as simple as selecting your courses and then paying the tuition. <router-link class="link-primary text-decoration-none" to="/get-started">Register now</router-link>.</div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Is federal financial aid available for CSU Global Direct courses?
      </button>
    </h3>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No, Federal Financial Aid (Pell Grants, Federal Subsidized Loan, Federal Direct Unsubsidized Loan, Parent Plus Loan, Grad Plus Loan) is not available for students who take courses through CSU Global Direct. These courses are not eligible for any Federal Financial Aid as they are independent courses that do not lead to a degree from CSU Global.</div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
         What is the refund policy?
      </button>
    </h3>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Student who choose to drop their course are eligible for a refund of their tuition through the first week of the term.
        <ul>
          <li>100% if the course is dropped on or before the seventh day (census date)</li>
          <li>$0 after first week</li>
        </ul>
      </div>
    </div>
  </div><!--end accordion item-->


  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
        How much do CSU Global Direct courses cost?
      </button>
    </h3>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As a not-for-profit public university, our goal is to make your education affordable and attainable. Tuition rates are $350 per undergraduate credit hour. There are no additional student fees or out-of-state premiums at CSU Global, so your tuition and materials are the only things you’ll pay.</div>
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
.accordion-button:not(.collapsed) {
  color:#fff;
  background-color:#9e1831;
}

.accordion-body {
  margin-left:2rem;
}

.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:focus {
  box-shadow:none;
}

#faq-heading:after {
    content: "";
    display: block;
    margin: 20px auto;
    position: relative;
    width: 60px;
    height: 3px;
    background-color: #ddd;
    margin-top: 10px;
}

</style>
