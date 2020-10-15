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
      <input type="hidden" id="testing-code">
      <v-btn depressed x-large @click="returnEdit(1)">
        Edit suit
      </v-btn>
      <v-btn depressed x-large @click="shareURL()">
        Share suit
      </v-btn>
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
      if( this.suit.color ) {
        paths[0].style.fill = this.suit.color.hex;
      }
    },

    returnEdit(step) {
      this.$emit('goto', step);
    },

    shareURL() {

      let codeToCopy = document.querySelector('#testing-code');
      let currentUrl = window.location.href;
      currentUrl = currentUrl.indexOf('?') < 0 ? currentUrl : currentUrl.substring(0, currentUrl.indexOf('?'));
      console.log(this.suit);
      codeToCopy.value = currentUrl +`?suit=${this.suitID.suit}&shirt=${this.suitID.shirt}&tie=${this.suitID.tie}&color=${this.suitID.color}`;
      codeToCopy.setAttribute('type', 'text');
      codeToCopy.select();
      try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successfully' : 'unsuccessfully';
        alert('Shareable url was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      codeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
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
    }
  }

  .suit-controls {
    &__suit-data {
      text-align: center;
    }
  }
</style>