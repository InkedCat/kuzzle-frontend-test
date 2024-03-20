<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
const emit = defineEmits(['message-submit']);

const submitForm = () => {
    const messageWithoutSpaces = message.value.trim();
    if(messageWithoutSpaces.length === 0 || messageWithoutSpaces.length > 255) return;

    emit('message-submit', messageWithoutSpaces);
    message.value = '';
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="flex gap-12 justify-between rounded-full">
            <input v-model="message" @keyup.enter="submitForm" type="text" maxlength="255" class="w-full px-4 py-2 bg-[#E0E0E0] text-black rounded-full"/>
            <input type="submit" class="px-4 py-1 rounded-full bg-primary-blue active:bg-primary-blue hover:bg-primary-blue/90 transition-colors text-white " value="Send"/>
        </div>
    </form>
</template>