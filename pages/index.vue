<template>
  <div :class="[activeSlide, mode]">
    <client-only>
      <full-page id="fullpage" ref="fullpage" :options="options">
        <div class="section" data-anchor="seccion-inicio">
          <div class="slide" data-anchor="medio-ambiente">
            <seccion-medio-ambiente @move="move" />
          </div>
          <div class="slide active" data-anchor="inicio">
            <seccion-inicio />
          </div>
          <div class="slide" data-anchor="tecnologia">
            <seccion-tecnologia />
          </div>
        </div>
        <div class="section" data-anchor="seccion-empresa">
          <div class="slide" data-anchor="hoteles"><seccion-hoteles /></div>
          <div class="slide active" data-anchor="empresa">
            <seccion-empresa />
          </div>
          <div class="slide" data-anchor="moda"><seccion-moda /></div>
        </div>
        <div class="section" data-anchor="seccion-nosotros">
          <div class="slide" data-anchor="gimnasios">
            <seccion-gimnasios />
          </div>
          <div class="slide" data-anchor="nosotros">
            <seccion-nosotros />
          </div>
          <div class="slide" data-anchor="alimentacion">
            <seccion-alimentacion />
          </div>
        </div>
      </full-page>
    </client-only>
  </div>
</template>
<script>
const toCamel = (s) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

export default {
  data() {
    return {
      config: {
        inicio: {
          left: 'Medio ambiente',
          right: 'Tecnología',
          top: '',
          bottom: 'Empresa',
        },
        mode: {
          inicio: 'dark',
          vacia: 'dark',
          tecnologia: 'dark',
          empresa: 'light',
          medioAmbiente: 'light',
          vacia3: 'light',
        },
      },
      options: {
        licenseKey: 'EFF395F3-223740EA-852328C3-423BED74',
        anchors: ['seccion-inicio', 'seccion-empresa', 'seccion-nosotros'],
        controlArrows: true,
        scrollHorizontally: true,
        navigation: true,
        afterSlideLoad: () => {
          this.loadMode()
        },
        afterLoad: () => {
          this.loadMode()
        },
      },
    }
  },
  computed: {
    activeSlide() {
      if (typeof this.$store.state.slide.anchor === 'string')
        return toCamel(this.$store.state.slide.anchor)
      else return 'inicio'
    },
    mode() {
      return this.config.mode[this.activeSlide]
    },
  },
  created() {
    this.$nuxt.$on('move-to', (params) => {
      this.$refs.fullpage.api.moveTo(params[0], params[1])
    })
    this.$nuxt.$on('move', (to) => {
      switch (to) {
        case 'down':
          this.$refs.fullpage.api.moveSectionDown()
          break
        case 'up':
          this.$refs.fullpage.api.moveSectionUp()
          break
        case 'left':
          this.$refs.fullpage.api.moveSlideLeft()
          break
        case 'right':
          this.$refs.fullpage.api.moveSlideRight()
          break

        default:
          break
      }
    })
  },
  mounted() {
    /* document.body.classList.add(
      this.config.mode[this.activeSlide],
      this.$store.state.slide.anchor
    )
    */
  },
  beforeDestroy() {
    this.$nuxt.$off('move-to')
    this.$nuxt.$off('move')
  },

  methods: {
    move(where) {
      if (where === 'left') this.$refs.fullpage.api.moveSlideLeft()
      else if (where === 'empresa') this.$refs.fullpage.api.moveTo('empresa', 0)
    },
    moveTo(section, slide) {
      this.$refs.fullpage.api.moveTo(section, slide)
    },
    loadMode() {
      if (
        document.body.classList.contains(
          'fp-viewing-seccion-inicio-medio-ambiente'
        ) ||
        document.body.classList.contains(
          'fp-viewing-seccion-empresa-empresa'
        ) ||
        document.body.classList.contains('fp-viewing-seccion-inicio-tecnologia')
      )
        document.body.classList.add('light')
      else document.body.classList.remove('light')
    },
  },
}
</script>
