<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 pb-0">
      <div class="container flex-wrap justify-content-start">
        <!-- skip link -->
        <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
          <!---BRAND--->

      <router-link class="navbar-brand" to="/">
          <img src="https://libapps.s3.amazonaws.com/accounts/129967/images/CSUG_Seal_RGB.jpg" width="65">Disability & Accessibility Services
      </router-link>

      <div class="ms-lg-auto d-flex flex-row mb-3 mb-lg-0">

      <router-link class="btn btn-primary rounded-pill me-2 menu-link" to="/registration">Register with Us</router-link>
      <router-link class="btn btn-outline-primary rounded-pill me-2 menu-link" to="/contact-us">Contact Us</router-link>



      </div>


      <!--hamburgler-->
        
      <button class="navbar-toggler ms-auto mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>



      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
          


      <ul class="navbar-nav mb-0 mt-3 w-100">

           
        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Information
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/information/academic-accomodations">Academic Accommodations</router-link></li>
            <li><router-link class="dropdown-item" to="/information/faculty-notification">Faculty Notification Letters</router-link></li>
            <li><a class="dropdown-item" href="https://csuglobal.libguides.com/ld.php?content_id=56545145" target="_blank">Disability & Accessibility Services Handbook</a></li>
            <li><router-link class="dropdown-item" to="/information/grievance-procedure">Grievance Procedure</router-link></li>
            <li><router-link class="dropdown-item" to="/information/support-documentation">Support Documentation</router-link></li>
            <li><router-link class="dropdown-item" to="/information/temporary-conditions">Temporary Accommodations and Services</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/services/colorado-community-resources">Colorado Community Resources</router-link></li>
            <li><router-link class="dropdown-item" to="/services/online-disability-resources">Online Disability Resources</router-link></li>
            <li><router-link class="dropdown-item" to="/services/sensusaccess">SensusAccess Document Transcription</router-link></li>
            <li><router-link class="dropdown-item" to="/services/student-assistance-program">Student Assistance Program</router-link></li>
            <li><router-link class="dropdown-item" to="/services/wellness-materials">Wellness Materials</router-link></li>
            <li><router-link class="dropdown-item" to="/services/webinars">Webinars</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessible Education
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://csuglobal.edu/student-policies/institutional-accessibility-policy">Institutional Accessibility Policy</a></li>
            <li><router-link class="dropdown-item" to="/accessible-education/iac-information">Institutional Accessibility Committee</router-link></li>
            <li><router-link class="dropdown-item" to="/accessible-education/assistive-tools-and-resources">Assistive Tools & Resources</router-link></li>
            <li><router-link class="dropdown-item" to="/accessible-education/role-of-faculty-and-staff">Role of Faculty & Staff</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Career Resources
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/career-resources/disability-laws-and-rights">Disability Laws & Rights</router-link></li>
            <li><router-link class="dropdown-item" to="/career-resources/disclosure-and-accomodations">Disclosure & Accommodations in the Workplace</router-link></li>
            <li><router-link class="dropdown-item" to="/career-resources/internships-and-professional-opportunities">Internships & Professional Organizations</router-link></li>
            <li><router-link class="dropdown-item" to="/career-resources/job-search-resources">Job Search Resources</router-link></li>
            <li><a class="dropdown-item" href="https://globalconnect.csuglobal.edu/">Career Center</a></li>
          </ul>
        </li>
            
        <li class="nav-item px-3 ms-lg-auto">
        <router-link class="nav-link menu-link" to="/services/student-assistance-program">Counseling Support</router-link>
        </li>

        </ul>
        </div><!--end collapse-->
    </div><!--end contain-->
    </nav>  
</template>




<script>
import {Collapse} from 'bootstrap'

export default {
  name: 'Navbar',
  props: {
    },
  mounted() {
    /* if mounts on mobile, add clicking link closes collapse */
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navLinks = document.querySelectorAll('.dropdown-item, .menu-link')
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, {toggle: false})
      navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
      })
    }
  },
}
</script>


<style scoped lang="scss">

.navbar {
  border-bottom: 1px solid #ddd;
}
#app .navbar-brand {
  font-family: industry, sans-serif;
	font-weight: 700;
	font-style: normal;
  color: hsla(215, 55%, 24%, 1);
}

#app .navbar-brand:hover {
  color:#1c2333;
  text-decoration: underline;
}

#app .nav-link:not(.btn) {
   text-transform: uppercase;
   font-size:1.2rem;
}

#app .nav-item{
  margin-bottom:0px;
}

// #app .dropdown-menu{
//   margin:0px;
//   border:0px;
//   background-image: linear-gradient(#fff, #fff), 
//         linear-gradient(45deg, #fff722, #ff26f9),linear-gradient(142deg, transparent, white),linear-gradient(108deg, red, transparent);
//     background-clip: content-box, padding-box;
// }


// .btn:focus, .btn {
//   box-shadow:none!important;
// }

.nav-link:not(.btn),
.dropdown-item { 
  font-size: 16px;
  font-weight: 600;
  color: #1c2333!important;
}

.dropdown-item:active,
.dropdown-item:focus {
  background-color: rgb(242, 242, 242);
}

.visually-hidden-focusable {
  position:absolute;
  left:10%;
  top:1%;
  padding:2rem;
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 1;
}

.visually-hidden-focusable:focus {
  transform: translateY(0%);
}

@media (min-width: 992px) {
  #app .navbar-brand {
    font-size: 1.8rem;
  }
}

</style>
