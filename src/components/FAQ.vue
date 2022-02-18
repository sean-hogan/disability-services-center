<template>
<section class="faq section" id="faq" aria-labelledby="faq-heading">

<div class="container px-4 py-5" data-aos="fade" data-aos-duration="500" data-aos-once="true">
  <div class="text-center">
  <h2 id="faq-heading">FAQ</h2>

  </div>
         <div class="row justify-content-center">
           <div class="col-md-8">

             <div class="faq-item"><a href="https://csuglobalhelp.knowledgeowl.com/help/contacting-disability-and-accessibility-services" target="_blank">How do I contact Disability and Accessibility Services?<i class="bi bi-box-arrow-up-right"></i></a></div>
             <div class="faq-item"><a href="https://csuglobalhelp.knowledgeowl.com/help/requesting-academic-accommodations" target="_blank">How do I request academic accommodations?<i class="bi bi-box-arrow-up-right"></i></a></div>
             <div class="faq-item"><a href="https://csuglobalhelp.knowledgeowl.com/help/faculty-notification-letters-and-using-accommodations-each-term" target="_blank">What are Faculty Notification Letters and/or how do I use accommodations each term?<i class="bi bi-box-arrow-up-right"></i></a></div>





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

.faq-item {
  padding:2rem 1rem;
  border-bottom:1px solid grey;
  font-size:1.2rem;
}

.faq-item:hover {
  background:#eee;
}

#app .bi {
  margin-left:1rem;
}

</style>
