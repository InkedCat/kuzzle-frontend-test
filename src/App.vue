<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { ref } from 'vue';
import { flashStore } from './libs/FlashStore';
import FlashMessage from './components/FlashMessage.vue';

const navbarLinks = ref([
	{
		to : "/",
		desc: "Home"
	},
	{
		to : "/chat",
		desc: "Chat"
	}
]);
</script>
	
<template>
	<Transition
		enter-active-class="transition-all duration-200"
		leave-active-class="transition-all duration-500"
        enter-from-class="opacity-0 translate-y-4"
		leave-to-class="opacity-0 translate-y-4">
		<FlashMessage v-if="flashStore" :message="flashStore"></FlashMessage>
	</Transition>

  	<header class="fixed right-0 left-0 flex justify-center mx-auto my-0">
		<Navbar :links="navbarLinks"></Navbar>
  	</header>

	<main class="flex max-w-[1400px] mx-auto my-0 px-8 py-32 min-h-screen">
		<RouterView />
  	</main>

</template>