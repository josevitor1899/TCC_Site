<template>
  <div class="Footer">
    <hr class="linha-divisoria" />
  </div>

  <div class="Footer">
    <div class="Texto">
      <p>Semáforo Inclusivo</p>
      <div class="logos">
        <img src="@/assets/imgsFooter/LogoFacebook.jpg" alt="Facebook">
        <img src="@/assets/imgsFooter/LogoInstagram.jpg" alt="Instagram">
        <img src="@/assets/imgsFooter/LogoYoutube.jpg" alt="YouTube">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.Footer {
  display: flex;
  flex-direction: column;
  color: grey;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  margin-top: 0px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.linha-divisoria {
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0;
  width: 100%;
}

.Texto {
  display: flex;
  justify-content: space-between; /* empurra texto e logos para extremos */
  align-items: center; /* alinha verticalmente */
}

.logos {
  display: flex;
  gap: 30px; /* espaçamento entre as logos */
}

.logos img {
  width: 40px;
}
</style>
