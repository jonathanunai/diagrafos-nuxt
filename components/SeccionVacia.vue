<template>
  <div class="section-container section-vacio">
    <arrow type="left" text="Medio ambiente" @move="$emit('move', 'left')" />
    <div class="content">
      <div class="section-title">Falta...</div>
    </div>
  </div>
</template>
<style lang="scss">
.section-vacio {
  height: 100vh;
  .section-title {
    color: #ffffff;
  }
}
</style>
