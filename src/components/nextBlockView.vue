<template>
<div class="score-view">
	<h5>next block:</h5>
  <div
    class="next-block"
    v-bind:style="{
      left: '20px'
    }"
  >
    <div
      class="next-block-row"
      v-for="(row, y) in nextBlock.matrix"
      :key='y'
    >
      <div
        class="next-block-brick"
        v-for="(brick, x) in row"
        :key='x'
        v-if='brick'

        v-bind:style="{
          backgroundColor: nextBlock.color,
          left: x * brickSize + 'px',
          top: y * brickSize + 'px',
          position: 'abosolute',

          height: brickSize + 'px',
          width: brickSize + 'px'
        }"
      >
      ok
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'


export default Vue.extend({
	data() {
		return {
			score: 69000,
		}
	},
	computed: {
    ...mapGetters([
      'nextBlock',
    ])
	},
	created() {
		console.log(this.nextBlock)
	},
	methods: {
		calculateBlockStyle() {

		},
	},
})
</script>

<style lang="scss" scoped>

	.score-view {
		background-color: darkkhaki;
    margin-right: 30px;
    margin-top: 20px;
    padding: 20px;

    height: 100px;
	}

	.block-brick {
	}

	.next-block {
	}

</style>
