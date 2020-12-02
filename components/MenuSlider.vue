<template>
  <nav role="navigation">
    <div id="menuToggle" :class="openMenu ? 'open' : ''">
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="menu">
        <img src="/img/Logotipo-Diagrafos_NG.png" alt="" />
        <ul @click="closeMenu">
          <li class="uppercase" @click="moveTo('seccion-inicio', 1)">
            <nuxt-link to="/">Inicio</nuxt-link>
          </li>
          <li class="uppercase" @click="moveTo('seccion-nosotros', 1)">
            <nuxt-link to="#nosotros#nosotros">Nosotros</nuxt-link>
          </li>
          <li class="uppercase" @click="moveTo('seccion-empresa', 1)">
            <nuxt-link to="#empresa/empresa">Empresa</nuxt-link>
          </li>
          <li class="uppercase"><nuxt-link to="/">Contacto</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    openMenu() {
      return this.$store.state.menuOpen
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu')
    },
    closeMenu() {
      this.$store.dispatch('closeMenu')
    },
    moveTo(section, slide) {
      this.$nuxt.$emit('move-to', [section, slide])
    },
  },
}
</script>
<style lang="scss">
#menuToggle {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 110;
  -webkit-user-select: none;
  user-select: none;
  color: $colorDark;
  a {
    text-decoration: none;
    color: $colorDark;
    transition: all 0.3s ease;
    text-transform: uppercase;
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
    @include md {
      font-size: 2.3rem;
    }

    &:hover {
      li {
        transition: all 0.3s ease;
        transform: skewX(-9deg);
      }
    }
  }
  img {
    width: calc(100% - 40px);
    margin-left: 40px;
  }
  .hamburger {
    display: block;
    width: 36px;
    height: 32px;
    position: absolute;
    top: 30px;
    left: 35px;
    cursor: pointer;
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
    @include sm {
      top: 36px;
    }
  }
  span {
    display: block;
    width: 33px;
    height: 2px;
    margin-bottom: 6px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menu {
    position: absolute;
    overflow: scroll;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 50px;
    padding-top: 28px;
    background: #ffffff;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    z-index: 1;
    > * {
      padding-bottom: 8px;
      font-size: 1.45rem;
    }
    @include md {
      width: 330px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      padding-top: 64px;
      .uppercase {
        padding-bottom: 18px;
        ul li {
          text-transform: none;
          padding-top: 4px;
        }
      }
    }
  }
  &.open {
    span {
      opacity: 1;
      transform: rotate(45deg) translate(-3px, -18px);
      background: #232323;
    }
    span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    span:nth-last-child(2) {
      transform: rotate(-45deg) translate(-1px, 18px);
    }
    #menu {
      transform: none;
      box-shadow: 0 0 30px 10px rgba(23, 23, 23, 0.6);
    }
  }
}
.light #menuToggle span {
  background: $colorDark;
}
</style>
