<template>
  <div class="section-container section-vacio">
    <arrow-text
      type="left"
      text="Medio ambiente"
      @move="$emit('move', 'left')"
    />
    <div class="content">
      <div class="section-title">Contacto</div>
      <div class="contact-details">
        <div class="contact-line">Llámame_<span>917 100 195</span></div>
        <div class="contact-line">
          Escríbeme_<span>info@diagrafos.com</span>
        </div>
      </div>
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
