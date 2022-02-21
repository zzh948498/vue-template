<script setup lang="ts">
import ReloadPrompt from './ReloadPrompt.vue';
import MyWorker from './my-worker?worker';
import { onBeforeMount, ref } from 'vue';
const pong = ref('');
const mode = ref('');
const worker = new MyWorker();
const runWorker = async () => {
    worker.postMessage('ping');
};
const resetMessage = async () => {
    worker.postMessage('clear');
};
const messageFromWorker = async ({
    data: { msg, mode: useMode },
}: {
    data: { msg: string; mode: string };
}) => {
    pong.value = msg;
    mode.value = useMode;
};

onBeforeMount(() => {
    worker.addEventListener('message', messageFromWorker);
});
</script>
<template>
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
    <router-view></router-view>
    <ReloadPrompt />
    <br />
    test2
    <br />
    <button @click="runWorker">Ping web worker</button>
    &#160;&#160;
    <button @click="resetMessage">Reset message</button>
    <br />
    <br />
    <template v-if="pong">
        Response from web worker: <span> Message: {{ pong }} </span>&#160;&#160;<span>
            Using ENV mode: {{ mode }}</span
        >
    </template>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
