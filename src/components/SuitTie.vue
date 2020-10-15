<template>
  <div>
    <div class="suit-container">
      <div class="suit-frame">
        <img class="suit-frame__image" :src="data.types[selectedtie].file" alt="suit">
      </div>
      <div class="suit-options">
        <template>
          <v-container
            class="px-0"
            fluid
          >
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="(type, index) in data.types"
                :key="type.name"
                :label="type.name"
                :value="index"
              ></v-radio>
            </v-radio-group>

          </v-container>
        </template>
      </div>
    </div>
    <div class="tie-container">
      <div class="tie-colors">
        <div :class="{'tie-colors__single-colors':true, 'active': selectedcolor == index } " v-for="(color, index) in data.colors" :key="color.name" :style="`background-color: ${color.hex}; border-color: ${color.hex};`" @click="updateColor(index)">
          <div :class="{'is-dark': isDark(color.rgb)}">
            {{ color.name }} 
          </div>
        </div>
      </div>
    </div>
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

.suit-container {
  margin: 50px 0;
  padding: 50px 0;
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
}

.tie-container {
  overflow-x: scroll;
}

.tie-colors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 4300px;

  &__single-colors {
    min-width: 200px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    margin: 7px;
    cursor: pointer;

    &.active {
      border-color: blue !important;
    }

    .is-dark {
      color: #fff;
    }
  }

}
</style>
  
