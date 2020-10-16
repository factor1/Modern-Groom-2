<template>
  <div class="suit-container">
    <div class="suit-frame">
      <img class="suit-frame__image" :src="data[active].file" alt="suit">
    </div>
    <h2 v-if="title">{{ title }}</h2>
    <div class="suit-options">
      <div :class="{'suit-options__option':true, 'active': active == index }" v-for="(suit, index ) in data" :key="`suit-${suit.name}`" :style="`background-color: ${suit.color}`" @click="updateInfo(index)"></div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props:['data', 'active', 'title'],

  methods: {
    updateInfo(index) {
      this.$emit('updateInfo', index);
    }
  }
}
</script>

<style lang="scss" scoped>

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
  margin: 30px 0px;
  &__option {
    height: 35px;
    width: 35px;
    border: 4px solid #ffffff;
    border-radius: 10px;
    cursor: pointer;

    &.active {
      border-color: #236096;
    }

  }
}
</style>
  
