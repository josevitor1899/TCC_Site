<template>
    <div id="Texto01">
        <h1>O Cartão que mudará a Acessibilidade Urbana</h1>

        <div id="paragrafo01">
        <p>O Cartão Inclusivo promete revolucionar a vida de Pessoas com algum tipo de deficiência (PCD)
             e Pessoas Idosas com dificuladade de locomoção, já que com a sua implementação essas pessoas terão mais segurança ao
              atravessar sinaleiras. É um projeto nunca antes visto, que reune os avanços tecnológicos com a inclusão urbana.</p>
        </div>

        <div id="imagem01">
        <img src="@/assets/imgsInicial/imageminicio01.png.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Texto01"
    }
</script>

<style scoped>
    #paragrafo01 {
        font-size: 1rem;       
        line-height: 1.6;      
        color: #555;           
        margin: 0;
        text-align: justify;
        max-width: 900px;

    }

    #imagem01 img {
        display: block;
        margin: 30px auto;      /* centraliza a imagem */
        max-width: 100%;        /* mantém a responsividade */
        border-radius: 10px; 
        
    }
    
</style>