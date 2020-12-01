<template>
  <div class="section-container section-alimentacion">
    <arrow-text type="left" text="Nosotros" @move="$emit('move', 'left')" />
    <arrow-text type="right" text="Gimnasios" @move="$emit('move', 'right')" />
    <div class="content">
      <div class="section-title">alimentacion...</div>
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
.section-alimentacion {
  .section-title {
    color: #ffffff;
  }
}
</style>
