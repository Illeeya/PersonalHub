<template>
    <div class="mainContainer">
        <h2>{{ props.question }}</h2>
        <ul>
            <li v-for="answer in answers">{{ answer }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { type QuizQuestion } from "@/types/quizTypes";
import { computed } from "vue";

const props = defineProps<QuizQuestion>();

const answers = computed(() => {
    return [
        props.answer,
        ...[...props.wrongAnswers].sort(() => 0.5 - Math.random()).slice(0, 3),
    ].sort();
});
</script>

<style scoped></style>
