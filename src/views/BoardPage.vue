<template>
	<div class="flex flex-col gap-2 h-[90vh]">
		<div
			class="mt-10 mx-5 py-3 pl-3 border-solid border-b-2 border-black text-xl"
		>
			title
		</div>
		<div class="mx-5 pl-3 pt-3 h-3/4 resize-none">content</div>
		<div class="absolute bottom-0 w-full flex justify-center py-5 gap-20">
			<button
				@click="goModify"
				class="px-5 py-3 bg-green-500 text-white rounded-lg text-4xl font-bold"
			>
				수 정
			</button>
			<button
				@click="deletePost"
				class="px-5 py-3 bg-green-500 text-white rounded-lg text-4xl font-bold"
			>
				삭 제
			</button>
		</div>
	</div>
</template>

<script>
import { goPost } from "@/utils/navigation";

export default {
	methods: {
		goPost() {
			goPost(this.$router);
		},
		deletePost() {
			if (confirm("정말로 삭제하시겠습니까?")) {
				alert("삭제완료");
				this.$router.push("/");
			}
		},
	},
};
</script>
