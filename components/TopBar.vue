<template>
  <div class="top-bar">
    <div class="img-wrapper">
      <img src="/img/Logotipo-Diagrafos_BL.png" alt="" />
    </div>

    <ul>
      <li>
        <div href="https://shop.diagrafos.es/" @click="toggleClientLogin">
          Acceso clientes
        </div>
      </li>
      <li>Ayuda</li>
    </ul>
    <transition name="slide-fade">
      <div v-if="showClientLogin" class="client-login">
        <div class="login-header">Acceso para clientes</div>
        <div class="login-links">
          <div class="undeline undeline-blue">
            <a href="https://shop.diagrafos.es">
              <img
                src="/img/OnPS_Diagrafos.png"
                alt="Acceso a Online Printing Supply"
              />
            </a>
          </div>
          <div class="undeline">
            <a
              href="https://diagrafos.gesgraph.com/tiendaVirtual/webTienda/index.asp"
              target="_blank"
            >
              <img
                src="/img/OnPC_Diagrafos.png"
                alt="Acceso a Online Printing Control"
              />
            </a>
          </div>
          <div class="undeline undeline-red">
            <a
              href="https://onlinevisualchange.com/"
              target="_blank"
            >
              <img
                src="/img/OnVC_Diagrafos.png"
                alt="Acceso a Online Visual change"
              />
            </a>
          </div>
        </div>
      </div>
    </transition>
    <div
      v-if="showClientLogin"
      class="background"
      @click="toggleClientLogin"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showClientLogin: false,
    }
  },
  methods: {
    toggleClientLogin() {
      this.showClientLogin = !this.showClientLogin
    },
  },
}
</script>
<style lang="scss">
.top-bar {
  position: fixed;
  z-index: 10;
  width: calc(100% - 90px);
  top: 15px;
  left: 90px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 200px;
      transition: all 2.5 ease;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-left: 15px;
    display: flex;
    align-items: center;
    li {
      float: left;
      margin-right: 18px;
      text-transform: uppercase;
      font-size: 0.85rem;
      transition: all 2.5 ease;
      cursor: pointer;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  .background {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
  }
  .client-login {
    position: absolute;
    background: $colorDark;
    padding: 12px 24px;
    right: 0;
    top: 4rem;
    width: 90vw;
    border-radius: 1rem;
    z-index: 12;
    margin: auto;
    transform: translateX(-5%);
    @include md {
      width: auto;

      right: 12px;
      top: 50px;
    }
    .login-header {
      color: $colorWhite;
      font-weight: bold;
      text-align: center;
    }
    .login-links {
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;
      @include md {
        flex-direction: row;
      }
    }
    img {
      padding: 48px;
      padding-bottom: 0;
      display: inline-block;
      width: 100%;
      @include md {
        padding: 24px;
        padding-bottom: 0;

        width: 220px;
      }
    }
    .undeline {
      cursor: pointer;
      z-index: 100;
      @include md {
        width: auto;
        width: 50%;
      }
    }
    .undeline:after {
      display: block;
      content: '';
      border-bottom: solid 3px #a2bd30;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    .undeline-blue:after {
      border-bottom: solid 3px #69a8d9;
    }
    .undeline-red:after {
      border-bottom: solid 3px red;
    }
    .undeline:hover:after {
      transform: scaleX(1);
    }
  }
}
.light {
  .top-bar {
    .img-wrapper {
      img {
        content: url('/img/Logotipo-Diagrafos_NG.png');
      }
    }
    ul li {
      color: $colorDark;
    }
    .client-login {
      box-shadow: 0 32px 48px 0 rgb(52 52 52 / 80%);
    }
  }
}
</style>
