<template>
  <div class="suit-container">
    <!-- <div class="suit-frame" v-if="!nothumbnail">
      <img class="suit-frame__image" :src="data[active].file" alt="suit">
    </div> -->
    <h2 v-if="title">{{ title }}</h2>
    <div class="suit-options"> 
      <div class="suit-options__option-container" v-for="(suit, index ) in data" :key="`suit-${suit.name}`" @click="updateInfo(index)">
        <div :class="{'suit-options__option':true, 'active': active == index }" :style="`background-color: ${suit.color}`" ></div>
        <span>{{ suit.name }}</span>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props:['data', 'active', 'title', 'nothumbnail'],

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
  padding: 20px 0 10px;
}

.suit-frame {
  &__image {
    width: 100%;
  }
}

.suit-options {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 30px 0px;

  &__option-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &__option {
    height: 35px;
    width: 35px;
    border: 4px solid #ffffff;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;

    &.active {
      border-color: #236096;
    }

  }
}
</style>
  
