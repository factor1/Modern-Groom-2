<template>
  <div class="home">
    <v-container class="mb-6 pa-10 text-center">
      <v-row align="start" >
        <v-col cols="12" sm="12" md="4">
          <v-img
            lazy-src="../assets/img/welcome.png"
            src="../assets/img/welcome.png"
          ></v-img>
          <v-btn depressed x-large to="/suit">
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
  components: {
  }
}
</script>
