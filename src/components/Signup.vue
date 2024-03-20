<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const author = ref('');
const emit = defineEmits(['author-submit']);

const submitForm = () => {
  emit('author-submit', author.value);
};
</script>

<template>
  <div class="flex justify-center items-center w-full h-full">
    <form class="flex flex-col gap-2 p-8 bg-[#ededed] rounded-xl" @submit.prevent="submitForm">
      <label class="text-xl font-medium" for="author">Enter your username:</label>
      <div class="flex gap-2">
        <input class="px-2 py-1" @keyup.enter="submitForm" id="author" v-model="author" type="text" required>
        <button class="bg-primary-blue px-4 py-1 rounded-full text-white" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
