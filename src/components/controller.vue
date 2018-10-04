<template></template>
<script>

import { Direction } from '@/classes/direction'

export default {
  name: 'controller',
  components: {},
  data () {
    return {
      timer: [ '', 0 ],
    }
  },

  created() {
    console.log('sup')
    // window.setTimeout
  },

  methods: {
    handleKeyDown(e) {
      console.log('key down')
      e.preventDefault()
      const now = new Date()
      switch (e.key) {
        default: return;
        case 'w':
        case 'k':
        case 'ArrowUp':
          // rotate acw
          console.log('rotate cw')
          // rotate anti-clockwise
          if (this.timer['cw'] <= now - 200) {
            this.$store.dispatch('rotateBlock', 'cw')
          } else if (this.timer['cw'] === -1) {
            console.log(this.timer['cw'])
            this.$store.dispatch('rotateBlock', 'cw')
            this.timer['cw'] = new Date()
          }
            console.log(this.timer['cw'])
          break
        case 'o':
          // rotate clockwise
          console.log('rotate acw')
          this.timer['acw'] = new Date()
          this.$store.dispatch('rotateBlock', 'acw')
          break
        case 's':
        case 'j':
        case 'ArrowDown':
          console.log('move down')
          this.timer[Direction.down] = new Date()
          this.$store.dispatch('moveBlock', {direction: Direction.down, natTick: false})
          break
        case 'a':
        case 'h':
        case 'ArrowLeft':
          console.log('move left!')
          // move left
          this.timer[Direction.left] = new Date()
          this.$store.dispatch('moveBlock', {direction: Direction.left})
          break
        case 'd':
        case 'l':
        case 'ArrowRight':
          console.log('move right')
          // move right
          this.timer[Direction.right] = new Date()
          this.$store.dispatch('moveBlock', {direction: Direction.right})
          break
        case 'space':
          console.log('jump down')
          break
      }
    },

    handleKeyUp(e) {
      const now = new Date()
      e.preventDefault()
      // e.detail.keyboardEvent.preventDefault()
      switch (e.key) {
        default: return;
        case 'w':
        case 'k':
        case 'ArrowUp':
          this.timer['cw'] = -1
          break
      }
    }
    //     case 'o':
    //       // rotate clockwise
    //       console.log('rotate cw')
          // this.$store.dispatch('rotateBlock', 'acw')
    //       break
    //     case 's':
    //     case 'j':
    //     case 'ArrowDown':
    //       console.log('move down')
    //       this.$store.dispatch('tickCurrentBlockDown')
    //       break
    //     case 'a':
    //     case 'h':
    //     case 'ArrowLeft':
    //       console.log('move left!')
    //       // move left
    //       this.$store.dispatch('moveBlock', Direction.left)
    //       break
    //     case 'd':
    //     case 'l':
    //     case 'ArrowRight':
    //       console.log('move right')
    //       // move right
    //       this.$store.dispatch('moveBlock', Direction.right)
          // break
    //     case 'space':
    //       console.log('jump down')
    //       break
    //   }
    //   // this.$store.dispatch('movePlayer', vec)
    //   //   .then(
    //   //     () => this.$store.dispatch('tick'),
    //   //     () => console.log('rejected'),
    //   //   )

    // },
  },

  created() {
    window.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('keydown', this.handleKeyDown)
  },

  destroyed() {
    window.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('keydown', this.handleKeyDown)
  },
}
</script>
