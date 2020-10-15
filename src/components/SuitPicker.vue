<template>
  <div>

    <v-container class="mb-6" v-show="step == 1">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="12">
          <h1>Build my suit</h1>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <SuitPart :data="suits" title="Suit Swatches" :active="suitCombo.suit" @updateInfo="updateSuit($event)" />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <SuitPart :data="shirts" title="Shirt Swatches" :active="suitCombo.shirt" @updateInfo="updateShirt($event)" />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <SuitTie :data="ties" :selectedcolor="suitCombo.color" :selectedtie="suitCombo.tie" @updateColor="setColor($event)" @tieUpdate="updateTie($event)" />
        </v-col>
      </v-row>
      <v-btn depressed x-large @click="step = 2">
        Build my suit
      </v-btn>
    </v-container>

    <v-container class="mb-6" v-show="step == 2">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="12">
          <CompleteSuit :suit="fullSuit" :suitID="suitCombo" @goto=" step = $event "/>
        </v-col>
        <v-btn depressed x-large @click="step = 3">
          Get Quote
        </v-btn>
      </v-row>
    </v-container>

  </div>
</template>
  

<script>

// Components
import SuitPart from '../components/SuitPart';
import SuitTie from '../components/SuitTie';
import CompleteSuit from '../components/CompleteSuit';

// mixin
import suitMixin from '../mixins/suitmixin';

export default {

  mixins:[suitMixin],

  data: () => ({
    step: 1, 
    suitCombo:{
      suit:0,
      shirt:0,
      tie:0,
      color: 0
    },
  }),

  components: {
    SuitPart,
    SuitTie,
    CompleteSuit
  },

  methods: {
    updateSuit(event) {
      this.suitCombo.suit = event;
    },
    updateShirt(event) {
      this.suitCombo.shirt = event;
    },
    setColor(index){
      this.suitCombo.color = index;
    },
    updateTie(index){
      this.suitCombo.tie = index;
    }
  },

  beforeMount() {
    const suit = this.$route.query.suit;
    const shirt = this.$route.query.shirt;
    const tie = this.$route.query.tie;
    const color = this.$route.query.color;

    if (suit,shirt,tie,color) {
      this.suitCombo.suit = this.suits[suit] ? suit : 0;
      this.suitCombo.shirt = this.shirts[shirt] ? shirt : 0;
      this.suitCombo.tie = this.ties.types[tie] ? tie : 0;
      this.suitCombo.color = this.ties.colors[color] ? color : 0;
      this.step = 2;
    }

  }

}
</script>

<style lang="scss" scoped>

</style>