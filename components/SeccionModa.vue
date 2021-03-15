<template>
  <div class="section-container section-moda">
    <arrow-text
      type="left"
      text="Empresa"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Hoteles"
      @click.native="$nuxt.$emit('move', 'right')"
    />
    <arrow-text
      type="down"
      text=""
      @click.native="$nuxt.$emit('move', 'down')"
    />

    <div class="content">
      <div class="section-title">Moda</div>
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
.section-moda {
  .section-title {
    color: #ffffff;
  }
  .section-subtitle {
    color: #ffffff;
    font-size: 2rem;
  }
}
</style>
