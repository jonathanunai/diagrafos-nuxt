<template>
  <div class="section-container section-gimnasios">
    <arrow-text
      type="left"
      text="Alimentacion"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Nosotros"
      @click.native="$nuxt.$emit('move', 'right')"
    />

    <div class="content">
      <div class="section-title">gimnasios...</div>
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
.section-gimnasios {
  .section-title {
    color: #ffffff;
  }
}
</style>
