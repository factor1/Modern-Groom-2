<template>
  <div class="home">
    <SuitPicker/>
  </div>
</template>

<script>
// @ is an alias to /src
import SuitPicker from '../components/SuitPicker';

export default {
  name: 'Home',
  components: {
    SuitPicker,
  }
}
</script>
