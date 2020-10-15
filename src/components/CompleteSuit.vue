<template>
  <div>
    <h1>COMPLETE SUIT</h1>
    <div>
      {{suit}}
    </div>
    <div class="full-suit-comp">
      <img :src="suit.shirt.part" alt="shirt">
      <img :src="suit.suit.part" alt="suit">
      {{ suit.tie.part }}
      <img src="../assets/img/suits/head.png" alt="head">
    </div>
  </div>
</template>

<script>
export default {
  props:['suit']
}
</script>

<style lang="scss" scoped>
  .full-suit-comp {
    position: relative;
    img {
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    svg {
      max-width: 100%;
    }
  }
</style>