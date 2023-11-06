<template>
  <q-page class="q-mb-md">
    <q-page-container style="padding-top: 20px;">
      <q-card>
        <q-card-section class="q-pb-md">
          <div class="text-h6">Contact Me</div>
          <p>
            Please feel free to get in touch with me. You can use the contact form below to send me a message or ask any questions.
          </p>
        </q-card-section>

        <q-card-section>
          <q-form @submit="submitForm" class="q-gutter-md" >
            <q-input
              v-model="name"
              label="Name"
              dense
              outlined
            />
            <q-input
              v-model="email"
              label="Email"
              dense
              outlined
            />
            <q-input
              v-model="message"
              label="Message"
              dense
              outlined
              counter
              maxlength="300"
            />
            <q-btn
              type="submit"
              color="primary"
              label="Submit"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

    },
  },
};
</script>

<style scoped>
.q-card {
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.q-form {
  text-align: left;
}

.q-input, .q-textarea {
  width: 100%;
}
</style>
