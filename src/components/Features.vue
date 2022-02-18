<template>
<div class="features section bg-light">
    <div class="container px-4 py-5">
<div class="row s-lg-row">
<!-- Marketing Icons Section -->
<div class="col-lg-4 mb-4 d-flex align-items-stretch">

<!-- Card 1 -->

<div class="card shadow-lg">
<div class="card-body">
<h2 class="card-title">INFORMATION</h2>
<p class="card-text lead">These pages contain information about our services and procedures.

</p><ul class="list-unstyled mt-4">

<li>
    <router-link to="/information/academic-accomodations"><span class="bi bi-plus"></span>Academic Accomodations</router-link>
</li>
<li><a href="https://csuglobal.libguides.com/ld.php?content_id=56545145" target="_blank"><span class="bi bi-plus"></span>Disability Services Handbook</a></li>
<li><router-link to="/information/grievance-procedure"><span class="bi bi-plus"></span>Grievance Procedure</router-link></li>
<li><router-link to="/information/support-documentation"><span class="bi bi-plus"></span>Support Documentation</router-link></li>
<li><router-link to="/information/temporary-conditions"><span class="bi bi-plus"></span>Temporary Conditions</router-link></li>

</ul>
<p></p>
</div>
</div><!--/card-->
</div><!-- /col -->

<div class="col-lg-4 mb-4 d-flex align-items-stretch">

<!-- Card 2 -->

<div class="card">
<div class="card-body">
<h2 class="card-title">SERVICES</h2>
<p class="card-text lead">Resources and Services that can help you achieve your goals.

</p><ul class="list-unstyled mt-4">
<li><a href="https://globalconnect.csuglobal.edu/hub/csu_global/resources/students-with-disabilities" target="_blank"><span class="bi bi-plus"></span>Career Resources</a></li>
<li><router-link to="/services/colorado-community-resources"><span class="bi bi-plus"></span>Colorado Community Resources</router-link></li>

<li><router-link to="/services/online-disability-resources"><span class="bi bi-plus"></span>Online Disability Resources</router-link></li>

<li><router-link to="/services/sensusaccess"><span class="bi bi-plus"></span>SensusAccess Transcription</router-link></li>
<li><router-link to="/services/student-assistance-program"><span class="bi bi-plus"></span>Student Assistance Program</router-link></li>
<li><router-link to="/services/wellness-materials"><span class="bi bi-plus"></span>Wellness Materials</router-link></li>
<li><router-link to="/services/webinars"><span class="bi bi-plus"></span>Webinars</router-link></li>
<li><router-link to="/registration"><span class="bi bi-plus"></span>Register With Us</router-link></li>

</ul>
<p></p>
</div>
</div><!--/card-->
</div><!-- /col -->

<div class="col-lg-4 mb-4 d-flex align-items-stretch">

<!-- Card 3 -->
<div class="card">
<div class="card-body">
<h2 class="card-title">ACCESSIBLE EDUCATION</h2>
<p class="card-text lead">CSU Global is committed to ensuring education is accessible to our users.

</p><ul class="list-unstyled mt-4">
<li><router-link to="/accessible-education/accessibility-policy"><span class="bi bi-plus"></span>Accessibility Policy</router-link></li>
<li><router-link to="/accessible-education/assistive-tools-and-resources"><span class="bi bi-plus"></span>Assistive Tools &amp; Resources</router-link></li>
<li><router-link to="/accessible-education/iac-information"><span class="bi bi-plus"></span>IAC Information</router-link></li>
<li><router-link to="/accessible-education/role-of-faculty-and-staff"><span class="bi bi-plus"></span>Role of Faculty &amp; Staff</router-link></li>

</ul>
<p></p>
</div>
</div><!--/card-->

</div><!-- /col -->


</div>
<!-- /.row -->



    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'Features',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#app .bi-plus {
    font-size:1.5rem;
    vertical-align: -0.15em;
}

#app h2.card-title {
    margin-top:0px;
}

</style>
