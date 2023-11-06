<template>
  
  <q-page class="q-mb-md">
    <q-page-container style="padding-top: 20px;">
      <q-card>
        <q-card-section class="q-pb-md">
          <div class="text-h4">My Projects</div>
          <p style="font-size: medium;">
            Below are my few Projects while training with LTIMindtree
          </p>
        </q-card-section>

        <q-list>
          <q-item v-for="project in projects" :key="project.id">
            <q-item-section>
              <q-item-label>
                <h5 style="font-weight: bold;">{{ project.title }}</h5>
                <p>{{ project.description }}</p>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <a :href="project.githubLink" target="_blank" class="github-link fa-brands fa-github">
                link
              </a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'E-Commerce',
          description: 'Description : This a E-Commerce paltform which is created using Spring Boot for back-end, Front-end is created using vue.js. For database i used mySQL.  ',
          githubLink: 'https://github.com/piyusht823/eCommerce'
        },
        {
          id: 2,
          title: 'Employee Management',
          description: 'Description : This project is based on Spirng Boot and focus is to manage employees of Company' ,
          githubLink: 'https://github.com/piyusht823/employee-crud-db'
        },
      ],
    };
  },
};
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #2a4b6c;
}

.q-list {
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 40px;
}

.q-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;
}

.q-item-section {
  padding: 10px;
  vertical-align: middle;
}

.q-item-label {
  text-align: left;
}

.github-link {
  color: #2196F3;
  text-decoration: none;
  font-weight: bold;
}
.fa-brands {
  font-weight: bolder;
text-decoration: none;
font-size: larger;
color: black;
}
</style>
