<template>
    <div class="Footer">
        <hr class="linha-divisoria">
    </div>

    <div class="Footer">
        <div class="Texto">
            <p>Semáforo Inclusivo</p>
            <img src="@/assets/imgsFooter/LogoFacebook.jpg" alt="">
    </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.Footer{
    display: flex;
    color: grey;
    max-width: 900px;       /* limita a largura para centralizar o texto */
    margin: 0 auto;         /* centraliza horizontalmente */
    text-align: left;    
    padding: 10px 20px; 
    margin-top: 0px;
}

.Footer img{
    width: 100px;
}

.linha-divisoria {
  border: none;             /* remove o padrão */
  border-top: 1px solid #ddd; /* cria a linha */
  margin: 40px 0;           /* espaçamento acima e abaixo */
  width: 100%;              /* ocupa toda a largura do container */
}

.Texto{
    display: flex;
}

.Texto img {
    width: 50px;
}

</style>

