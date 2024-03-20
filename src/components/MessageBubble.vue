<script setup lang="ts">
const props = defineProps<{author: string, content:string, timestamp: number, isAuthor: boolean}>();

const date = new Date(props.timestamp);

const formatedDate = `${date.getHours()}:${date.getMinutes()}`;
</script>

<template>
    <div :class="{'ml-auto bg-primary-blue text-white': isAuthor}" class="flex flex-col gap-1 w-fit px-6 py-1 bg-[#E0E0E0] rounded-3xl">
        <div class="flex gap-4">
            <p class="italic font-bold">
                {{props.author}}
            </p>
            <p>
                {{props.content}}
            </p>
        </div>
        <p :class="{'text-white': isAuthor}" class="text-end text-xs font-extralight text-secondary-background">
            {{formatedDate}}
        </p>
    </div>
</template>