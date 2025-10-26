<template>
  <div class="Texto03">
    <div class="Texto_Imagem">
      <div class="texto">
        <h1>Como Funciona?</h1>
        <p>
          O Semáforo Inclusivo funciona a partir da utilização do cartão, que utiliza a tecnologia RFID.
          Dessa forma, toda vez que um usuário do nosso cartão estiver próximo de um semáforo, que utiliza
          o nosso programa, e aproximar o cartão no local indicado, o tempo de passagem de pedestre irá
          aumentar na próxima abertura de sinal.
        </p>
      </div>
      <img src="@/assets/imgsInicial/PedestreSemaforo.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Texto03"
}
</script>

<style scoped>
.Texto03 {
  display: flex;
  margin-top: 40px;
}

.Texto_Imagem {
  display: flex;
  justify-content: space-between; /* empurra o texto para a esquerda e a imagem para a direita */
  align-items: flex-start;
  width: 100%;
  max-width: 1100px; /* opcional: limita o tamanho total do conteúdo */
  margin: 0 auto; /* centraliza o bloco dentro da tela */
}

.Texto_Imagem img {
  width: 300px;
  height: auto;
  border-radius: 10px;
}

.texto {
  max-width: 400px;
}

.texto h1 {
  margin-bottom: 20px;
}

.texto p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  width: 400px;
}



</style>
