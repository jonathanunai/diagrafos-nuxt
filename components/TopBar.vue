<template>
  <div class="top-bar">
    <div class="img-wrapper">
      <img src="/img/Logotipo-Diagrafos_BL.png" alt="" />
    </div>

    <ul>
      <li><a href="https://shop.diagrafos.es/"> Iniciar sesión</a></li>
      <li>Ayuda</li>
    </ul>
  </div>
</template>
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
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
.light {
  .top-bar {
    img {
      content: url('/img/Logotipo-Diagrafos_NG.png');
    }
    ul li {
      color: $colorDark;
    }
  }
}
</style>
