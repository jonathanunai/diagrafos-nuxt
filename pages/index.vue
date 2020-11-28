<template>
  <div>
    <client-only>
      <full-page id="fullpage" ref="fullpage" :options="options">
        <div class="section">
          <div class="slide" data-anchor="slide1">
            <seccion-vacia @move="move" />
          </div>
          <div class="slide active" data-anchor="inicio">
            <seccion-inicio />
          </div>
          <div class="slide" data-anchor="tecnologia">
            <seccion-tecnologia />
          </div>
        </div>
        <div class="section">
          <div class="slide" data-anchor="slide1"><seccion-vacia /></div>
          <div class="slide active" data-anchor="empresa">
            <seccion-empresa />
          </div>
          <div class="slide" data-anchor="slide4"><seccion-vacia /></div>
        </div>
        <div class="section"><seccion-vacia /></div>
      </full-page>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        inicio: {
          left: 'Medio ambiente',
          right: 'Tecnología',
          top: '',
          bottom: '',
        },
      },
      options: {
        licenseKey: 'EFF395F3-223740EA-852328C3-423BED74',
        anchors: ['inicio', 'empresa', 'nosotros'],
        controlArrows: true,
        scrollHorizontally: true,
        onSlideLeave: (section, origin, destination, direction) => {
          this.log('AFTER SLIDE LOAD')
        },
        onLeave: (origin, destination, direction) => {
          this.log('AFTER LOAD')
        },
      },
    }
  },
  methods: {
    move(where) {
      if (where === 'left') this.$refs.fullpage.api.moveSlideLeft()
    },
    log(foo) {
      console.log(foo)
    },
  },
}
</script>
