<template>
    <div class="listElementMC">
        <div class="listElement">
            <button v-on:click="props.deleteTask(props.uuid)">Ø</button>
            <button>↪</button>
            <p>○</p>
            <input type="text" v-model="props.text" />
        </div>
        <div v-if="children.length" class="childrenContainer">
            <ListElement
                v-for="child in props.children"
                :uuid="child.uuid"
                :text="child.text"
                :children="child.children"
                :delete-task="child.deleteTask"
            ></ListElement>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ListElementType } from "@/types/taskList";

const props = defineProps<ListElementType>();
</script>

<style scoped>
.listElementMC {
    padding: 1vmin;
}
.listElement {
    display: flex;
    gap: 1vmin;
}

.listElement > p {
    display: flex;
    place-items: center;
    width: fit-content;
}

.listElement > * {
    font-size: calc(0.5rem + 2vmin);
}

.listElement > input {
    background-color: inherit;
    border: none;
    padding: 1vmin;
    color: aliceblue;
    border-radius: 10px;
    border: none;
    width: fit-content;
}

.listElement > input:hover {
    outline: 1px rgba(240, 248, 255, 0.137) solid;
}
.listElement > input:focus {
    outline: 1px rgba(240, 248, 255, 0.336) solid;
}

.listElement > button {
    width: 5vmin;
    background-color: inherit;
    border: 1px rgba(240, 248, 255, 0.034) solid;
    border-radius: 10px;
    padding: 0.5vmin;
    color: rgba(240, 248, 255, 0.096);
    transition-duration: 200ms;
}

.listElement > button:hover {
    transition-duration: 500ms;
    color: rgba(240, 248, 255, 0.541);
    border: 1px rgba(240, 248, 255, 0.281) solid;
}

.childrenContainer {
    margin-left: 3vmin;
}
</style>
