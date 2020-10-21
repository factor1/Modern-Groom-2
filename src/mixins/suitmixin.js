// Suits
import blackSuit from '../assets/img/preview/black.jpg';
import mgSuit from '../assets/img/preview/blue.jpg';
import darkGray from '../assets/img/preview/gray.jpg';
import navy from '../assets/img/preview/navy.jpg';
import silver from '../assets/img/preview/silver.jpg';

//suits part
import blackSuitPart from '../assets/img/suits/Black.png';
import mgSuitPart from '../assets/img/suits/Blue.png';
import darkGraySuitPart from '../assets/img/suits/DarkGray.png';
import navySuitPart from '../assets/img/suits/Navy_2020.png';
import silverSuitPart from '../assets/img/suits/Silver.png';

// Shirts
import whiteShirt from '../assets/img/preview/shirtWhite.jpg';
import ivoryShirt from '../assets/img/preview/shirtBeige.jpg';
import blackShirt from '../assets/img/preview/shirtBlack.jpg';

// Shirt parts
import whiteShirtPart from '../assets/img/shirts_and_ties/White.png';
import ivoryShirtPart from '../assets/img/shirts_and_ties/Cream.png';
import blackShirtPart from '../assets/img/shirts_and_ties/Black.png';

// Ties
import bowTie from '../assets/img/preview/bowtie.jpg';
import neckTie from '../assets/img/preview/necktie.jpg';

// Ties parts
import bowTiePart from '../assets/img/shirts_and_ties/Bowtie.png';
import neckTiePart from '../assets/img/shirts_and_ties/Necktie.png';


