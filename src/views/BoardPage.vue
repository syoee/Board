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
			posts: [],
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
			if (this.post && this.post.id) {
				this.$router.push(`/post/${this.post.id}`);
			} else {
				alert("게시글을 찾을 수 없습니다.");
			}
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
