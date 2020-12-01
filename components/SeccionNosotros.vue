<template>
  <div class="section-container section-vacio">
    <arrow-text
      type="left"
      text="Medio ambiente"
      @move="$emit('move', 'left')"
    />
    <div class="content">
      <div class="section-title">NOSOTROS...</div>
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
.section-vacio {
  height: 100vh;
  .section-title {
    color: #ffffff;
  }
}
</style>
