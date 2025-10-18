<template>
  <div id="Texto02">
    <h1>Dificuldades Enfrentadas pelos nossos clientes</h1>

    <div id="DificuldadesEnfrentadas">
        <img src="@/assets/imgsInicial/CadeiraDeRodas.jpg" alt="">
        <img src="@/assets/imgsInicial/Psicologico.jpg" alt="">
        <img src="@/assets/imgsInicial/FaltaDeVisibilidade.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Texto02"
}
</script>

<style scoped>

#DificuldadesEnfrentadas {
    display: flex;
}
#DificuldadesEnfrentadas img{
    width: 300px;
    height: 250px;
    margin-right: 20px;
    border-radius: 7px;
  
}
</style>
