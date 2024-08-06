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
		<div class="absolute bottom-0 w-full flex justify-center py-5 gap-20">
			<button
				@click="goBoard"
				class="px-5 py-3 text-white bg-green-500 rounded-lg text-4xl font-bold"
			>
				생 성
			</button>
			<button
				@click="goHome"
				class="px-5 py-3 text-white bg-green-500 rounded-lg text-4xl font-bold"
			>
				취 소
			</button>
		</div>
	</div>
</template>

<script>
import { goHome, goBoard } from "@/utils/navigation";

export default {
	data() {
		return {
			title: "",
			content: "",
		};
	},
	methods: {
		goHome() {
			goHome(this.$router);
		},
		goBoard() {
			goBoard(this.$router);
		},
	},
};
</script>
