<template>
  <div class="suit">
    <SuitPicker/>
  </div>
</template>

<script>
// @ is an alias to /src
import SuitPicker from '../components/SuitPicker';

export default {
  name: 'Suit',
  metaInfo() {
    return {
      title: 'Suit',
      meta: [
        { name: 'description', content: 'Content tag'},
        { property: 'og:title', content: 'Og Title'},
        { property: 'og:site_name', content: 'MG2'},
        { property: 'og:description', content: 'Description'},
        { property: 'og:type', content: 'home'},
        { property: 'og:url', content: 'http://www.test.com'},
        { property: 'og:image', content: '../assets/img/welcome.png' }    
      ]
    }
  },
  components: {
    SuitPicker,
  }
}
</script>
