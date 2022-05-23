<template>
<ContentPageLayout>
  <template #header>
    <h1 class="display-2">Registering And Requesting Accommodations</h1>
    <ol class="dot-wrapper my-5">
        <li>
          <span class="dot-1">1</span>
          <span>Get in touch by phone or email</span>
        </li>

        <span class="line d-none d-lg-flex"></span>

        <li>
          <span class="dot-2">2</span>
          <span>Complete documentation</span>
        </li>

        <span class="line d-none d-lg-flex"></span>

      <li>
        <span class="dot-3">3</span>
        <span>Receive confirmation & approval</span>
      </li>
    
    
    
    
    </ol>
  </template>
     
  <template #content>

  <p class="lead">We encourage students to self-identify and request disability-related academic accommodations prior to starting coursework at CSU Global. However, we will work through this process with students at any point in their enrollment. Once approved, accommodations are not retroactive in coursework. Please review the steps and information below:
  </p>


<!-- <h2>Register With Us</h2> -->
<p><b>1. Self-identify as a student with a disability to Disability and Accessibility Services.</b></p> 
<ul>
<li>Email <a href="mailto:ada@csuglobal.edu">ada@csuglobal.edu</a> or call (720) 279-0650. We will connect with you over phone or email to review the accommodations process, required paperwork, and answer any questions you have. You will also receive the Disability and Accessibility Services Handbook.</li>
</ul>

<p><b>2. Complete and submit all required documents to Disability and Accessibility Services through your Student Portal Document Center. We need to receive the following documents from you:</b></p>

<ul>
<li>Request for Academic Accommodations eForm
<br />Disability and Accessibility Services will add this eForm to your Student Portal Document Center to complete and submit. On this form you will provide information about your diagnosis, the accommodations you are requesting, and information about any approved accommodations in previous academic settings.</li>
<li>Informed Consent for Information Release eForm
<br />Disability and Accessibility Services will add this eForm to your Student Portal Document Center to complete and submit. This form authorizes the release of information regarding a student condition or disability to appropriate personnel strictly for the purposes of providing and/or coordinating academic services for reasonable accommodation requests.</li>
<li>Medical/Disability Documentation (from a third party provider)
<br />Disability and Accessibility Services will add a placeholder to your Student Portal Document Center to upload this required paperwork. Our full Documentation Guidelines are in the Disability and Accessibility Services Handbook. The guidelines review the information documentation should include so our office can determine academic accommodations. The Documentation Guidelines are extensive, but to summarize on the most important points, the documentation should include the following information:
<ul>
<li>Diagnosis of disability by an appropriate professional (e.g., medical doctor, psychologist, psychiatrist, licensed counselor).</li>
<li>Information about what you experience in an academic setting in relation to the diagnosis and/or a recommendation for academic accommodations for coursework while attending CSU Global.</li>
<li>The name, professional credentials, address, and telephone of the provider/medical professional. If your provider is writing a letter with this information, it should be on an official letterhead.</li>
  
</ul>
</li>
</ul>



<p><b>3. Disability and Accessibility Services will confirm receipt of all documents. Once all documents have been submitted, a file review to determine academic accommodations is completed within 5 business days.</b></p>

<h2>Notification of Approved or Denied Accommodations</h2>

<p>Once the file review is completed, Disability and Accessibility Services will send you an email notification detailing whether accommodations have been approved, denied, or if more information is needed.</p>

<ul>
<li>If academic accommodations are approved, you will receive a “Student Notification of Academic Accommodations” form over email, detailing the accommodations that have been approved. To accept the accommodations, please sign and return the Student Notification form to Disability and Accessibility Services over email at <a href="mailto:ada@csuglobal.edu">ada@csuglobal.edu</a> or fax to 720-943-2863.</li>

<li>If you have questions or concerns about the approved accommodations, please communicate with Disability and Accessibility Services to determine options and next steps.</li>
  
<li>If you have not been approved for academic accommodations, you will be provided an explanation or be asked to submit additional documentation/information.</li>
</ul>

  </template>
</ContentPageLayout>
</template>


<script setup>
import ContentPageLayout from '@/layouts/ContentPageLayout.vue'
</script>

<style scoped>
.dot-1 {
  height: 10rem;
  width: 10rem;
  background-color: hsla(215, 55%, 24%, 1);
  border-radius: 50%;
  display: flex;
  color:#fff;
  justify-content: center;
  align-items: center;
  font-size:3rem;
}
.dot-2 {
  height: 10rem;
  width: 10rem;
  background-color: hsla(205, 100%, 86%, 1);
  border-radius: 50%;
  display: flex;
  color:hsla(215, 55%, 24%, 1);
  border:2px solid hsla(215, 55%, 24%, 1);
  justify-content: center;
  align-items: center;
  font-size:3rem;
}
.dot-3 {
  height: 10rem;
  width: 10rem;
  border:2px solid hsla(215, 55%, 24%, 1);
  border-radius: 50%;
  display: flex;
  color: hsla(215, 55%, 24%, 1);
  justify-content: space-evenly;
  align-items: center;
  font-size:3rem;
}
.dot-wrapper {
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  gap:1rem;
  flex-wrap: wrap;
}
ol li {
  display:flex;
  align-items: center;
  flex-direction: column;
  gap:1rem;
}
.line {
  flex-grow: 1;
  border-bottom: 5px solid #1c2333;
  height:1px;
}
p:not(.lead) {
  margin-top:2rem;
}
</style>