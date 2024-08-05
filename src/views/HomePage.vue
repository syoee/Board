<template>
	<div class="flex flex-col justify-center items-center mt-10">
		<ul>
			<li>111</li>
			<li>222</li>
			<li>333</li>
			<li>444</li>
			<li>555</li>
			<li>666</li>
			<li>777</li>
		</ul>
	</div>
	<div class="flex justify-end mr-10">
		<button
			@click="goPost"
			class="px-3 py-2 bg-green-500 text-white rounded-lg"
		>
			글쓰기
		</button>
	</div>
</template>

<script>
export default {
	name: "HomePage",

	methods: {
		goPost() {
			this.$router.push("/post");
		},
	},
};
</script>
