<template>
    <div class="mainTimerContainer">
        <button v-on:click="pauseToggle">{{ paused ? "▷" : "‖‖" }}</button>
        <div class="timer">{{ seconds }}</div>
        <input type="text" name="timerName" id="timerName" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const seconds = ref(0);
const paused = ref(false);
let interval: number | undefined = undefined;

// Start the counter when the component mounts
onMounted(() => {
    console.log("yes");
    interval = setInterval(() => {
        if (!paused.value) {
            seconds.value++;
        }
    }, 1000);
});

// Clear the interval when the component unmounts
onUnmounted(() => {
    clearInterval(interval);
});

const pauseToggle = () => {
    paused.value = !paused.value;
};

// Reset function
const reset = () => {
    seconds.value = 0;
};
</script>

<style scoped></style>
