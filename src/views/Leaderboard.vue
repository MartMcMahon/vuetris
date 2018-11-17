<template>
	<v-app class="leaderboard">
		<v-list>
			<v-list-tile>
				<div class="lb-avatar" style="height: 200px; width: 200px;">
					
				</div>
				top score!
			</v-list-tile>
			<v-list-tile>
				<div class="lb-avatar" style="height: 200px; width: 200px;">
					
				</div>
				2nd place is the first loser
			</v-list-tile>
		</v-list>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {
			stuff: 'things',
		}
	},
	methods: {
		// gonna do that firebase jawn here?
		// props in store tbh
	},
})
</script>
