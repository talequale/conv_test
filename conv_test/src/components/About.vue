<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Here we are</p>
    <button onclick="Chatra('openChat', true)">Chat with us</button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.about h1 {
  color: #2c3e50;
}

.about p {
  font-size: 16px;
  line-height: 1.6;
  color: #34495e;
}
</style>