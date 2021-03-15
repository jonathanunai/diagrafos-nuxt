<template>
  <div class="arrow-wrapper" :class="type">
    <div ref="fff" class="arrow-text" :class="type + '-text'">
      {{ text }}
    </div>
    <div v-if="type === 'down'" class="fp-controlArrow fp-down"></div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return 'left'
      },
    },
    text: {
      type: String,
      default: () => {
        return 'Loading...'
      },
    },
  },
}
</script>
<style lang="scss">
.fp-controlArrow {
  transition: all 0.3s ease;
  display: none;
  @include md {
    display: block;
  }

  &.fp-prev {
    height: 30px;
    width: 30px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    padding: 3px;
    left: 35px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  &.fp-next {
    height: 30px;
    width: 30px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    padding: 3px;
    right: 35px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  &.fp-down {
    height: 30px;
    width: 30px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    padding: 3px;
    transform: rotate(45deg) translate(36px, 15px);
    -webkit-transform: rotate(45deg) translate(36px, 15px);
  }
}
.arrow-wrapper {
  position: absolute;
  text-transform: uppercase;
  margin-top: -33px;
  font-weight: 500;
  transition: all 0.4s ease;
  display: none;
  cursor: pointer;
  @include md {
    display: block;
  }

  &.left {
    left: 58px;
    top: 50%;
  }
  &.right {
    right: 58px;
    top: 50%;
  }
  &.down {
    bottom: 40px;
  }
  .down-text {
    bottom: 40px;
  }
}
.light {
  .fp-controlArrow.fp-prev,
  .fp-controlArrow.fp-next,
  .fp-controlArrow.fp-down {
    border: solid $colorDark;
    border-width: 0 3px 3px 0;
  }
  .arrow-text {
    color: $colorDark;
  }
}
</style>
