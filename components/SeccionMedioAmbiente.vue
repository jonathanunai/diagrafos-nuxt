<template>
  <div class="section-container section-medio-ambiente">
    <arrow-text
      type="left"
      text="Tecnologia"
      @click.native="$nuxt.$emit('move', 'left')"
    />
    <arrow-text
      type="right"
      text="Inicio"
      @click.native="$nuxt.$emit('move', 'right')"
    />
    <arrow-text
      type="down"
      text=""
      @click.native="$nuxt.$emit('move', 'down')"
    />

    <div class="content">
      <div class="side left-side">
        <div class="info-text">
          <p>
            Trabajando en el presente con visión de futuro.
            <span class="strong">Limitar la huella ecológica</span> que genera
            nuestra actividad.
          </p>
          <p>
            <span class="strong"
              >Materiales ecológicos, reciclados y libre de cloro</span
            >
            (blanqueo de la pasta oxigeno y ozono)
          </p>
          <p>
            El uso de pliegos de <span class="strong">papel ecológico</span> de
            procedencia <span class="strong">certificada FSC</span> ayudan a
            crear un proceso de producción
            <span class="strong">menos dañino para el medio ambiente</span> y
            más <span class="strong">sostenible</span> en general ya que la
            procedencia de estos materiales está controlada. Tanto en los
            procesos de obtención como de fabricación se omiten procesos
            químicos dañinos para el ecosistema.
          </p>
        </div>
      </div>
      <div class="side right-side">
        <div class="section-title"><span>Soluciones</span> Sostenibles</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.section-medio-ambiente {
  height: 100vh;
  background: url('/img/Img_Medio-Ambiente.jpg');
  background-size: cover;
  background-position: center;
  .content {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
    @include md {
      flex-direction: row;
    }
  }
  .side {
    width: 100vw;
    @include md {
      height: 100%;
      width: 50vw;
    }
  }
  .right-side {
    height: 100%;
    @include md {
      transform: none;
    }
  }
  .left-side {
    background: rgba(255, 255, 255, 0.8);
    padding: 0;
    color: $colorDark;
    text-align: right;
    display: flex;
    align-items: flex-end;
    @include md {
    }
    .info-text {
      padding: 1rem;

      border-top: 6px solid $colorDark;
      @include md {
        padding: 4rem;
        padding-top: 12rem;
      }
    }
    p {
      padding-bottom: 1rem;
      font-weight: 500;
    }
  }
  .section-title {
    text-transform: none;
    font-weight: 900;
    font-size: 3.2rem;
    text-align: center;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    @include md {
      margin-left: 3rem;
      margin-top: 12rem;
      font-size: 3.8rem;
      line-height: 4.2rem;
      text-align: left;
      top: unset;
      transform: none;
    }
    @include lg {
      font-size: 5rem;
      line-height: 4.5rem;
    }

    span {
      color: black;
      -webkit-text-fill-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: black;
      @include md {
        -webkit-text-stroke-width: 3px;
      }
    }
  }
}
</style>
