<template>
	<div class="flex justify-center">
		<button @click="goHome" class="my-5 text-5xl font-black">게시판</button>
	</div>
	<hr />
</template>

<script>
import { goHome } from "@/utils/navigation";

export default {
	methods: {
		goHome() {
			goHome(this.$router);
		},
	},
};
</script>
