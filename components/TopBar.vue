<template>
  <div class="top-bar">
    <img src="/img/Logotipo-Diagrafos_BL.png" alt="" />
    <ul>
      <li>Iniciar sesión</li>
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
  img {
    width: 200px;
    transition: all 2.5 ease;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    li {
      float: left;
      margin-right: 18px;
      text-transform: uppercase;
      font-size: 0.85rem;
      transition: all 2.5 ease;
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
