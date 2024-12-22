<template>
    <div class="taskListMC">
        <button v-on:click="addTask" class="addButton">⩥</button>
        <ListElement
            v-for="task in testData"
            :uuid="task.uuid"
            :text="task.text"
            :children="task.children"
            :delete-task="deleteTask"
        ></ListElement>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import ListElement from "@/components/TaskList/ListElement.vue";
import type { ListElementType } from "@/types/taskList";

const deleteTask = (uuid: string) => {
    const agreed = confirm("Delete task and it's subtasks?");
    if (!agreed) return;
    const data = testData.value;
    testData.value = biggusFiltus(data, uuid);
};

const biggusFiltus = (arr: ListElementType[], uuid: string) => {
    return arr.filter((x) => {
        if (x.uuid != uuid) {
            if (x.children.length) {
                x.children = biggusFiltus(x.children, uuid);
                return true;
            } else return true;
        } else return false;
    });
};

const addTask = () => {
    testData.value.unshift({
        uuid: crypto.randomUUID(),
        text: "",
        children: [],
        deleteTask: deleteTask,
    });
};
const testData = ref<ListElementType[]>([
    {
        uuid: "asd1",
        text: "Grandest of daddies",
        children: [
            {
                uuid: "asd2",
                text: "Actual Parent",
                children: [
                    {
                        uuid: "asd3",
                        text: "Child but single",
                        children: [],
                        deleteTask: deleteTask,
                    },
                    {
                        uuid: "asd4",
                        text: "Child even singler",
                        children: [],
                        deleteTask: deleteTask,
                    },
                    {
                        uuid: "asd5",
                        text: "Child with kids",
                        children: [
                            {
                                uuid: "asd7",
                                text: "Grandchild Maciuś",
                                children: [],
                                deleteTask: deleteTask,
                            },
                            {
                                uuid: "asd8",
                                text: "Secondary grandchild",
                                children: [],
                                deleteTask: deleteTask,
                            },
                            {
                                uuid: "asd9",
                                text: "The one nobody likes",
                                children: [],
                                deleteTask: deleteTask,
                            },
                        ],
                        deleteTask: deleteTask,
                    },
                ],
                deleteTask: deleteTask,
            },
            { uuid: "asd6", text: "Single weaboo", children: [], deleteTask: deleteTask },
        ],
        deleteTask: deleteTask,
    },
]);
</script>

<style scoped>
.taskListMC {
    min-width: 100%;
    min-height: 100%;
    background-color: black;
    color: aliceblue;
    padding: 1rem;
}
.addButton {
    width: 20vmin;
    background-color: inherit;
    border: 1px rgba(240, 248, 255, 0.3) solid;
    border-radius: 10px;
    padding: 0.5vmin;
    color: rgba(240, 248, 255, 0.6);
    transition-duration: 200ms;
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
