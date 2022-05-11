<template>
<ContentPageLayout>
  <template #header>
          <h1 class="display-2">Academic Accommodations</h1>
  </template>
     
  <template #content>
    <p class="lead">
      To register with our office, submit accommodation request paperwork through the student portal. Refer to the to <router-link to="/registration">Registering And Requesting Accommodations</router-link> page for more information.
    </p>

        
				<p class="lead">Academic accommodations at CSU Global focus on providing equal access to students with disabilities in an online education environment. Reasonable accommodations may consist of changes in policies, practices, services, and the use of auxiliary aids. These may include but are not limited to:</p>

          <ul>
          <li>Modifying the deadline for assignments</li>
          <li>Modifying the format of course materials</li>
          <li>Modifying the way course information is presented</li>
          <li>Modifying how a student submits assignments</li>
          </ul>


        <p>Reasonable accommodations do not require a substantial change in the curriculum or result in an alteration of any essential element, outcome, or function of a course, program, service, or activity. CSU Global understands that reasonable accommodations must be made unless it can be demonstrated that the accommodations would impose an undue hardship on the operation of the program or university.</p>

          <h2 class="">Academic Requirements</h2>


<p>Students with disabilities are expected to complete all academic requirements for their program at CSU Global. Waiving or substantially altering academic requirements for program completion is generally not considered a reasonable accommodation. This includes General Education requirements as well as requirements considered essential to a student's program. However, students are always encouraged to contact Disability and Accessibility Services to discuss options.</p>

<p><router-link to="/registration"><button type="button" class="btn btn-primary rounded-pill">Register With Us</button></router-link></p>
  </template>
</ContentPageLayout>
</template>


<script setup>
import ContentPageLayout from '@/layouts/ContentPageLayout.vue'
</script>


