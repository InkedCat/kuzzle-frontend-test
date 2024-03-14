<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface NavbarLink {
    to: string,
    desc: string
}

const props = defineProps<{links: NavbarLink[]}>();
</script>

<template>
    <div class="flex gap-12 justify-between items-center px-8 py-4 bg-secondary-background rounded-b-xl text-white">
        <img src="@/assets/logo.svg" width="32" height="32" alt="App logo" />
		<nav class="flex gap-2 font-semibold">
            <RouterLink v-for="link in links" class="px-4 py-1 rounded-full hover:bg-primary-blue transition-colors duration-200" :to="link.to">{{link.desc}}</RouterLink>
		</nav>
    </div>
</template>