<template>
<div class="score-view">
	<h5>next block:</h5>
	<h4>
		wouldn't YOU like to know.
	</h4>
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
      // 'currentBlock',
    ])
	},
	created() {
		console.log('thats a lotta points!')
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

</style>
