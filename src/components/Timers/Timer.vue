<template>
    <div class="mainTimerContainer">
        <button class="timerButton" v-on:click="reset">▣</button>
        <button class="timerButton" v-on:click="pauseToggle">{{ paused ? "▶" : "▮▮" }}</button>
        <div class="timer">
            {{ String(Math.floor(seconds / 3600)).padStart(2, "0") }} :
            {{ String(Math.floor((seconds % 3600) / 60)).padStart(2, "0") }} :
            {{ String(seconds % 60).padStart(2, "0") }}
        </div>
        <input
            class="timerName"
            v-model="timerName"
            type="text"
            name="timerName"
            id="timerName"
        />
        <button class="timerButton" v-on:click="props.deleteHandler(props.id)">⨉</button>
    </div>
</template>

<script setup lang="ts">
import type { TimerData } from "@/types/timers";
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps<TimerData>();
// Idk why but without this watcher it doesn't reload it when one of the timers is deleted
watch(props, () => {
    timerName.value = props.name || "Default";
    seconds.value = props.time || 0;
});

const timerName = ref(props.name || "Default");
const seconds = ref(props.time || 0);
const paused = ref(true);
let interval: number | undefined = undefined;
onMounted(() => {
    interval = setInterval(() => {
        if (!paused.value) {
            seconds.value++;
        }
    }, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});

const pauseToggle = () => {
    paused.value = !paused.value;
};

const reset = () => {
    if (confirm(`Reset ${timerName.value} timer?`)) {
        paused.value = true;
        seconds.value = 0;
    }
};
</script>

<style scoped>
.mainTimerContainer {
    display: flex;
    gap: 1vmin;
    place-items: center;
    margin: 1vmin 0;
}

.timerName {
    background-color: inherit;
    border: none;
    padding: 1vmin;
    color: aliceblue;
    border-radius: 10px;
    border: none;
    width: fit-content;
    font-size: 1.8vmin;
    outline: 1px rgba(240, 248, 255, 0.2) solid;
}

.timerName:hover {
    outline: 1px rgba(240, 248, 255, 0.4) solid;
}
.timerName:focus {
    outline: 1px rgba(240, 248, 255, 0.7) solid;
}

.timerButton {
    width: 5vmin;
    background-color: inherit;
    border: 1px rgba(240, 248, 255, 0.7) solid;
    border-radius: 10px;
    color: rgba(240, 248, 255, 0.7);
    transition-duration: 200ms;
    font-size: 1.5vmin;
    font-weight: bold;
    width: 4vmin;
    height: 4vmin;
    line-height: 4.1vmin;
}

.timerButton:hover {
    transition-duration: 500ms;
    color: rgba(240, 248, 255, 1);
    border: 1px rgba(240, 248, 255, 1) solid;
}

.timer {
    font-size: 2vmin;
    font-weight: bold;
    border-right: 1px dotted aliceblue;
    border-left: 1px dotted aliceblue;
    padding: 1vmin 2vmin;
}
</style>
