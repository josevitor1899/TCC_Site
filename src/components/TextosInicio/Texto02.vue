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
  justify-content: space-between; /* distribui as imagens igualmente */
  flex-wrap: wrap;                /* permite quebrar em telas menores */
  gap: 15px;                      /* espaço entre as imagens */
}

#DificuldadesEnfrentadas img {
  flex: 1;                        /* faz as imagens ocuparem espaço proporcional */
  max-width: 300px;               /* limite máximo */
  height: 250px;
  border-radius: 7px;
  object-fit: cover;              /* mantém proporção da imagem */
}

</style>
