<script setup lang="ts">
import { Kuzzle } from 'kuzzle-sdk';
import WebSocketProtocol from 'kuzzle-sdk/src/protocols/WebSocket';
import { onMounted } from 'vue';

let client : Kuzzle;

async function initConnection() {
    client = new Kuzzle(new WebSocketProtocol('localhost'));
    await client.connect();

}

onMounted(async () => {
    try {
        await initConnection();
    } catch (error) {
        console.error(error);
    }
})
</script>

<template>
</template>