<template>
<div class="score-view">
	<h1>
		{{ score }} points
	</h1>
	<h5>nice</h5>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'


export default Vue.extend({
	data() {
		return { }
	},
	computed: {
    ...mapGetters([
      'score',
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
