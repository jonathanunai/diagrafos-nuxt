<template>
  <div class="section-container section-alimentacion">
    <arrow-text
      type="left"
      text="Nosotros"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Gimnasios"
      @click.native="$nuxt.$emit('move', 'right')"
    />

    <div class="content">
      <div class="section-title">Alimentacion</div>
      <div class="section-subtitle">Próximamente</div>
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
    font-size: 2.4rem;
  }
  .section-subtitle {
    color: #ffffff;
    font-size: 2rem;
  }
}
</style>
