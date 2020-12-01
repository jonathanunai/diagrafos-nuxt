<template>
  <div class="section-container section-empresa">
    <div class="content content-empresa">
      <div class="section-title-logo">diagrafos</div>
      <p>
        Ofrecemos a tu empresa el presente de una comunicación gráfica dinámica,
        versátil y atractiva.
      </p>
      <p>
        En el camino de la sostenibilidad y trazabilidad de todos sus productos.
      </p>
      <p>Pensado para que te ayuden a potenciar tus ventas.</p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // console.log('empresa created')
  },
}
</script>
<style lang="scss">
.section-empresa {
  height: 100vh;
  background: $colorWhite;
  width: 100%;
  text-align: center;
  .content-empresa {
    width: 100%;
  }

  .section-title-logo {
    color: $colorDark;
    font-weight: 900;
    font-size: 6rem;
    width: 70%;
    margin-bottom: 2.3rem;
    padding-bottom: 2.3rem;
    border-bottom: 6px solid $colorDark;
  }
  p {
    color: $colorDark;
    text-align: center;
    font-weight: 500;
    max-width: 400px;
    padding-bottom: 1rem;
  }

  .image-wrapper {
    margin-bottom: 6rem;
    img {
      width: 140px;
    }
  }
}
</style>
