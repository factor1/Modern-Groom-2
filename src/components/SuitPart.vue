<template>
  <div class="suit-container">
    <div class="suit-frame">
      <img class="suit-frame__image" :src="data[active].file" alt="suit">
    </div>
    <div class="suit-options">
      <div :class="{'suit-options__option':true, 'active': active == index }" v-for="(suit, index ) in data" :key="`suit-${suit.name}`" :style="`background-color: ${suit.color}`" @click="updateInfo(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data', 'active'],

  methods: {
    updateInfo(index) {
      this.$emit('updateInfo', index);
    }
  }
}
</script>

<style lang="scss" scoped>

.suit-container {
  margin: 50px 0;
  padding: 50px 0;
  border-bottom: solid 2px blue;
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
</style>
  
