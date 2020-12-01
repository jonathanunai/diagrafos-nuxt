<template>
  <div class="section-container section-hoteles">
    <arrow-text type="left" text="Moda" @move="$emit('move', 'left')" />
    <arrow-text type="right" text="Empresa" @move="$emit('move', 'right')" />
    <div class="content">
      <div class="section-title">Hoteles...</div>
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
.section-hoteles {
  .section-title {
    color: #ffffff;
  }
}
</style>
