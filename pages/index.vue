<template>
  <div>
    <client-only>
      <full-page id="fullpage" ref="fullpage" :options="options">
        <div class="section">
          <div class="slide" data-anchor="slide1"></div>
          <div class="slide active" data-anchor="slide2">
            <seccion-inicio />
          </div>
          <div class="slide" data-anchor="slide3">Slide 3</div>
        </div>
        <div class="section">
          <div class="slide" data-anchor="slide1">Slide 1</div>
          <div class="slide" data-anchor="slide2">Slide 2</div>
          <div class="slide" data-anchor="slide3">Slide 3</div>
          <div class="slide" data-anchor="slide4">Slide 4</div>
        </div>
        <div class="section">NISIREIS ...</div>
      </full-page>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        licenseKey: 'EFF395F3-223740EA-852328C3-423BED74',
        anchors: ['inicio', 'empresa', 'nosotros'],
        controlArrows: true,
        scrollHorizontally: true,
      },
    }
  },
}
</script>