export default {

  data: () => ({
    suits: [
      { name: 'Black', color: '#000000', file: blackSuit, part: blackSuitPart },
      { name: 'MG Blue', color: '#4a537a', file: mgSuit, part: mgSuitPart },
      { name: 'Charcoal', color: '#5e5a61', file: darkGray, part: darkGraySuitPart },
      { name: 'Navy', color: '#313042', file: navy, part: navySuitPart },
      { name: 'Light Grey', color: '#c1bac2', file: silver, part: silverSuitPart }
    ],
    shirts: [
      { name: 'White', color: '#f0f0f0', file: whiteShirt, part: whiteShirtPart },
      { name: 'Ivory', color: '#ecebe6', file: ivoryShirt, part: ivoryShirtPart },
      { name: 'Black', color: '#000000', file: blackShirt, part: blackShirtPart }
    ],
    ties: {
      types: [
        { name: 'Bow tie', file: bowTie, part: bowTiePart },
        { name: 'Neck tie', file: neckTie, part: neckTiePart }
      ],
      colors: [
        {
          "name": "99C-FUSCHIA",
          "hex": "#dc1e6d",
          "rgb": {
            "r": 220,
            "g": 30,
            "b": 109
          }
        },
        {
          "name": "99K-YELLOW",
          "hex": "#f7e573",
          "rgb": {
            "r": 247,
            "g": 229,
            "b": 115
          }
        },
        {
          "name": "A-WHITE",
          "hex": "#ffffff",
          "rgb": {
            "r": 255,
            "g": 255,
            "b": 255
          }
        },
        {
          "name": "AA-ORCHID",
          "hex": "#724785",
          "rgb": {
            "r": 114,
            "g": 71,
            "b": 133
          }
        },
        {
          "name": "AAA-DEEP NAVY",
          "hex": "#12182b",
          "rgb": {
            "r": 18,
            "g": 24,
            "b": 43
          }
        },
        {
          "name": "B-BLACK",
          "hex": "#000000",
          "rgb": {
            "r": 0,
            "g": 0,
            "b": 0
          }
        },
        {
          "name": "BB-SAPPHIRE",
          "hex": "#30a1b5",
          "rgb": {
            "r": 48,
            "g": 161,
            "b": 181
          }
        },
        {
          "name": "BBB-BRIGHT PINK",
          "hex": "#d62e69",
          "rgb": {
            "r": 214,
            "g": 46,
            "b": 105
          }
        },
        {
          "name": "CC-FOREST GREEN",
          "hex": "#132a13",
          "rgb": {
            "r": 19,
            "g": 42,
            "b": 19
          }
        },
        {
          "name": "CCC-JEWEL",
          "hex": "#abd9d8",
          "rgb": {
            "r": 171,
            "g": 217,
            "b": 216
          }
        },
        {
          "name": "D-YELLOW",
          "hex": "#f3de90",
          "rgb": {
            "r": 243,
            "g": 222,
            "b": 144
          }
        },
        {
          "name": "DDD-KEY LIME",
          "hex": "#95d185",
          "rgb": {
            "r": 149,
            "g": 209,
            "b": 133
          }
        },
        {
          "name": "Deep Navy",
          "hex": "#2f4a60",
          "rgb": {
            "r": 47,
            "g": 74,
            "b": 96
          }
        },
        {
          "name": "E-LIGHT SILVER",
          "hex": "#cccbc7",
          "rgb": {
            "r": 204,
            "g": 203,
            "b": 199
          }
        },
        {
          "name": "EEE-HEATHER PURPLE",
          "hex": "#724f6d",
          "rgb": {
            "r": 114,
            "g": 79,
            "b": 109
          }
        },
        {
          "name": "F-LIME",
          "hex": "#90c534",
          "rgb": {
            "r": 144,
            "g": 197,
            "b": 52
          }
        },
        {
          "name": "FF- CORAL",
          "hex": "#c14949",
          "rgb": {
            "r": 193,
            "g": 73,
            "b": 73
          }
        },
        {
          "name": "FFF- SOFTSHELL PINK",
          "hex": "#fcbdb1",
          "rgb": {
            "r": 252,
            "g": 189,
            "b": 177
          }
        },
        {
          "name": "G-NAVY",
          "hex": "#1c274a",
          "rgb": {
            "r": 28,
            "g": 39,
            "b": 74
          }
        },
        {
          "name": "GG-TANGERINE",
          "hex": "#d57748",
          "rgb": {
            "r": 213,
            "g": 119,
            "b": 72
          }
        },
        {
          "name": "H-CHAMPAGNE",
          "hex": "#d1c49f",
          "rgb": {
            "r": 209,
            "g": 196,
            "b": 159
          }
        },
        {
          "name": "HHH-TRUE NAVY",
          "hex": "#0c154b",
          "rgb": {
            "r": 12,
            "g": 21,
            "b": 75
          }
        },
        {
          "name": "I-OCEAN BLUE",
          "hex": "#385194",
          "rgb": {
            "r": 56,
            "g": 81,
            "b": 148
          }
        },
        {
          "name": "II-PEACH",
          "hex": "#d48368",
          "rgb": {
            "r": 212,
            "g": 131,
            "b": 104
          }
        },
        {
          "name": "III-LIGHT BLUSH",
          "hex": "#f4dcdc",
          "rgb": {
            "r": 244,
            "g": 220,
            "b": 220
          }
        },
        {
          "name": "J-SUNFLOWER",
          "hex": "#d7ac1d",
          "rgb": {
            "r": 215,
            "g": 172,
            "b": 29
          }
        },
        {
          "name": "JJ-GOLD",
          "hex": "#ce9c46",
          "rgb": {
            "r": 206,
            "g": 156,
            "b": 70
          }
        },
        {
          "name": "K-HOT PINK",
          "hex": "#bc3881",
          "rgb": {
            "r": 188,
            "g": 56,
            "b": 129
          }
        },
        {
          "name": "KK-DARK STEEL",
          "hex": "#284262",
          "rgb": {
            "r": 40,
            "g": 66,
            "b": 98
          }
        },
        {
          "name": "KKK-MAUVE",
          "hex": "#997581",
          "rgb": {
            "r": 153,
            "g": 117,
            "b": 129
          }
        },
        {
          "name": "L-SLATE GREY",
          "hex": "#5d5f69",
          "rgb": {
            "r": 93,
            "g": 95,
            "b": 105
          }
        },
        {
          "name": "LL-EGGPLANT",
          "hex": "#592157",
          "rgb": {
            "r": 89,
            "g": 33,
            "b": 87
          }
        },
        {
          "name": "M-BELL GOLD",
          "hex": "#c9b169",
          "rgb": {
            "r": 201,
            "g": 177,
            "b": 105
          }
        },
        {
          "name": "MM-BURGANDY",
          "hex": "#501211",
          "rgb": {
            "r": 80,
            "g": 18,
            "b": 17
          }
        },
        {
          "name": "NA-ROYAL PURPLE",
          "hex": "#401259",
          "rgb": {
            "r": 64,
            "g": 18,
            "b": 89
          }
        },
        {
          "name": "NAA-SAND",
          "hex": "#ccb79e",
          "rgb": {
            "r": 204,
            "g": 183,
            "b": 158
          }
        },
        {
          "name": "NB-DEEP MINT",
          "hex": "#499c86",
          "rgb": {
            "r": 73,
            "g": 156,
            "b": 134
          }
        },
        {
          "name": "NC-CABERNET",
          "hex": "#381021",
          "rgb": {
            "r": 56,
            "g": 16,
            "b": 33
          }
        },
        {
          "name": "NDD-LIGHT GREEN",
          "hex": "#cde094",
          "rgb": {
            "r": 205,
            "g": 224,
            "b": 148
          }
        },
        {
          "name": "NE-SUNSET",
          "hex": "#b83f1e",
          "rgb": {
            "r": 184,
            "g": 63,
            "b": 30
          }
        },
        {
          "name": "NEE-PURPLE HAZE",
          "hex": "#322541",
          "rgb": {
            "r": 50,
            "g": 37,
            "b": 65
          }
        },
        {
          "name": "NF-DEEP STEEL BLUE",
          "hex": "#354464",
          "rgb": {
            "r": 53,
            "g": 68,
            "b": 100
          }
        },
        {
          "name": "NFF-LIGHT PINK",
          "hex": "#f4d2da",
          "rgb": {
            "r": 244,
            "g": 210,
            "b": 218
          }
        },
        {
          "name": "NG-CORNFLOWER BLUE",
          "hex": "#224e77",
          "rgb": {
            "r": 34,
            "g": 78,
            "b": 119
          }
        },
        {
          "name": "NH-JADE GREEN",
          "hex": "#263b26",
          "rgb": {
            "r": 38,
            "g": 59,
            "b": 38
          }
        },
        {
          "name": "NI-APPLE RED",
          "hex": "#7a1515",
          "rgb": {
            "r": 122,
            "g": 21,
            "b": 21
          }
        },
        {
          "name": "NII-VIOLA",
          "hex": "#9a6a8a",
          "rgb": {
            "r": 154,
            "g": 106,
            "b": 138
          }
        },
        {
          "name": "NJ-RED",
          "hex": "#8a1414",
          "rgb": {
            "r": 138,
            "g": 20,
            "b": 20
          }
        },
        {
          "name": "NK-SHERBERT",
          "hex": "#d39369",
          "rgb": {
            "r": 211,
            "g": 147,
            "b": 105
          }
        },
        {
          "name": "NL-LIGHT PURPLE",
          "hex": "#8c309c",
          "rgb": {
            "r": 140,
            "g": 48,
            "b": 156
          }
        },
        {
          "name": "NM-GOLD",
          "hex": "#d1aa6b",
          "rgb": {
            "r": 209,
            "g": 170,
            "b": 107
          }
        },
        {
          "name": "NN-CHARCOAL GREY",
          "hex": "#322a2a",
          "rgb": {
            "r": 50,
            "g": 42,
            "b": 42
          }
        },
        {
          "name": "NO-ROYAL BLUE",
          "hex": "#1c2178",
          "rgb": {
            "r": 28,
            "g": 33,
            "b": 120
          }
        },
        {
          "name": "NP- BRONZE",
          "hex": "#906f4c",
          "rgb": {
            "r": 144,
            "g": 111,
            "b": 76
          }
        },
        {
          "name": "NS-SEAFOAM",
          "hex": "#bcdcd3",
          "rgb": {
            "r": 188,
            "g": 220,
            "b": 211
          }
        },
        {
          "name": "NU- SALMON",
          "hex": "#ca6458",
          "rgb": {
            "r": 202,
            "g": 100,
            "b": 88
          }
        },
        {
          "name": "NY-BURNT ORANGE",
          "hex": "#ce521c",
          "rgb": {
            "r": 206,
            "g": 82,
            "b": 28
          }
        },
        {
          "name": "NZ-CHOCOLATE BROWN",
          "hex": "#4d2514",
          "rgb": {
            "r": 77,
            "g": 37,
            "b": 20
          }
        },
        {
          "name": "O-BRIGHT RED",
          "hex": "#d22828",
          "rgb": {
            "r": 210,
            "g": 40,
            "b": 40
          }
        },
        {
          "name": "OO-PALE BLUE",
          "hex": "#bdcadb",
          "rgb": {
            "r": 189,
            "g": 202,
            "b": 219
          }
        },
        {
          "name": "P-PLUM",
          "hex": "#361f42",
          "rgb": {
            "r": 54,
            "g": 31,
            "b": 66
          }
        },
        {
          "name": "Q-SAGE",
          "hex": "#8e8d5d",
          "rgb": {
            "r": 142,
            "g": 141,
            "b": 93
          }
        },
        {
          "name": "QQ-TIFFANYS BLUE",
          "hex": "#acdcce",
          "rgb": {
            "r": 172,
            "g": 220,
            "b": 206
          }
        },
        {
          "name": "R-SKY BLUE",
          "hex": "#8a9ac1",
          "rgb": {
            "r": 138,
            "g": 154,
            "b": 193
          }
        },
        {
          "name": "RR-ROSE",
          "hex": "#d6949c",
          "rgb": {
            "r": 214,
            "g": 148,
            "b": 156
          }
        },
        {
          "name": "S-IVORY",
          "hex": "#e3dbc9",
          "rgb": {
            "r": 227,
            "g": 219,
            "b": 201
          }
        },
        {
          "name": "TT- SPEARMINT",
          "hex": "#379a77",
          "rgb": {
            "r": 55,
            "g": 154,
            "b": 119
          }
        },
        {
          "name": "U-TEAL",
          "hex": "#3994a2",
          "rgb": {
            "r": 57,
            "g": 148,
            "b": 162
          }
        },
        {
          "name": "UU-SOFT MAUVE",
          "hex": "#ebcccd",
          "rgb": {
            "r": 235,
            "g": 204,
            "b": 205
          }
        },
        {
          "name": "V-MINT",
          "hex": "#adc69f",
          "rgb": {
            "r": 173,
            "g": 198,
            "b": 159
          }
        },
        {
          "name": "VV-LILAC",
          "hex": "#e0c1e1",
          "rgb": {
            "r": 224,
            "g": 193,
            "b": 225
          }
        },
        {
          "name": "W-CHERRY RED",
          "hex": "#a12b2b",
          "rgb": {
            "r": 161,
            "g": 43,
            "b": 43
          }
        },
        {
          "name": "WW-SPRING GREEN",
          "hex": "#3dce36",
          "rgb": {
            "r": 61,
            "g": 206,
            "b": 54
          }
        },
        {
          "name": "X-BUBBLEGUM",
          "hex": "#dd889d",
          "rgb": {
            "r": 221,
            "g": 136,
            "b": 157
          }
        },
        {
          "name": "XX-WISTERIA",
          "hex": "#a37cb6",
          "rgb": {
            "r": 163,
            "g": 124,
            "b": 182
          }
        },
        {
          "name": "YY-RUST",
          "hex": "#8a341e",
          "rgb": {
            "r": 138,
            "g": 52,
            "b": 30
          }
        },
        {
          "name": "Z-EMERALD GREEN",
          "hex": "#26592f",
          "rgb": {
            "r": 38,
            "g": 89,
            "b": 47
          }
        },
        {
          "name": "ZZ-GREY",
          "hex": "#968f8d",
          "rgb": {
            "r": 150,
            "g": 143,
            "b": 141
          }
        },
      ],
    },
    states: [
      'Alabama', 'Alaska', 'American Samoa', 'Arizona',
      'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'District of Columbia', 'Federated States of Micronesia',
      'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada',
      'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
      'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
    ],
  }),

  computed: {
    fullSuit() {
      return {
        suit: this.suits[this.suitCombo.suit],
        shirt: this.shirts[this.suitCombo.shirt],
        tie: this.ties.types[this.suitCombo.tie],
        color: this.ties.colors[this.suitCombo.color]
      }
    }
  },

}