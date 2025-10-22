<template>
  <div id="Texto02">
    <h1>Dificuldades Enfrentadas pelos nossos clientes</h1>

    <div class="DificuldadesEnfrentadas">
      <div class="dificuldade">
        <img src="@/assets/imgsInicial/CadeiraDeRodas.jpg" alt="">
        <h4>Locomoção</h4>
        <p>Os nossos clientes possuem dificuldades de locomoção, seja por conta de algum tipo de deficiência ou mesmo por conta da idade.</p>
      </div>

      <div class="dificuldade">
        <img src="@/assets/imgsInicial/Psicologico.jpg" alt="">
        <h4>Psicológicas e Sociais</h4>
        <p>Os nossos clientes tem medo de serem atingidos porque o sinal muda rapidamente. Gerando dependência e falta de autonomia.</p>
      </div>

      <div class="dificuldade">
        <img src="@/assets/imgsInicial/FaltaDeVisibilidade.jpg" alt="">
        <h4>Invisibilidade</h4>
        <p>Pesoas com dificuladade de locomoção enfrentam, muitas vezes, a invisibilidade da causa. Com isso, há a falta projetos voltados para elas.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Texto02"
}
</script>

<style scoped>
.DificuldadesEnfrentadas {
  display: flex;
  justify-content: space-between; /* distribui as imagens igualmente */
  gap: 15px;
  text-align: left; /* garante alinhamento dos textos à esquerda */
}

.dificuldade {
  flex: 1;
  max-width: 300px;
}

.dificuldade img {
  width: 100%;
  height: 250px;
  border-radius: 7px;
  object-fit: cover;
}

.dificuldade h4 {
  margin-top: 8px;
  font-weight: bold;
  text-align: left;
}

.dificuldade p {
    margin-top: 8px;
    max-width: 300px;
}
</style>

