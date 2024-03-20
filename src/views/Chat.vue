<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue';
import MessageForm from '@/components/MessageForm.vue';
import Signup from '@/components/Signup.vue';
import type { APIMessage, ViewMessage } from '@/interfaces/Message';
import { getMessages, postMessage } from '@/libs/ChatApi';
import { setFlashMessage } from '@/libs/FlashStore';
import { convertToMessage } from '@/libs/MessageTransformer';
import axios from 'axios';
import { Kuzzle } from 'kuzzle-sdk';
import WebSocketProtocol from 'kuzzle-sdk/src/protocols/WebSocket';
import { onMounted, ref, type Ref } from 'vue';

let client : Kuzzle;

const messages : Ref<ViewMessage[]> = ref([]);
const author = ref(localStorage.getItem('author') || '');


async function initConnection() {
    client = new Kuzzle(new WebSocketProtocol('localhost'));
    await client.connect();

    await client.realtime.subscribe('kuzzle-chatdb', 'chat-messages', {}, (notification) => {
        if(notification.type !== 'document') return;
        
        switch(notification.action) {
            case 'create':
                messages.value.push(convertToMessage(notification.result._source as APIMessage));
                break;
            case 'publish':
                if(notification.result._source.author === author.value) return;

                setFlashMessage(notification.result._source.author + " has been rude !")
                break;
        }
    });
}

async function submitMessage(message: string) {
    if(!author) return;

    const postRequest = await postMessage(message.trim(), author.value);

    if(axios.isAxiosError(postRequest) && postRequest.response) {
        setFlashMessage(postRequest.response.data.error.message)
    }
}

async function updateMessages() {
    try {
        const messageResponse = await getMessages();
        
        if(!axios.isAxiosError(messageResponse)) {
            messages.value = messageResponse
        }
    } catch (error) {
        console.error(error);
    }
}

async function registerAuthor(newAuthor: string) {
    author.value = newAuthor;
    localStorage.setItem('author', newAuthor);

    await initConnection();
    await updateMessages();
}

function unregisterAuthor() {
    author.value = '';
    localStorage.removeItem('author');

    client.disconnect();
    messages.value = [];
}


onMounted(async () => {
    try {
        if(author.value) await initConnection();

        await updateMessages();
    } catch (error) {
        console.error(error);
    }
})
</script>

<template>
    <Signup v-if="!author" @author-submit="registerAuthor"/>

    <div v-else class="flex flex-col gap-4 w-full h-[75vh] px-16 py-6 bg-[#ededed] rounded-xl">
        <button @click="unregisterAuthor" class="bg-gray-300 rounded-3xl px-4 py-2">Disconnect</button>
        <ChatBox :messages="messages" :author="author"/>
        <MessageForm @message-submit="submitMessage"/>
    </div>
</template>