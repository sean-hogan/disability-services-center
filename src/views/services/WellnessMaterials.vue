<template>
<ContentPageLayout>
  <template #header>
    <h1 class="display-2">Wellness</h1>
  </template>
     
  <template #content>

<p class="lead">CSU Global has partnered with ESPῩR to provide students and their family members with a comprehensive Student Assistance Program (SAP) that is free and confidential. Included in this are Wellness Materials about a number of topics.</p>

<p>
</p><form action="https://care.espyr.com/" method="post">
<input name="password" value="CSUGlobal" type="hidden">
<button type="submit" class="btn btn-primary rounded-pill" formtarget="_blank">Go To Wellness Support Materials <span class="bi bi-box-arrow-up-right"></span></button>
</form><p></p>


<h2>Resources</h2>
<ul>
<li>The website offers educational screenings, assessment, videos, quizzes, courses, articles, financial calculators, child and eldercare service locators and much more. You can even confidentially request SAP services from the site. Topics covered include emotional well-being, relationships, health and wellness, financial, legal, personal and professional growth.</li>
<li>Monthly Webinars</li>
<li>Access to ESPῩR’s mobile app that can be downloaded for free on the Apple Store or Google Play.</li>
</ul>
  </template>
</ContentPageLayout>
</template>


<script setup>
import ContentPageLayout from '@/layouts/ContentPageLayout.vue'
</script>



