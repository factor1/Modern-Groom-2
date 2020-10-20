<template>
  <div>

    <v-container class="mb-6 pa-10 text-center" v-if="step == 1">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="12">
          <h2>Build My Suit</h2>
        </v-col>
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <SuitPart :data="suits" title="Suit Swatches" :active="suitCombo.suit" @updateInfo="updateSuit($event)" />
        </v-col>
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <SuitPart :data="shirts" title="Shirt Swatches" :active="suitCombo.shirt" :nothumbnail="true" @updateInfo="updateShirt($event)" />
        </v-col>
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <SuitTie :data="ties" :selectedcolor="suitCombo.color" :selectedtie="suitCombo.tie" @updateColor="setColor($event)" @tieUpdate="updateTie($event)" />
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-btn depressed x-large @click="step = 2" class="groom-btn">
            Build my suit
          </v-btn>
        </v-col>
      </v-row>

    </v-container>

    <v-container class="mb-6 pa-10 text-center" v-if="step == 2">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <CompleteSuit :suit="fullSuit" :suitID="suitCombo" @goto=" step = $event "/>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-btn depressed x-large @click="step = 3" class="groom-btn dark">
            Get Quote
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-6 pa-10 text-center" v-if="step == 3">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="4" offset-md="4">
          <h2>Send Us Your Info</h2>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Full Name"
                  color=" #22394d"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  color=" #22394d"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Phone"
                  color=" #22394d"
                  required
                ></v-text-field>

                <v-select
                  v-model="select"
                  :items="states"
                  :rules="[v => !!v || 'Item is required']"
                  label="State"
                  color=" #22394d"
                  required
                ></v-select>

                <v-menu
                  ref="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Date"
                      persistent-hint
                      v-bind="attrs"
                      v-on="on"
                      color=" #22394d"
                      :rules="dateRules"
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                  ></v-date-picker>
                </v-menu>

              </v-form>

        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-btn depressed x-large @click="sendMail" class="groom-btn dark">
            send
          </v-btn>
        </v-col>

      </v-row>
    </v-container>

  </div>
</template>
  

<script>
// email
import { Email } from '../vendor/smtp';

// Components
import SuitPart from '../components/SuitPart';
import SuitTie from '../components/SuitTie';
import CompleteSuit from '../components/CompleteSuit';

// mixin
import suitMixin from '../mixins/suitmixin';


export default {

  mixins:[suitMixin],

  data: () => ({
    step: 1, 
    suitCombo:{
      suit:0,
      shirt:0,
      tie:0,
      color: 0,
    },
    valid: false,
    name: '',
    nameRules: [  
      v => !!v || 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    phone:'',
    phoneRules: [
      v => !!v || 'Phone is required'
    ],
    date:'',
    dateRules: [
      v => !!v || 'Date is required'
    ]
  }),

  components: {
    SuitPart,
    SuitTie,
    CompleteSuit
  },

  methods: {
    updateSuit(event) {
      this.suitCombo.suit = event;
    },
    updateShirt(event) {
      this.suitCombo.shirt = event;
    },
    setColor(index){
      this.suitCombo.color = index;
    },
    updateTie(index){
      this.suitCombo.tie = index;
    },
    sendMail() {
      
      this.validate(); 

      if(this.valid) {
        const token = '82bf2dac-8dc0-4ae2-a195-f9dc55d90648';

        const html = `<h2>Quote request</h2><div><h3>Clients data:</h3><p><b>Name: </b> ${this.name} <br> <b>Email: </b> ${this.email} <br> <b>State: </b> ${this.select} <br> <b>Phone: </b> ${this.phone} <br> <b>Phone: </b> ${this.date} </p> <h3>Suit data:</h3><p> Suit: </b> ${this.fullSuit.suit.name} <br> Shirt: </b> ${this.fullSuit.shirt.name} <br> Tie type: </b> ${this.fullSuit.tie.name} <br> Tie color: </b> ${this.fullSuit.color.name} <br> Suit build: </b> ${this.shareUrl} </p></div>`;

        Email.send({
          SecureToken : token,
          To : 'jorgeparraandrade@gmail.com',
          From : "jorgeparraandrade@gmail.com",
          Subject : "Suit quote request",
          Body : html
        }).then(
          message => alert(message)
        );

      }

    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }

  },

  computed: {
    shareUrl(){
      let currentUrl = window.location.href;
      currentUrl = currentUrl.indexOf('?') < 0 ? currentUrl : currentUrl.substring(0, currentUrl.indexOf('?'));
      currentUrl = currentUrl +`?suit=${this.suitCombo.suit}&shirt=${this.suitCombo.shirt}&tie=${this.suitCombo.tie}&color=${this.suitCombo.color}`;
      return currentUrl;
    }
  },

  beforeMount() {
    const suit = this.$route.query.suit;
    const shirt = this.$route.query.shirt;
    const tie = this.$route.query.tie;
    const color = this.$route.query.color;

    if (suit,shirt,tie,color) {
      this.suitCombo.suit = this.suits[suit] ? suit : 0;
      this.suitCombo.shirt = this.shirts[shirt] ? shirt : 0;
      this.suitCombo.tie = this.ties.types[tie] ? tie : 0;
      this.suitCombo.color = this.ties.colors[color] ? color : 0;
      this.step = 2;
    }

  }

}
</script>

<style lang="scss" scoped>

</style>