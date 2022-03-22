<template>
  <div>
    <div class="full-suit-comp">
      <img class="full-suit-comp__base-image" :src="suit.shirt.part" alt="shirt">
      <div class="tie-component" :style="`background-image: url(${ suit.solid_toggle ? suit.tie.part : suit.pattern.part})`">
        <BowTieComp v-if="suit.tie.name === 'Bow tie'"/>
        <NeckTieComp v-else/>
      </div>
      <img :src="suit.tie.part" alt="tie shadow" class="tie-shadow">
      <img :src="suit.suit.part" alt="suit">
      <img src="../assets/img/suits/head.png" alt="head">
    </div>
    <div class="suit-controls">
      <div>
        <p class="suit-controls__suit-data">
          Your selections <v-icon small>mdi-chevron-down</v-icon> <br>
          {{ suit.suit.name }} Suit<br>
          {{ suit.shirt.name }} Shirt<br>
          {{ suit.tie.name }}<br>
          {{ suit.solid_toggle ? suit.color.name : suit.pattern.name }} Tie<br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import BowTieComp from '../assets/img/shirts_and_ties/Bowtie.svg';
import NeckTieComp from '../assets/img/shirts_and_ties/necktie.svg';

export default {

  props:['suit', 'suitID'],

  components: {
    BowTieComp,
    NeckTieComp
  },

  methods: {
    updatetieColor() {
      const paths = document.getElementsByTagName("path");
      if( this.suit.color && this.suit.solid_toggle ) {
        paths[0].style.fill = this.suit.color.hex;
      }
    },

    returnEdit(step) {
      this.$emit('goto', step);
      this.$emit('toggleUpdate', true);
    },

  },

  mounted() {
    this.updatetieColor();
  },

  watch: {
    'suit': function() {
      this.updatetieColor();
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue: #22394d;

  hr {
    margin: 30px 0;
  }

  .full-suit-comp {
    position: relative;
    margin: 20px 0;

    &__base-image {
      position: relative !important;
    }

    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    svg {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      mix-blend-mode: multiply;
    }

    .tie-shadow {
      mix-blend-mode: color-burn;
    }

  }

  .tie-component {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .suit-controls {
    &__suit-data {
      text-align: center;
    }
  }

</style>