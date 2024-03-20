<script setup lang="ts">
import MessageBubble from '@/components/MessageBubble.vue';
import type { ViewMessage } from '@/interfaces/Message';

const props = defineProps<{messages: ViewMessage[], author: string}>();

</script>

<template>
    <div id="chatbox" class="flex flex-col gap-3 flex-grow overflow-auto">
        <TransitionGroup appear
            enter-active-class="transition-all duration-500"
            enter-from-class="opacity-0 -translate-x-4">
            <MessageBubble v-for="(message) in props.messages" 
                :key="message.timestamp" 
                :author="message.author" 
                :content="message.content" 
                :timestamp="message.timestamp"
                :isAuthor="author === message.author">
            </MessageBubble>
        </TransitionGroup>
    </div>
</template>