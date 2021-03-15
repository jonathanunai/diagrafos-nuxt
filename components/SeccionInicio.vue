<template>
  <div class="section-container section-inicio">
    <arrow-text
      type="left"
      text="Medio ambiente"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Tecnología"
      @click.native="$nuxt.$emit('move', 'right')"
    />
    <arrow-text
      type="down"
      text=""
      @click.native="$nuxt.$emit('move', 'down')"
    />

    <div class="content">
      <logo-icon />
      <div class="boxed"><span>Think</span> before printing</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    doThis() {
      console.log('this')
      this.$nuxt.$emit('move', 'right')
    },
  },
}
</script>
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
    font-size: 1.2rem;
    border: 1px solid $colorWhite;
    font-weight: light;
    text-transform: uppercase;
    margin-bottom: 4rem;
    @include md {
      font-size: 2.3rem;
    }
    span {
      color: $colorMain;
    }
  }
}
</style>
