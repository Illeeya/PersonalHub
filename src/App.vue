<template>
    <div class="mainAppContainer">
        <LoginView v-if="username == ''"></LoginView>
        <TaskListView v-else></TaskListView>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import LoginView from "./components/LoginView.vue";
import TaskListView from "./components/TaskListView.vue";

const username = ref<string>("");

const changeUsername = (_username: string) => {
    console.log(_username);
    username.value = _username;
};

provide("username", username);
provide("changeUsername", changeUsername);
</script>

<style scoped>
.mainAppContainer {
    min-width: 100%;
    min-height: 100%;
    background-color: black;
    color: aliceblue;
    padding: 1rem;
    padding-left: 2rem;
}
</style>

<!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView /> -->
