<template>
  <div class="section-container section-medio-ambiente">
    <arrow-text type="right" text="Inicio" @move="$emit('move', 'right')" />

    <div class="content">
      <div class="section-title">Soluciones sostenibles</div>
    </div>
  </div>
</template>
<style lang="scss">
.section-medio-ambiente {
  height: 100vh;
  background: url('/img/Img_Medio-Ambiente.jpg');
  background-size: cover;
  background-position: center;
}
</style>
