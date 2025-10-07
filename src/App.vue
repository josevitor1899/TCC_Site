<template>
  <Navbar/>

  <router-view/>

  <Footer></Footer>

</template>

<script>

  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: "App",
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
  }

</style>

