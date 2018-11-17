<template>
<div>
	<div class="element-container">
		<div
			class="current-block"
			v-bind:style="{
				left: currentBlock.x * brickSize + 'px',
				top: currentBlock.y * brickSize + 'px'
			}"
		>
			<div
				class="block-row"
				v-for="(row, y) in currentBlock.matrix"
				:key='y'
			>
				<div
					class="block-brick"
					v-for="(brick, x) in row"
					:key='x'
					v-if='brick'

					v-bind:style="{
						backgroundColor: currentBlock.color,
						left: x * brickSize + 'px',
						top: y * brickSize + 'px',
						position: 'abosolute',

						height: brickSize + 'px',
						width: brickSize + 'px'
					}"
				>
				</div>
			</div>
		</div>
	</div>
	<div class="element-container">
		<board :board="boardState" />
	</div>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import { bus } from '@/bus'

import Board from '@/components/board.vue'

export default Vue.extend({
	components: {
		'board': Board,
	},
	data() {
		return {
			blocks: [{'key': 'hi'}, {'key': 'two'}, {'key': 'party'}],
		}
	},
	computed: {
    ...mapGetters([
			'currentBlock',
			'boardState',
			'brickSize',
    ])
	},
	created() {
		console.log('exo-skelatal')

		// bus.$on('tick', this.calculateBlockStyle)
	},
	methods: {
		calculateBlockStyle() {

		},
	},
	mounted() {
		this.$store.commit('setGameState', 'running')
	},
})
</script>

<style lang="scss">

	.block-brick {
		position: absolute;
	}

	.current-block {
		position: relative;
	}

	.element-container {
		position: absolute;
		left: 0;
		top: 0;

		height: 100%;
		width: 100%;
		background: '#00000000'
	}

</style>
