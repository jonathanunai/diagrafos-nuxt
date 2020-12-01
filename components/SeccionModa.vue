<template>
  <div class="section-container section-moda">
    <arrow-text type="left" text="Empresa" @move="$emit('move', 'left')" />
    <arrow-text type="right" text="Hoteles" @move="$emit('move', 'right')" />
    <div class="content">
      <div class="section-title">Moda...</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // console.log('vacia created')
  },
}
</script>
<style lang="scss">
.section-moda {
  .section-title {
    color: #ffffff;
  }
}
</style>
