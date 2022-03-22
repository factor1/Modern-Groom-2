<template>
  <div>

    <v-container class="text-center">
      <v-row align="start">
        <v-col cols="12" sm="12" md="5"  lg="4" offset-md="1" offset-lg="2" class="inner-scroll">
          <SuitPart :data="suits" title="Select Suit Color" :active="suitCombo.suit" @updateInfo="updateSuit($event)" />
          <SuitPart :data="shirts" title="Select Shirt color" :active="suitCombo.shirt" :nothumbnail="true" @updateInfo="updateShirt($event)" />
          <SuitTie
            :data="ties"
            :selectedcolor="suitCombo.color"
            :selectedtie="suitCombo.tie"
            :selectedpattern="suitCombo.pattern"
            :patterntoggle="suitCombo.pattern_toggle"
            @updateToggle="updateToggle($event)"
            @patternUpdate="updatePattern($event)"
            @updateColor="setColor($event)"
            @tieUpdate="updateTie($event)"
            @toggleUpdate="suitCombo.solid_toggle = $event"
          />
        </v-col>
        <v-col cols="12" sm="12" md="5" lg="4" >
          <CompleteSuit
            :suit="fullSuit"
            :suitID="suitCombo"
            @goto="step=$event"
            @toggleUpdate="suitCombo.solid_toggle = $event" />
        </v-col>
      </v-row>

      <v-row align="start">
        <v-col cols="12" sm="12" md="6" offset-md="3" class="share-block">
          <input type="hidden" id="testing-code">
          <div class="buttons-container">
            <div class="button-box" @click="shareURL()">
              <v-icon x-large>mdi-upload-outline</v-icon>
              Share suit
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row align="start">
        <v-col cols="12" sm="12" md="6" offset-md="3">
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
                  label="State/Province"
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
                      label="Wedding Date"
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
      solid_toggle: true,
      pattern: 0
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
    updatePattern(index){
      this.suitCombo.pattern = index;
    },
    updateToggle(index){
      this.suitCombo.pattern_toggle = index;
    },

    shareURL() {
      let codeToCopy = document.querySelector('#testing-code');
      let currentUrl = window.location.href;
      currentUrl = currentUrl.indexOf('?') < 0 ? currentUrl : currentUrl.substring(0, currentUrl.indexOf('?'));
      codeToCopy.value = currentUrl + `?suit=${this.suitCombo.suit}&shirt=${this.suitCombo.shirt}&tie=${this.suitCombo.tie}&color=${this.suitCombo.color}&pattern=${this.suitCombo.pattern}&toggle=${this.suitCombo.solid_toggle}`;
      codeToCopy.setAttribute('type', 'text');
      codeToCopy.select();
      try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successfully' : 'unsuccessfully';
        alert('Shareable url was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      codeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
    
    sendMail() {
      
      this.validate(); 

      if(this.valid) {
        const token = process.env.VUE_APP_SMTP_TOKEN;

        const html = `<h2>Quote request</h2><div><h3>Clients data:</h3><p><b>Name: </b> ${this.name} <br> <b>Email: </b> ${this.email} <br> <b>State: </b> ${this.select} <br> <b>Phone: </b> ${this.phone} <br> <b>Date: </b> ${this.date} </p> <h3>Suit data:</h3><b> Suit: </b> ${this.fullSuit.suit.name} <br><b> Shirt: </b> ${this.fullSuit.shirt.name} <br><b> Tie type: </b> ${this.fullSuit.tie.name} <br><b> Tie: </b> ${ this.fullSuit.solid_toggle ? this.fullSuit.color.name : this.fullSuit.pattern.name} <br><b> Suit build: </b> ${this.shareUrl} </p></div>`;

        Email.send({
          SecureToken : token,
          To : 'info@themoderngroom.com, development@factor1studios.com, 2pdk8xbz@robot.zapier.com, info.themoderngroom@gmail.com',
          From : "no-reply@themoderngroom.com",
          Subject : "Suit quote request",
          Body : html
        }).then(
          message => {
            if (message == 'OK') {
              alert('Message sent successfully');
              window.location.href = "https://themoderngroom.com/build-your-suit-thank-you"; 
            } else {
              alert(message);
            }
          }
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

  beforeMount() {
    const suit = this.$route.query.suit;
    const shirt = this.$route.query.shirt;
    const tie = this.$route.query.tie;
    const color = this.$route.query.color;
    const pattern = this.$route.query.pattern;
    const toggle = this.$route.query.toggle;

    if (suit && shirt && tie && color && pattern && toggle) {
      this.suitCombo.suit = this.suits[suit] ? suit : 0;
      this.suitCombo.shirt = this.shirts[shirt] ? shirt : 0;
      this.suitCombo.tie = this.ties.types[tie] ? tie : 0;
      this.suitCombo.color = this.ties.colors[color] ? color : 0;
      this.suitCombo.pattern = this.ties.patterns[pattern] ? pattern : 0;
      this.suitCombo.solid_toggle = toggle == 'true' ? true : false;
      this.step = 2;
    }

  }

}
</script>

<style lang="scss" scoped>
  $blue: #22394d;

  .buttons-container {
    display: flex;
    justify-content: space-around;

    .button-box {
      display: flex;
      flex-direction: column;
      color: $blue;

      i {
        color: $blue;
      }
    }
  }

  .share-block {
    padding: 50px 0;
  }

  .inner-scroll {
    height: calc(100vh - 15px);
    overflow-y: scroll;

    /* width */
    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 50px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #ccc; 
      border-radius: 50px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
</style>