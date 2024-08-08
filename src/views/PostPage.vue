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
import { goHome } from "@/utils/navigation";
import axios from "axios";

export default {
	data() {
		return {
			title: "",
			content: "",
			postId: null,
		};
	},

	created() {
		this.postId = this.$route.params.id;
		if (this.postId) {
			axios
				.get(`http://localhost:8080/boards/${this.postId}`)
				.then((res) => {
					this.title = res.data.title;
					this.content = res.data.content;
					console.log("Fetched post data:", res.data); // 디버깅용 로그
				})
				.catch((err) => {
					console.log(err);
				});
		}
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

			const postData = {
				title: this.title,
				content: this.content,
			};

			const request = this.postId
				? axios.put(`http://localhost:8080/boards/${this.postId}`, postData)
				: axios.post(`http://localhost:8080/boards`, postData);

			request
				.then((res) => {
					console.log(res);
					alert(this.postId ? "수정 완료되었습니다." : "작성 완료되었습니다.");
					this.$router.push("/");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>
