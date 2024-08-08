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
				@click="submitPost"
				class="px-5 py-3 text-white hover:bg-blue-800 bg-blue-600 rounded-lg text-4xl font-bold"
			>
				작 성
			</button>
			<button
				@click="goHome"
				class="px-5 py-3 text-white hover:bg-blue-800 bg-blue-600 rounded-lg text-4xl font-bold"
			>
				취 소
			</button>
		</div>
	</div>
</template>

<script>
import { goHome, goBoard } from "@/utils/navigation";
import axios from "axios";

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
		submitPost() {
			if (!this.title) {
				alert("Title이 비어있습니다.");
				return;
			}
			if (!this.content) {
				alert("Content가 비어있습니다.");
				return;
			}
			axios
				.post(`http://localhost:8080/boards`, {
					title: this.title,
					content: this.content,
				})
				.then((res) => {
					// API에서 받아온 데이터를 posts에 저장
					console.log(res);
					alert("작성 완료되었습니다.");
					goBoard(this.$router);
				})
				.catch((err) => {
					this.posts = []; // 오류가 발생하면 빈 배열로 초기화
					console.log(err);
				});
		},
	},
};
</script>
