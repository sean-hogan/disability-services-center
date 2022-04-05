<template>
<div class="footer section">
    <div class="container-fluid">
     <footer>
         <div class="row mx-5 p-5">
            <div class="col-sm-3">
                <img src="https://csuglobal.edu/imgs/logo_csuglobal.png" alt="">
                <p class="mt-3"><strong>Colorado State University Global</strong>
                <br />585 Salida Way
                <br />Aurora, CO 80011</p>
                 
            </div><!--end col-->
            <div class="col-sm-9">


            <div class="row row-cols-1 row-cols-sm-2">

<div class="col-md-6 mb-md-0 mb-3 pt-3">

            <!-- Links -->
            <p class="h5 text-uppercase">CSU Global Disability & Accessibility Services</p>

<p><a href="mailto:ada@csuglobal.edu">ADA@csuglobal.edu</a>
<br><a href="tel:1-720-279-0650">(720) 279-0650</a></p>

          </div>

        
            </div><!--end row-cols-2-->

            </div><!--end links col--->
         </div><!--end row-->
     </footer>
    </div><!--end container-->
    </div><!--end section-->
    
</template>

<script>

export default {
  name: 'Footer',
  props: {

  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    border-top:1px solid #000;
    background-color:#f1f1f1;
}

#app .list-inline-item {
    font-size:.9rem;
}
</style>
