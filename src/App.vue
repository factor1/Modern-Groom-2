<template>
  <v-app>
    <v-main>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  metaInfo() {
    return { 
      title: "MG2",
      meta: [
        { name: 'description', content:  'Description tag'},
        { property: 'og:title', content: "title"},
        { property: 'og:site_name', content: 'MG2'},
        { property: 'og:type', content: 'website'},    
        { name: 'robots', content: 'index,follow'}
      ]
    }
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

  // colors
  $blue: #22394d;

  h1,h2,h3 {
    color: $blue;
  }

  hr {
    margin: 40px 0;
  }

  .v-btn.theme--light {
    background-color: white;
    border-radius: 0;
    color: $blue;
    padding: 10px 80px !important;
    box-shadow: 0px 0px 20px #ccc !important;
    margin: 20px auto;
    font-size: 18px;
    font-weight: 800;
    height: 40px !important;

    &.dark {
      background-color: $blue !important;
      color: #fff; 
    }
  }

</style>
