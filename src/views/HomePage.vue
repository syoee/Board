<template>
	<div class="m-10">
		<ul class="grid grid-flow-row gap-5">
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				1. 첫번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				2. 두번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				3. 세번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				4. 네번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				5. 다섯번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				6. 여섯번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				7. 일곱번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				8. 여덟번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				9. 아홉번째 게시글
			</li>
			<li
				@click="goBoard"
				class="cursor-pointer hover:underline hover:underline-offset-4"
			>
				10. 열번째 게시글
			</li>
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
import { goBoard, goPost } from "@/utils/navigation";

export default {
	name: "HomePage",
	methods: {
		goBoard() {
			goBoard(this.$router);
		},
		goPost() {
			goPost(this.$router);
		},
	},
};
</script>
