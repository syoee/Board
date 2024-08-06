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
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: "첫 번째 게시글", content: "첫 번째 내용" },
				{ id: 2, title: "두 번째 게시글", content: "두 번째 내용" },
				{ id: 3, title: "세 번째 게시글", content: "세 번째 내용" },
				{ id: 4, title: "네 번째 게시글", content: "네 번째 내용" },
				{ id: 5, title: "다섯 번째 게시글", content: "다섯 번째 내용" },
				{ id: 6, title: "여섯 번째 게시글", content: "여섯 번째 내용" },
				{ id: 7, title: "일곱 번째 게시글", content: "일곱 번째 내용" },
				{ id: 8, title: "여덟 번째 게시글", content: "여덟 번째 내용" },
				{ id: 9, title: "아홉 번째 게시글", content: "아홉 번째 내용" },
				{ id: 10, title: "열 번째 게시글", content: "열 번째 내용" },
				{ id: 11, title: "열한 번째 게시글", content: "열한 번째 내용" },
				{ id: 12, title: "열두 번째 게시글", content: "열두 번째 내용" },
				{ id: 13, title: "열세 번째 게시글", content: "열세 번째 내용" },
				{ id: 14, title: "열네 번째 게시글", content: "열네 번째 내용" },
				{ id: 15, title: "열다섯 번째 게시글", content: "열다섯 번째 내용" },
				{ id: 16, title: "열여섯 번째 게시글", content: "열여섯 번째 내용" },
				{ id: 17, title: "열일곱 번째 게시글", content: "열일곱 번째 내용" },
			],
			post: null,
		};
	},
	// 컴포넌트가 생성될 때 URL의 id 파라미터를 사용해 해당 게시글을 posts 배열에서 찾아 post에 저장
	created() {
		const postId = this.$route.params.id;
		this.post = this.posts.find((post) => post.id === parseInt(postId));
		if (!this.post) {
			console.log(`게시글 ID ${postId}를 찾을 수 없습니다.`);
		}
	},
	methods: {
		// 현재 게시글의 수정 페이지로 이동
		goModify() {
			this.$router.push(`/post/${this.post.id}`);
		},
		// 사용자가 확인 대화상자에서 확인을 누르면 게시글을 삭제하고 홈 페이지로 이동
		deletePost() {
			if (confirm("정말 삭제하시겠습니까?")) {
				alert("삭제되었습니다.");
				this.$router.push("/");
			}
		},
	},
};
</script>
