<template>
  <div class="inicio">
    <texto01/>
    <texto02/>
  </div>
</template>

<script>
  import Texto01 from '@/components/TextosInicio/Texto01.vue';
  import Texto02 from '@/components/TextosInicio/Texto02.vue';
  export default {
    components: {
      Texto01,
      Texto02
    }
  }
</script>

<style>
.inicio{
    max-width: 900px;       /* limita a largura para centralizar o texto */
    margin: 0 auto;         /* centraliza horizontalmente */
    text-align: left;    
    padding: 40px 20px; 
}

.inicio h1{
   font-size: 2.2rem;
   font-weight: 800;
   line-height: 1.3;
   margin-bottom: 1rem;
   color: #000;
   font-family: Helvetica;
   max-width: 900px;

}
</style>
