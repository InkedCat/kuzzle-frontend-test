<script setup lang="ts">
const props = defineProps<{message: string}>();
</script>

<template>
    <div class="flex flex-col gap-2 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-red-600 rounded-xl text-white">
        <p class="text-3xl font-bold">Warning</p>
        <p>{{props.message}}</p>
    </div>
</template>