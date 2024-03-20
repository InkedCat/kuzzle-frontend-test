import { ref, type Ref } from 'vue';

export const flashStore: Ref<string> = ref('');

export function setFlashMessage(message: string) {
    flashStore.value = message;

    setTimeout(() => {
        clearFlashMessage();
    }, 2000);
}

export function clearFlashMessage() {
    flashStore.value = '';
}