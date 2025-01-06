<template>
    <header>
        <nav>
            <RouterLink class="navElement" to="/">Home</RouterLink>
            <RouterLink class="navElement" to="/timers">Timers</RouterLink>
            <RouterLink class="navElement" to="/taskList">Task List</RouterLink>
            <RouterLink class="navElement" to="/quiz">Quiz</RouterLink>
        </nav>
    </header>
    <div class="mainAppContainer">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import TaskListView from "./views/TaskListView.vue";
import { RouterView } from "vue-router";
// const username = ref<string>("");

// const changeUsername = (_username: string) => {
//     console.log(_username);
//     username.value = _username;
// };

// provide("username", username);
// provide("changeUsername", changeUsername);
</script>

<style scoped>
.mainAppContainer {
    min-width: 100%;
    min-height: calc(100vh - 3vmin);
    overflow: auto;
    background-color: black;
    color: aliceblue;
    padding: 1rem;
    padding-left: 2rem;
}
header {
    height: 3vmin;
    padding-top: 1vmin;
    background-color: black;
    font-size: 2vmin;
    color: aliceblue;
}

.navElement {
    border: 1px solid aliceblue;
    text-decoration: unset !important;
    color: aliceblue !important;
    padding: 1vmin;
    box-sizing: border-box;
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
