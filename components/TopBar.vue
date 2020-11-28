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
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  img {
    width: 200px;
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
    }
  }
}
</style>
