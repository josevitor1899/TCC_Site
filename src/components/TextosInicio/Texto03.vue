<template>
  <div class="Texto03">
    <div class="left">
      <div class="texto">
        <h1>Como Funciona?</h1>
        <p>
          O Semáforo Inclusivo funciona a partir da utilização do cartão, que utiliza a tecnologia RFID.
          Dessa forma, toda vez que um usuário do nosso cartão estiver próximo de um semáforo, que utiliza
          o nosso programa, e aproximar o cartão no local indicado, o tempo de passagem de pedestre irá
          aumentar na próxima abertura de sinal.
        </p>
      </div>

      <div class="texto second">
        <h1>Quanto tempo a mais?</h1>
        <p>
          O Semáforo Inclusivo se baseia na ABNT NBR 9050 (Acessibilidade) - que afirma que o tempo de travessia de pedestres deve ser adequado à marcha de pessoas
          de mobilidade reduzida, que é de 0,4m/s. Ou seja, em uma travessia de 8 metros, o tempo seria de 20 segundos.
        </p>
      </div>
    </div>

    <img class="side-img" src="@/assets/imgsInicial/PedestreSemaforo.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "Texto03"
}
</script>

<style scoped>
/* Container principal: grid com 2 colunas (texto | imagem) */
.Texto03 {
  display: grid;
  grid-template-columns: 1fr 320px; /* 1 coluna pro texto, outra pra imagem */
  column-gap: 40px; /* espaço entre texto e imagem */
  max-width: 1100px;
  margin-top: 40px; /* só espaço acima */
  align-items: start;
  box-sizing: border-box;
}

/* Coluna da esquerda que empilha os textos */
.left {
  display: flex;
  flex-direction: column;
  gap: 24px; /* espaço entre os dois blocos de texto */
}

/* Imagem no lado direito */
.side-img {
  width: 300px; /* use 300 como você usava antes */
  height: auto;
  border-radius: 10px;
  justify-self: end; /* garante que a imagem fique encostada à direita da coluna */
  align-self: start;
  object-fit: cover;
}

/* estilos de texto (mantidos com pequenas melhorias) */
.texto {
  max-width: 100%; /* usa toda a coluna esquerda */
}

.texto h1 {
  margin: 0 0 12px 0;
  font-size: 2rem; /* ajuste se quiser */
}

.texto p {
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
  word-spacing: 0.04em;
  letter-spacing: -0.3px;
  line-height: 1.6;
}

</style>