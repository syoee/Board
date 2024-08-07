<template>
	<div class="m-10">
		<ul class="grid grid-flow-row gap-5">
			<li
				v-for="post in paginatedPosts"
				:key="post.id"
				@click="goBoard(post.id)"
				class="cursor-pointer hover:underline underline-offset-4"
			>
				{{ post.id }}. {{ post.title }}
			</li>
		</ul>
		<div class="flex justify-center items-center gap-4 mt-14 mb-5">
			<button
				@click="prevPage"
				:disabled="currentPage === 1"
				class="px-3 py-2 bg-gray-300 text-black rounded-lg"
			>
				이전
			</button>
			<div class="flex gap-2">
				<!-- 페이지 숫자 버튼 렌더링 -->
				<button
					v-for="page in totalPagesArray"
					:key="page"
					@click="goToPage(page)"
					:class="{
						'px-2 text-black underline underline-offset-4 text-xl font-extrabold':
							page === currentPage,
						'px-2 text-black text-xl font-thin': page !== currentPage,
					}"
				>
					{{ page }}
				</button>
			</div>
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
			class="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
		>
			글쓰기
		</button>
	</div>
</template>

<script>
import { goBoard, goPost } from "@/utils/navigation";
import axios from "axios";

export default {
	data() {
		return {
			posts: [],
			currentPage: 1,
			postsPerPage: 15,
		};
	},

	computed: {
		// 전체 페이지 수 계산
		totalPages() {
			return Math.ceil(this.posts.length / this.postsPerPage);
		},
		// 전체 페이지 수를 배열 형태로 반환
		totalPagesArray() {
			return Array.from({ length: this.totalPages }, (_, i) => i + 1);
		},
		// 현재 페이지에 해당하는 게시글들을 반환
		paginatedPosts() {
			const start = (this.currentPage - 1) * this.postsPerPage;
			const end = start + this.postsPerPage;
			return this.posts.slice(start, end);
		},
	},

	mounted() {
		// 게시글 전체 불러오는 API
		axios
			.get(`http://localhost:8080/boards`)
			.then((res) => {
				this.result = res.data.result;
				console.log(res);
			})
			.catch((err) => {
				this.result = false;
				console.log(err);
			});
	},

	methods: {
		// id에 맞는 Board페이지로 이동
		goBoard(postId) {
			goBoard(this.$router, postId);
		},
		// Post페이지로 이동
		goPost() {
			goPost(this.$router);
		},
		// 사용자가 페이지 버튼을 클릭할 때 호출되는 메서드
		// 페이지 번호를 받아서 currentPage를 업데이트
		goToPage(pageNumber) {
			if (pageNumber >= 1 && pageNumber <= this.totalPages) {
				this.currentPage = pageNumber;
			}
		},
		// 다음으로 이동
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
			}
		},
		// 이전으로 이동
		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},
	},
};
</script>
