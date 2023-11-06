<template>
  <div class="home-page">
    <div class="content">
      <h5> My name is Piyush Tiwari</h5>
      <h5>
        <span class="typing-text">

        </span>
      </h5>      <q-btn
        color="primary"
        label="About Me"
        @click="redirectToAboutMe"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToAboutMe() {
      this.$router.push('/about');
    },
  },
  mounted() {
    const text = "I am Software Engineer at LTIMindtree";
    const typingText = document.querySelector(".typing-text");
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80); 
      }
    };

    typeWriter();
  },
};
</script>

<style scoped>
.home-page {
  background-image: url('../assets/bk3.jpg');
  background-size: cover;
  background-position: center;
  height: 77vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.content {
  background: rgba(255, 255, 255, 0.5);
  color: rgb(30, 29, 29);
  padding: 20px;
  width: 560px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
