<template>
    <Timer v-for="timer in timers" v-bind="timer" />

    <button v-on:click="addTimer" class="addButton">New Timer</button>
</template>

<script setup lang="ts">
import Timer from "@/components/Timers/Timer.vue";
import { ref } from "vue";

const deleteTimer = (id: string) => {
    if (confirm("You want to delete timer?")) {
        timers.value = timers.value.filter((x) => {
            if (x.id != id) {
                return true;
            }
        });
    }
};

const addTimer = () => {
    timers.value.push({
        id: crypto.randomUUID(),
        name: "default",
        time: 0,
        deleteHandler: deleteTimer,
    });
};

const timers = ref([
    { id: "asd1", name: "Cooking", time: 123, deleteHandler: deleteTimer },
    { id: "asd2", name: "Sex", time: 1443, deleteHandler: deleteTimer },
    { id: "asd3", name: "Something", time: 11, deleteHandler: deleteTimer },
]);
</script>

<style scoped>
.addButton {
    margin-top: 2vmin;
    width: 20vmin;
    background-color: inherit;
    border: 1px rgba(240, 248, 255, 0.3) solid;
    border-radius: 10px;
    padding: 0.5vmin;
    color: rgba(240, 248, 255, 0.6);
    transition-duration: 200ms;
    font-size: 2vmin;
}
.addButton:hover {
    background-color: #222;
    color: rgba(240, 248, 255, 0.8);
    border: 1px rgba(240, 248, 255, 0.8) solid;
    transition-duration: 200ms;
}
.addButton:active {
    background-color: #444;
    transition-duration: 100ms;
}
</style>
