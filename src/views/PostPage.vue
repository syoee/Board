<template>
	<div class="flex flex-col gap-4 h-[90vh]">
		<input
			v-model="title"
			placeholder="title"
			class="w-1/2 mt-10 ml-5 py-3 pl-3 rounded-md border-solid border-2 border-gray-300 text-xl"
		/>
		<textarea
			v-model="content"
			placeholder="content"
			class="mx-5 pl-3 pt-3 h-3/4 rounded-md border-solid border-2 border-gray-300 resize-none"
		></textarea>
		<div class="absolute bottom-0 w-full flex justify-center py-5 bg-green-500">
			<button @click="goBoard" class="w-full text-white text-4xl font-black">
				생 성
			</button>
		</div>
	</div>
</template>

<script>
import { goBoard } from "@/utils/navigation";

export default {
	data() {
		return {
			title: "",
			content: "",
		};
	},
	methods: {
		goBoard() {
			goBoard(this.$router);
		},
	},
};
</script>
