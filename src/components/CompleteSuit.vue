<template>
  <div>
    <h2>View my suit</h2>
    <div class="full-suit-comp">
      <img class="full-suit-comp__base-image" :src="suit.shirt.part" alt="shirt">
      <div class="tie-component" :style="`background-image: url(${suit.tie.part})`">
        <BowTieComp v-if="suit.tie.name === 'Bow tie'"/>
        <NeckTieComp v-else/>
      </div>
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
          {{ suit.color.name }} Tie<br>
        </p>
      </div>
      <hr>
      <input type="hidden" id="testing-code">
      <div class="buttons-container">
        <div class="button-box" @click="returnEdit(1)">
          <v-icon x-large>mdi-pencil</v-icon>
          Edit suit
        </div>
        <div class="button-box" @click="shareURL()">
          <v-icon x-large>mdi-upload-outline</v-icon>
          Share suit
        </div>
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

  .buttons-container {
    display: flex;
    justify-content: space-around;

    .button-box {
      display: flex;
      flex-direction: column;
      color: $blue;

      i {
        color: $blue;
      }
    }
  }
</style>