<template>
  <div class="section-container section-vacio">
    <arrow-text
      type="left"
      text="Gimnasios"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Alimentacion"
      @click.native="$nuxt.$emit('move', 'right')"
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
