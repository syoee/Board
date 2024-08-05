<template>
	<PageHeader />
	<router-view />
	<PageFooter />
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
	name: "App",

	components: {
		PageFooter,
		PageHeader,
	},
};
</script>
