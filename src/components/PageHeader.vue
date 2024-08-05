<template>
	<div class="flex justify-center">
		<button @click="goHome" class="my-5 text-5xl font-black">게시판</button>
	</div>
	<hr />
</template>

<script>
export default {
	methods: {
		goHome() {
			this.$router.push("/");
		},
	},
};
</script>
