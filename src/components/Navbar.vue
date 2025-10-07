Esse componente é a barra de navegação que se repetirá em todas as páginas do site

<template>
  <div id="nav-container">
    <div id="nav">
      <router-link to="/" id="slogan-url">
        <p>Semáforo Inclusivo</p>
      </router-link>

      <div id="links">
        <router-link to="/">Início</router-link>
        <span>|</span>
        <router-link to="/QuemSomos">Quem Somos</router-link>
        <span>|</span>
        <router-link to="/Cadastre-se">Cadastre-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
/* Container geral: centraliza a barra na tela */
#nav-container {
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
}

/* Barra de navegação em si */
#nav {
  background-color: rgba(128, 128, 128, 0.78);
  width: 100%;
  max-width: 900px; /* limita a largura total */
  padding: 15px 40px;
  display: flex;
  justify-content: space-between; /* slogan à esquerda e links à direita */
  align-items: center;
  border-radius: 4px;
  margin: 20px 0;
  margin-top: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Slogan (à esquerda) */
#slogan-url {
  text-decoration: none;
}

#slogan-url p {
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0;
}

/* Container dos links à direita */
#links {
  display: flex;
  align-items: center;
}

#links a {
  color: black;
  text-decoration: none;
  margin: 0 10px;
  transition: 0.3s;
  font-weight: bold;
}

#links span {
  color: black;
  opacity: 0.5;
}

#links a:hover {
  color: #fff;
}
</style>
