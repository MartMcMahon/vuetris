<template>
<div class="debug">
  <v-app>
    <v-btn
      class="primary"
      raised
      v-on:click="setEmptyBoard"
    >
      empty board
    </v-btn>
    <v-btn
      dark
      raised
      v-on:click="setSampleBoard"
    >
      sample board
    </v-btn>
    <v-btn
      class="warning"
      dark
      raised
      v-on:click="pause"
    >
      pause
    </v-btn>
  </v-app>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'


export default Vue.extend({
  data() {
    return {
      paused: true,
      emptyBoard: {
        0: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        1: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        2: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        3: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        4: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        5: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        6: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        7: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        8: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        9: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        10: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        11: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        12: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        13: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        14: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        15: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        16: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        17: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        18: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        19: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        }
      },
      sampleBoard: {
        0: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        1: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        2: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        3: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        4: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        5: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        6: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        7: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        8: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        9: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        10: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        11: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        12: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        13: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        14: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        15: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        16: {
          0: {type: null},
          1: {type: null},
          2: {type: null},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: null},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        17: {
          0: {type: null},
          1: {type: 'orange'},
          2: {type: 'orange'},
          3: {type: null},
          4: {type: null},
          5: {type: null},
          6: {type: 'orange'},
          7: {type: null},
          8: {type: null},
          9: {type: null},
        },
        18: {
          0: {type: 'orange'},
          1: {type: 'orange'},
          2: {type: 'orange'},
          3: {type: 'orange'},
          4: {type: 'orange'},
          5: {type: 'orange'},
          6: {type: 'orange'},
          7: {type: 'orange'},
          8: {type: 'orange'},
          9: {type: 'orange'},
        },
        19: {
          0: {type: 'orange'},
          1: {type: 'orange'},
          2: {type: 'orange'},
          3: {type: 'orange'},
          4: {type: 'orange'},
          5: {type: 'orange'},
          6: {type: 'orange'},
          7: {type: 'orange'},
          8: {type: 'orange'},
          9: {type: 'orange'},
        }
      },
    }
  },
  computed: {
    ...mapGetters([
      'boardState'
    ])
  },
  methods: {
    pause() {
      if (this.paused) {
        this.$store.commit('setGameState', 'running')
      }
      else {
        this.$store.commit('setGameState', 'stopped')
      }
      this.paused = !this.paused
    },
    setEmptyBoard() {
      this.$store.commit('mutateBoardState', this.emptyBoard)
    },
    setSampleBoard() {
      console.log(this.sampleBoard)
      this.$store.commit('mutateBoardState', this.sampleBoard)
    },
  },
})
</script>
