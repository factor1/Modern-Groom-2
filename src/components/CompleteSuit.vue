<template>
  <div>
    <h1>View my suit</h1>
    <div class="full-suit-comp">
      <img class="full-suit-comp__base-image" :src="suit.shirt.part" alt="shirt">
      <img :src="suit.tie.part" alt="tie">
      <BowTieComp v-if="suit.tie.name === 'Bowtie'"/>
      <NeckTieComp v-else/>
      <img :src="suit.suit.part" alt="suit">
      <img src="../assets/img/suits/head.png" alt="head">
    </div>
    <div class="suit-controls">
      <div>
        <p class="suit-controls__suit-data">
          Your selections <br>
          {{ suit.suit.name }} Suit<br>
          {{ suit.shirt.name }} Shirt<br>
          {{ suit.tie.name }}<br>
          {{ suit.color.name }} Tie<br>
        </p>
      </div>
      <hr>
      <v-btn depressed x-large @click="returnEdit(1)">
        Edit suit
      </v-btn>
      <v-btn depressed x-large>
        Share suit
      </v-btn>
    </div>
  </div>
</template>

<script>

import BowTieComp from '../assets/img/shirts_and_ties/Bowtie.svg';
import NeckTieComp from '../assets/img/shirts_and_ties/necktie.svg';

export default {

  props:['suit'],

  components: {
    BowTieComp,
    NeckTieComp
  },

  methods: {
    updatetieColor() {
      const paths = document.getElementsByTagName("path");
      if( this.suit.color ) {
        paths[0].style.fill = this.suit.color.hex;
      }
    },

    returnEdit(step) {
      this.$emit('goto', step);
    }
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
  .full-suit-comp {
    position: relative;

    &__base-image {
      position: relative !important;
    }

    img {
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    svg {
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .suit-controls {
    &__suit-data {
      text-align: center;
    }
  }
</style>