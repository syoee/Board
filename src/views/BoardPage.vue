<template>
	<!-- post가 존재할 때만 게시글 내용을 렌더링 -->
	<div class="flex flex-col gap-2 h-[90vh]" v-if="post">
		<div
			class="mt-10 mx-5 py-3 pl-3 border-solid border-b-2 border-black text-xl"
		>
			{{ post.title }}
		</div>
		<div class="mx-5 pl-3 pt-3 h-3/4 resize-none">{{ post.content }}</div>
		<div class="absolute bottom-0 w-full flex justify-center py-5 gap-20">
			<button
				@click="goModify"
				class="px-5 py-3 bg-blue-600 text-white hover:bg-blue-800 rounded-lg text-4xl font-bold"
			>
				수 정
			</button>
			<button
				@click="deletePost"
				class="px-5 py-3 bg-blue-600 text-white hover:bg-blue-800 rounded-lg text-4xl font-bold"
			>
				삭 제
			</button>
		</div>
	</div>
	<div v-else>게시글을 찾을 수 없습니다.</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			post: [],
		};
	},

	created() {
		const postId = this.$route.params.id;
		axios
			.get(`http://localhost:8080/boards/${postId}`)
			.then((res) => {
				this.post = res.data; // API에서 받아온 데이터를 post에 저장
			})
			.catch((err) => {
				console.log(err);
			});
	},

	methods: {
		goModify() {
			if (this.post && this.post.id) {
				this.$router.push(`/post/${this.post.id}`);
			} else {
				alert("게시글을 찾을 수 없습니다.");
			}
		},
		deletePost() {
			if (this.post && this.post.id) {
				if (confirm("정말 삭제하시겠습니까?")) {
					axios
						.delete(`http://localhost:8080/boards/${this.post.id}`)
						.then((res) => {
							console.log(res);
							alert("삭제되었습니다.");
							this.$router.push("/");
						})
						.catch((err) => {
							console.log(err);
						});
				}
			} else {
				alert("게시글을 찾을 수 없습니다.");
			}
		},
	},
};
</script>
