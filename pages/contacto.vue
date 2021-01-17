<template>
  <div class="content-contact">
    <h1 class="contact-title">Contacto</h1>
    <div class="contact-details">
      <div class="contact-line">Llámame_<span>917 100 195</span></div>
      <div class="contact-line">Escríbeme_<span>info@diagrafos.com</span></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.content-contact {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .contact-title {
    color: #ffffff;
    margin-bottom: 4rem;
  }
  .contact-details {
    margin: 0 auto;
    .contact-line {
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
