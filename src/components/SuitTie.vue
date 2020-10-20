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
            <div :class="{'custom-check':true, 'active': radioGroup == index}" v-for="(type, index) in data.types" @click="radioGroup = index" :key="type.name" >
              <div class="icon-container">
                <v-icon mdi-check x-large v-show="radioGroup == index">mdi-check</v-icon>  
              </div>
              {{ type.name }}
            </div>
          </div>

          </v-container>
        </template>
      </div>
    </div>
    <div class="tie-container">
      <h2>Tie Colors</h2>
      <div class="tie-colors">
        <div :class="{'tie-colors__single-colors':true, 'active': selectedcolor == index } " v-for="(color, index) in data.colors" :key="color.name" :style="`background-color: ${color.hex}; border-color: ${color.hex};`" @click="updateColor(index)">
          <div :class="{'is-dark': isDark(color.rgb)}">
            {{ color.name }} 
          </div>
        </div>
      </div>
    </div>
    <p class="quote"><i>Swipe for color options</i></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioGroup: 0
    }
  },
  props:['data', 'selectedcolor', 'selectedtie'],

  methods: {
    updateColor(index) {
      this.$emit('updateColor', index);
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

  watch: {
    'radioGroup': function() {
      this.$emit('tieUpdate', this.radioGroup);
    }
  }
}
</script>

<style lang="scss" scoped>

$blue: #22394d;

.suit-container {
  margin: 0 0;
  padding: 20px 0;
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
    justify-content: space-evenly;

    .custom-check {
      display: flex;
      align-items: center;
      justify-content: center;

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

.tie-container {
  overflow-x: scroll;
}

.quote {
  margin: 10px 0;
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
</style>
  
