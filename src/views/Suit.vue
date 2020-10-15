<template>
  <div class="suit">
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
