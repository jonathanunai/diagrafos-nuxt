<template>
  <div class="section-container section-hoteles">
    <arrow-text type="left" text="Moda" @move="$emit('move', 'left')" />
    <arrow-text type="right" text="Empresa" @move="$emit('move', 'right')" />
    <div class="content">
      <div class="section-title">
        <span>Sector</span><br />
        Hoteles
        <p class="subtitle">Toda una vida con vosotros.</p>
      </div>
      <div class="bottom-text">
        La capacidad de gestionar de un vistazo todos los pedidos de toda la
        cadena o de un hotel.<br />
        Disponga de su
        <span class="strong"
          >espacio personalizado para la tramitación de pedidos</span
        >, control del material de stock.<br />
        Tenga el seguimiento del producto en todo momento, desde el ok al pedido
        hasta la confirmación de su entrega.<br />
        No perder el cuidado de su marca, homogenéidad en todos sus productos, y
        una logística que cumpla con las fechas.<br />
        <span class="bottom-line"
          >Esté al día de las novedades en materiales nuevos en el
          mercado.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // console.log('vacia created')
  },
}
</script>
<style lang="scss">
.section-hoteles {
  background: url('/img/Img_Sector-Hoteles.jpg');
  background-size: cover;
  background-position: center;

  .section-title {
    color: #ffffff;
    text-transform: none;
    font-size: 2.8rem;
    text-align: left;
    position: relative;
    text-transform: uppercase;
    transform: translate(0%, -100%);
    @include md {
      margin-left: 3rem;
      font-size: 6.2rem;
      line-height: 5rem;
      transform: translate(-30%, -50%);
    }
    span {
      color: black;
      -webkit-text-fill-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ffffff;
      @include md {
        -webkit-text-stroke-width: 3px;
      }
    }
  }
  .subtitle {
    text-align: left;
    font-weight: 500;
    font-size: 1.4rem;
    text-transform: none;
    @include md {
      font-size: 2rem;
    }
  }
  .bottom-text {
    text-align: right;
    line-height: 1.6rem;
    width: 100%;
    position: absolute;
    background: $colorDark;
    padding: 12px 24px;
    font-size: 0.9rem;
    bottom: 0;
    @include md {
      padding: 24px 32px;
      bottom: 3.2rem;
      font-size: 1.2rem;
    }

    .bottom-line {
      font-weight: 700;
      padding-top: 1rem;
      display: block;
      padding-top: 0.9rem;
      font-size: 1.15rem;

      @include md {
        padding-top: 1rem;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
