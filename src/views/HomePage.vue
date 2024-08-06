<template>
	<div class="m-10">
		<ul class="grid grid-flow-row gap-5">
			<li
				v-for="post in paginatedPosts"
				:key="post.id"
				@click="goBoard(post.id)"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				{{ post.id }}. {{ post.title }}
			</li>
		</ul>
		<div class="flex justify-between items-center mt-5">
			<button
				@click="prevPage"
				:disabled="currentPage === 1"
				class="px-3 py-2 bg-gray-300 text-black rounded-lg"
			>
				이전
			</button>
			<span>페이지 {{ currentPage }}</span>
			<button
				@click="nextPage"
				:disabled="currentPage === totalPages"
				class="px-3 py-2 bg-gray-300 text-black rounded-lg"
			>
				다음
			</button>
		</div>
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
import { goBoard, goPost } from "@/utils/navigation";

export default {
	name: "HomePage",
	data() {
		return {
			posts: [
				{ id: 1, title: "첫 번째 게시글" },
				{ id: 2, title: "두 번째 게시글" },
				{ id: 3, title: "세 번째 게시글" },
				{ id: 4, title: "네 번째 게시글" },
				{ id: 5, title: "다섯 번째 게시글" },
				{ id: 6, title: "여섯 번째 게시글" },
				{ id: 7, title: "일곱 번째 게시글" },
				{ id: 8, title: "여덟 번째 게시글" },
				{ id: 9, title: "아홉 번째 게시글" },
				{ id: 10, title: "열 번째 게시글" },
				{ id: 11, title: "열한 번째 게시글" },
				{ id: 12, title: "열두 번째 게시글" },
				{ id: 13, title: "열세 번째 게시글" },
				{ id: 14, title: "열네 번째 게시글" },
				{ id: 15, title: "열다섯 번째 게시글" },
				{ id: 16, title: "열여섯 번째 게시글" },
				{ id: 17, title: "열일곱 번째 게시글" },
			],
			currentPage: 1,
			postsPerPage: 10,
		};
	},
	computed: {
		totalPages() {
			return Math.ceil(this.posts.length / this.postsPerPage);
		},
		paginatedPosts() {
			const start = (this.currentPage - 1) * this.postsPerPage;
			const end = start + this.postsPerPage;
			return this.posts.slice(start, end);
		},
	},
	methods: {
		goBoard(postId) {
			goBoard(this.$router, postId);
		},
		goPost() {
			goPost(this.$router);
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
			}
		},
		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},
	},
};
</script>
