<template>
  <div>
    <div class="suit-container">
      <div class="suit-frame" v-if="false">
        <img class="suit-frame__image" :src="data.types[selectedtie].file" alt="suit">
      </div>
      <h2>Tie Types</h2>
      <div class="suit-options">
        <template>
          <v-container
            class="px-0"
            fluid
          >
          <div class="check-container">
            <div :class="{'custom-check':true, 'active': selectedtie == index}" v-for="(type, index) in data.types" @click="updateTie(index); updateSelected(index)" :key="type.name" >
              <div class="icon-container">
                <v-icon mdi-check x-large v-show="selectedtie == index">mdi-check</v-icon>  
              </div>
              {{ type.name }}
            </div>
          </div>
          </v-container>
        </template>
      </div>
    </div>

    <vue-tabs
      active-tab-color="#22394d" 
      active-text-color="white"
      @tab-change="solidToggle">

      <v-tab title="Tie Colors">
        <div class="tie-container">
          <div class="tie-colors">
            <div :class="{'tie-colors__single-colors':true, 'active': selectedcolor == index } " v-for="(color, index) in sortedColors" :key="color.name" :style="`background-color: ${color.hex}; border-color: ${color.hex};`" @click="updateColor(index)">
              <div :class="{'is-dark': isDark(color.rgb)}">
                {{ color.name }}
              </div>
            </div>
          </div>
        </div>
        <p class="quote"><i>Swipe for color options</i></p>
      </v-tab>

      <v-tab title="Tie Patterns" v-if="data.types[selectedtie].name != 'Bow tie'">
        <div class="tie-pattern">
          <div class="pattern-container">
            <div :class="{'single-pattern':true, 'active': selectedpattern == index}" v-for="(pattern, index) in data.patterns" @click="updatePattern(index)" :key="pattern.name+index" v-show="pattern.type == data.types[selectedtie].name" :style="`background: url(${data.patterns[index].file}) center/cover;`">
              <div class="selection-border"></div>
            </div>
          </div>
        </div>
        <p class="quote"><i>Swipe for pattern options</i></p>
      </v-tab>

    </vue-tabs>

  </div>
</template>

<script>
import {VueTabs, VTab} from 'vue-nav-tabs';

// mixin
import suitMixin from '../mixins/suitmixin';
export default {
  props:['data', 'selectedcolor', 'selectedtie', 'selectedpattern', 'patterntoggle'],

  mixins:[suitMixin],

  methods: {
    updateColor(index) {
      this.$emit('updateColor', index);
    },
    updateTie(index) {
      this.$emit('tieUpdate', index);
    },
    updatePattern(index) {
      this.$emit('patternUpdate', index);
    },

    updateSelected(index) {
      const patternIndex = this.data.patterns.findIndex(pattern => pattern.type == this.data.types[index].name);
      this.updatePattern(patternIndex);
    },

    solidToggle(tabIndex) {
      const toggleState = tabIndex ? false : true;
      this.$emit('toggleUpdate', toggleState);
      this.updateColor(0);
    },

    isDark: rgb => (
      Math.round(
        ((
          (parseInt(rgb.r) * 299) +
          (parseInt(rgb.g) * 587) +
          (parseInt(rgb.b) * 114)) / 1000)
      ) < 125
    ),

  },

  computed: {
    sortedColors() {
      let allColors = this.data.colors;
      return allColors.sort((a, b) => a.name.localeCompare(b.name));
    }
  },

  components: {
    VueTabs,
    VTab
  }

}
</script>

<style lang="scss" scoped>

$blue: #22394d;

.tab-content section{
  border: solid 1px #dddddd !important;
  border-top: none !important;
}

.suit-container {
  margin: 0 0;
  padding: 20px 0 10px;
}

.suit-frame {
  &__image {
    width: 100%;
  }
}

.suit-options {
  display: flex;
  justify-content: space-evenly;
  &__option {
    height: 20px;
    width: 20px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    cursor: pointer;

    &.active {
      border-color: red;
    }

  }

  .check-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .custom-check {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-basis: 50%;
      margin-bottom: 20px;

      .icon-container {
        font-size: 40px;
        border: 1px solid $blue;
        border-radius: 10px;
        width: 35px;
        height: 35px;
        margin-right: 20px;
        cursor: pointer;
        i {
          font-size: 25px !important;
          top: -18px;
          color: #fff;
        }
      }
      &.active {
        .icon-container {
          background-color: $blue;
        }
      }
    }

  }
}

.tie-container, .tie-pattern {
  overflow-x: scroll;
  max-width: 100%;
}

.quote {
  margin: 10px;
  color: #ccc;
  font-weight: 300;
}

.tie-colors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 3200px;

  &__single-colors {
    min-width: 137px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid;
    margin: 7px;
    font-size: 11px;
    cursor: pointer;

    &.active {
      border-color: #3a678d !important;
    }

    .is-dark {
      color: #fff;
    }
  }

}

.pattern-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 700px;

  .single-pattern {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 137px;
    min-height: 50px;
    margin: 7px;
    font-size: 11px;
    cursor: pointer;

    &.active .selection-border{
      border-color: #3a678d !important;
    }

    .selection-border {
      height: 100%;
      width: 100%;
      border: solid 8px transparent;
    }
  }
}

</style>
  
