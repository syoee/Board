export function goHome(router) {
	router.push("/");
}

export function goBoard(router, postId) {
	router.push(`/board/${postId}`);
}

export function goPost(router) {
	router.push("/post");
}
