<template>
	<div class="board">
		<div
			class="board-row"
			v-for="row in Object.keys(boardState)"
			:key='row'
			v-bind:style="{ top: row * 20 + 'px' }">
			<div
				class="board-tile"
				v-for="x in Object.keys(boardState[row])"
				:key='x'

				v-bind:style="{ backgroundColor: boardState[row][x].type, left: x * 20  + 'px', height: '20px', width: '20px', position: 'absolute' }">
					
				<!-- <span v-if="tile">
				</span> -->
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import { bus } from '@/bus'

export default {
	data() {
		return {}
	},
	computed: {
    boardState() {
			return this.$props.board
		}
	},
	mounted() {
		console.log(this.board)
	},
	props: [
		'board'
	],
}

</script>

<style>

	.board {
		position: relative;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
	}

	.board-row {
		display: inline-flex;
		left: 0;
		position: absolute;
	}

</style>