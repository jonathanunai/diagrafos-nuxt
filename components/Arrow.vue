<template>
  <div class="arrow-text" :class="type" ref="fff" @click="$emit('move')">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: ['type', 'text'],
}
</script>
<style lang="scss">
.fp-controlArrow {
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
}
.arrow-text {
  position: fixed;
  text-transform: uppercase;
  margin-top: -33px;
  font-weight: 500;
  &.left {
    left: 58px;
    top: 50%;
  }
}
</style>
