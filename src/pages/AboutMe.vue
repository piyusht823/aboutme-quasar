<template>
  <q-page class="q-pb-md">
    <q-page-container class="q-px-md" style="padding-top: 0%;">
      <q-card style="box-shadow: none;">
        <q-card-section class="q-pb-md">
          <div class="text-h6">About Me</div>
          <div class="q-mb-md text-center">
            <q-avatar size="140px">
              <img src="../assets/photo.jpg">
            </q-avatar>
          </div>
          <p class="text-center" style="font-size: medium;">
            I am Piyush Kumar Tiwari. I am a passionate in new technologies with a strong interest in Full Stack development. I have completed my B.Tech in Computer Science and Engineering from University of Calcutta, Kolkata. Currently I am working with LTIMindtree as Trainee. 
          </p>
        </q-card-section>

        <q-card-section class="q-pb-md">
          <div class="text-h6">Skills</div>
          <div class="text-center">
            <q-chip label="HTML" color="primary" class="q-mr-sm" />
            <q-chip label="CSS" color="primary" class="q-mr-sm" />
            <q-chip label="JavaScript" color="primary" class="q-mr-sm" />
            <q-chip label="Vue.js" color="primary" class="q-mr-sm" />
            <q-chip label="Java" color="primary" class="q-mr-sm" />
            <q-chip label="Spring Boot" color="primary" class="q-mr-sm" />
            <q-chip label="Docker & Kubernetes" color="primary" class="q-mr-sm" />
            <q-chip label="AI/ML" color="primary" class="q-mr-sm" />
            <q-chip label="Linux" color="primary" class="q-mr-sm" />
            <q-chip label="PostgreSQL" color="primary" class="q-mr-sm" />
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            color="primary"
            label="Contact Me"
            @click="redirectToContact"
            class="q-mb-md"
          />
        </q-card-actions>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: 'AboutMe',
  methods: {
    redirectToContact() {
      this.$router.push('/contact');
    },
  },
};
</script>
