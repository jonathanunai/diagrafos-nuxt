<template>
  <div class="section-container section-inicio">
    <arrow-text
      type="left"
      text="Medio ambiente"
      @move="$emit('move', 'left')"
    />
    <arrow-text type="right" text="Tecnología" @move="$emit('move', 'right')" />
    <arrow-text type="down" text="Empresa" @move="$emit('move', 'down')" />

    <div class="content">
      <logo-icon />
      <div class="boxed"><span>Think</span> before printing</div>
    </div>
  </div>
</template>
<style lang="scss">
.section-inicio {
  .image-wrapper {
    margin-bottom: 6rem;
    img {
      width: 140px;
    }
  }
  .boxed {
    padding: 12px 16px;
    font-size: 2.3rem;
    border: 1px solid $colorWhite;
    font-weight: light;
    text-transform: uppercase;
    margin-bottom: 4rem;

    span {
      color: $colorMain;
    }
  }
}
</style>
