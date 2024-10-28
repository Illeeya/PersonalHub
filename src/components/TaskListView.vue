<template>
    <div class="taskListMainContainer">
        <h1>{{ username }}</h1>
        <ul>
            <li v-for="item in listItems">
                {{ item }}
            </li>
        </ul>

        <input
            type="text"
            name="itemInput"
            @keyup.enter="addItem"
            @keyup.esc="clearInput"
            ref="inputField"
            v-model="currentInput"
            id="itemInput"
        />
        <button @click="addItem">Add</button>
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";

const username = inject<string>("username");

const listItems = ref<string[]>(["asd", "zxc", "qwe"]);
const currentInput = ref<string>("");
const inputField = ref<null | HTMLInputElement>(null);

const addItem = () => {
    console.log(username);
    // listItems.value.push(currentInput.value);
    // currentInput.value = "";
};

const clearInput = () => {
    currentInput.value = "";
    inputField.value?.blur();
};
</script>

<style scoped></style>
