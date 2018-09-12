<template></template>
<script>

import { Direction } from '@/classes/direction'

export default {
  name: 'controller',
  components: {},
  data () {
    return {

		}
	},
	created() {
		console.log('sup')
	},

	methods: {
		handleKeyUp(e) {
			e.preventDefault()
			// let vec = []
			switch (e.key) {
				default: return;
				case 'w':
				case 'k':
				case 'ArrowUp':
					// rotate acw
					console.log('rotate acw')
					// rotate anti-clockwise
					this.$store.dispatch('rotateBlock', 'cw')
					break
				case 'o':
					// rotate clockwise
					console.log('rotate cw')
          this.$store.dispatch('rotateBlock', 'acw')
					break
				case 's':
				case 'j':
				case 'ArrowDown':
					console.log('move down')
					this.$store.dispatch('tickCurrentBlockDown')
					break
				case 'a':
				case 'h':
				case 'ArrowLeft':
					console.log('move left!')
					// move left
					this.$store.dispatch('moveBlock', Direction.left)
					break
				case 'd':
				case 'l':
				case 'ArrowRight':
					console.log('move right')
					// move right
					this.$store.dispatch('moveBlock', Direction.right)
          break
				case 'space':
					console.log('jump down')
					break
			}
			// this.$store.dispatch('movePlayer', vec)
			// 	.then(
			// 		() => this.$store.dispatch('tick'),
			// 		() => console.log('rejected'),
			// 	)
		}
	},
	created() {
  	window.addEventListener('keyup', this.handleKeyUp)
	},
	destroyed() {
  	window.removeEventListener('keyup', this.handleKeyUp)
	},
}
</script>
