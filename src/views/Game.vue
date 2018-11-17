<template>
<div class="game-view">
  <game-area class="game-area" id="top-layer" v-bind:class="{ screenshake: screenIsShaking}" >
  </game-area>
	<controller></controller>
	<div class="sidebar">
		<next-block-div></next-block-div>
		<score-div></score-div>
		<debug-menu></debug-menu>
	</div>
</div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import Vue from 'vue';
import GameArea from '@/components/GameArea.vue';
import Controller from '@/components/controller.vue';
import NextBlockView from '@/components/nextBlockView.vue';
import ScoreView from '@/components/scoreView.vue';

import DebugMenu from '@/debug/debug.vue'

import { bus } from '@/bus'

import styles from '../effects/shakeAnimation.css'

export default {
	components: {
		'controller': Controller,
		'debug-menu': DebugMenu,
		'game-area': GameArea,
		'next-block-div': NextBlockView,
		'score-div': ScoreView,
  },

	created() {
		console.log('Game created')

    // shake screen on block drop
    bus.$on('blockPlace', this.shake)
	},

  data() {
    return {
      screenIsShaking: false,
    }
  },

	methods: {
    shake() {
      console.log('shake!!')
      this.screenIsShaking = true
      setTimeout(() => this.screenIsShaking = false, 200)
    },
	},
}
</script>

<style lang="scss">

.game-area {
	border: 1px solid black;
	margin: 20px auto;
	position: relative;

	width: 200px;
	height: 400px;
}

.game-view {
	background-repeat: no-repeat;
	display: flex;
	flex: auto;
	flex-direction: row;
	margin: 0;
	padding: 0;
}

</style>
