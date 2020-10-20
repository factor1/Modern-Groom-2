<template>
  <v-app>
    <v-app-bar
      app
      color="#0e2942"
      flat
      height="80"
    >
      <div class="d-flex align-center">
        <v-img
          alt="The Modern Groom"
          class="shrink m-4"
          contain
          src="../src/assets/img/whitelogo.png"
          transition="scale-transition"
          width="220"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://themoderngroom.com/"
        target="_self"
        text
        class="groom-btn nav"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

    <v-card>
      <v-footer class="pa-0">
        <v-card
          flat
          tile
          width="100%"
          class="text-center"
          color="#0e2942"
        >
          <v-card-text class="white--text">
            <strong>© {{ new Date().getFullYear() }} The Modern Groom</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>

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
    margin: 40px 0 0;
  }

  .groom-btn {
    background-color: white !important;
    border-radius: 0 !important;
    color: $blue !important;
    padding: 10px 80px !important;
    box-shadow: 0px 0px 20px #ccc !important;
    margin: 20px auto !important;
    font-size: 18px;
    font-weight: 500;
    height: 40px !important;

    &.dark {
      background-color: $blue !important;
      color: #fff !important; 
    }

    &.nav {
      box-shadow: none !important;
      padding: 10px 20px !important;
    }
  }


</style>