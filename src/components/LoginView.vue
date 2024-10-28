<template>
    <div class="mainLoginContainer">
        <div class="loginField">
            <label for="usernameInput">Username:</label>
            <input v-model="username" type="text" id="usernameInput" />
        </div>
        <div class="loginField">
            <label for="passwordInput">Password:</label>
            <input v-model="password" type="password" id="passwordInput" />
        </div>
        <button @click="logIn">Login</button>
    </div>
</template>

<script setup lang="ts">
import type { stringVoid } from "@/types/vueTypes";
import { inject, ref } from "vue";

const username = ref<string>("");
const password = ref<string>("");

const changeUsername: stringVoid = inject("changeUsername")!;

const logIn = () => {
    console.log(username.value);
    changeUsername(username.value);
};
</script>

<style scoped></style>
