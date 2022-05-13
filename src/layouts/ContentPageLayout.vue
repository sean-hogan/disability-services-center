<template>
  <div class="section container pb-5">
    <div class="row pt-5">

 <div class="clearfix d-flex justify-content-center">
        <div class="col-sm-10">
          <main id="main-content">
        <header class="header mb-4">
    <slot name="header"></slot>
        </header>

        <article>
              <slot name="content"></slot>          
        </article>
          </main>
    
  </div><!--end col-->
    </div><!--end clearfix-->
    </div><!--end row-->
    
  </div><!--End Container -->


</template>
