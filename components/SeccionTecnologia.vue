<template>
  <div class="section-container section-tecnologia">
    <arrow-text
      type="left"
      text="Inicio"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Medio ambiente"
      @click.native="$nuxt.$emit('move', 'right')"
    />

    <div class="content">
      <div class="section-title">Tecnología</div>
      <p>
        Te ofrecemos nuestro conocimiento técnico y tecnológico en el proceso de
        la comunicación gráfica de tu empresa. OPC acompaña a un amplio abanico
        de productos, una herramienta indispensable para controlar los pedidos,
        teniendo el status inmediato de los trabajos, un histórico completo de
        todo lo hecho con enlaces directos a los archivos. Pensado para que te
        ayuden a potenciar tus ventas, dándote tranquilidad, control y agilidad
        en todo el proceso.
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.section-tecnologia {
  height: 100vh;
  background: url('/img/Img_Tecnologia.jpg');
  background-size: cover;
  background-position: center;
  color: $colorDark;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: 24px;
  p {
    max-width: 900px;
  }
  .section-title {
    position: relative;
    margin-bottom: 3rem;
    @include md {
      margin-bottom: 5rem;
    }
    &:after {
      position: absolute;
      bottom: -16px;
      content: ' ';
      border: 4px solid $colorDark;
      width: 50%;
      left: 0;
      transform: translateX(50%);
      @include md {
        bottom: -32px;

        border: 6px solid $colorDark;
      }
    }
  }
}
</style>
