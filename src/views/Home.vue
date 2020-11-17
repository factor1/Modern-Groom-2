<template>
  <div class="home">
    <v-container class="mb-6 pa-10 text-center">
      <v-row align="start" >
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <v-img
            lazy-src="../assets/img/welcome.png"
            src="../assets/img/welcome.png"
          ></v-img>
          <v-btn depressed x-large to="/suit" class="groom-btn">
            Get started
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Home',
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
  }
}
</script>
