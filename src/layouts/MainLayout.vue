<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98" style="height: 90px;">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/photo.jpg">
          </q-avatar>
          My-Potfolio
        </q-toolbar-title>
        <q-btn flat round dense icon="whatshot" />

      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
    </q-header>
    

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white" style="height: 40px; ">
      <div class="q-ma-md" style="text-align: center; " >
        Developed by - <span style="font-weight:500;">Piyush Tiwari</span>
        <a href="https://www.linkedin.com/in/piyush-kumar-tiwari-0b24b918b/" class="fa-brands fa-linkedin" style="padding-left: 15px; padding-right: 15px;"></a> 
        <a href="https://github.com/piyusht823/" class="fa-brands fa-github"></a>     
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

.q-footer {
  flex-shrink: 0;
  height: 40px;
}


.fa-brands {
text-decoration: none;
font-size: larger;
color: aliceblue;
}
</style>
