<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { ref } from 'vue';

const navbarLinks = ref([
	{
		to : "/",
		desc: "Home"
	},
	{
		to : "/chat",
		desc: "Chat"
	},
	{
		to : "/disconnect",
		desc: "Disconnect"
	}
]);
</script>
	
<template>
  	<header class="fixed right-0 left-0 flex justify-center mx-auto my-0">
		<Navbar :links="navbarLinks"></Navbar>
  	</header>

	<main class="flex max-w-[1400px] mx-auto my-0 px-8 py-32 min-h-screen">
		<RouterView />
  	</main>

</template>