<script setup lang="ts">
import Signup from '@/components/Signup.vue';
import { Kuzzle } from 'kuzzle-sdk';
import WebSocketProtocol from 'kuzzle-sdk/src/protocols/WebSocket';
import { onMounted, ref, type Ref } from 'vue';

let client : Kuzzle;

const author = ref(localStorage.getItem('author') || '');


async function initConnection() {
    client = new Kuzzle(new WebSocketProtocol('localhost'));
    await client.connect();

}

async function registerAuthor(newAuthor: string) {
    author.value = newAuthor;
    localStorage.setItem('author', newAuthor);

    await initConnection();
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
    } catch (error) {
        console.error(error);
    }
})
</script>

<template>
    <Signup v-if="!author" @author-submit="registerAuthor"/>

</template>