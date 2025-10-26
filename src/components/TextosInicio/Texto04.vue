<template>
  <div class="Texto04">
    <div class="Texto01">
      <h1>Quem pode ter acesso ao Cartão?</h1>
      <h4>Pessoas com Deficiência (PCD)</h4>
      <p>
        Pessoas que possuem algum tipo de deficiência e possuem dificuldade de locomoção podem ter acesso de usar o nosso cartão.
        Para isso bastar fazer o seu cadastro, usando um documento que comprove a sua deficiência.
      </p>
      <img src="@/assets/imgsInicial/CartaoPessoaComDeficiência.webp" alt="">
    </div>

    <div class="Texto02">
      <img src="@/assets/imgsInicial/CartaoIdoso.jpeg" alt="" class="img-idoso">
      <h4>Pessoas Idosas</h4>
      <p>
        Pessoas idosas que possuem dificuldade de locomoção também podem realizar o cadastro.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Texto04"
}
</script>

<style scoped>
.Texto04 {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
}

.Texto01, .Texto02 {
  max-width: 400px;
}

.Texto04 h1 {
  margin-top: 20px;
}

.Texto04 img {
  width: 400px;
  height: 250px;
  border-radius: 7px;
  object-fit: cover;
}

.Texto04 p {
  margin-bottom: 5px;
  text-align: justify;
  word-spacing: 0.1em;
  letter-spacing: -0.5px;
}

.Texto02 {
    margin-top: 150px;
}

.Texto04 h4{
    margin-top: 20px;
    margin-bottom: 5px;
    color: blue;
}
</style>

