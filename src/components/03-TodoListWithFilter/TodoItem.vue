<template>
    <div
        :class="`p-2 border-1  rounded-sm mb-2 flex flex-col gap-1 relative ${status === 0 ? 'opacity-50' : status === 2 || isChecked ? 'dark:bg-green-950 dark:border-green-900' : 'border-zinc-700 dark:bg-zinc-800'}`">
        <div class="w-full flex justify-between">
            <h1 class="dark:text-zinc-200 text-xs">{{ formattedDate }} </h1>
            <h1 class="dark:text-zinc-200 rounded-full border-1 px-1 text-[.58rem] w-max mb-1">{{ status === 0 ?
                'inactive' :
                status === 1 ? 'active' : 'complete' }}</h1>
        </div>
        <div class="flex gap-2 items-center justify-between w-full">
            <div class="flex gap-2 items-center">
                <input type="checkbox" :checked="isChecked" @change="e => handleCompleteStatus(e)" name=""
                    class="w-[20px] h-[20px]" id="">
                <h1 class="dark:text-zinc-200">{{ title }}</h1>
            </div>

            <div class="flex gap-2 items-center">
                <button v-if="status !== 2" v-on:click.prevent="handleToggleStatus(id, status)"
                    class="dark:text-zinc-200 w-[20px] h-[20px] rounded-xs flex items-center justify-center border-1 border-zinc-600 cursor-pointer hover:bg-yellow-300 hover:border-yellow-500 hover:text-yellow-600 ">◎</button>
                <button v-on:click.prevent="handleDelete(id)"
                    class="dark:text-zinc-200 w-[20px] h-[20px] rounded-xs flex items-center justify-center border-1 border-zinc-600 cursor-pointer hover:bg-red-300 hover:border-red-500 hover:text-red-600 ">×</button>
            </div>
        </div>
    </div>
</template>
<script>
import { formatDate } from '@/utils/helpers'
import { ref } from 'vue'
export default {
    name: 'TodoItem',
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        createdAt: {
            type: Number,
            required: true
        },
        filterStatus: {
            type: Number,
            required: true
        },
        status: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isChecked: ref(false),
            formattedDate: "",
        }
    },
    beforeMount() {
        // check to see if status is checked
        if (this.status === 2) {
            this.isChecked = true
        }

        // format the created at date
        this.formattedDate = formatDate(this.createdAt)

    },
    methods: {
        handleDelete(id) {
            this.$emit('handle-delete-todo', { message: 'Deleting todo: ' + id, todoId: id })
        },
        handleToggleStatus(id, currentStatus) {
            this.$emit('handle-toggle-status', { message: 'Changing status of todo: ' + id, todoId: id, currentStatus: currentStatus })
        },
        handleCompleteStatus(e, id) {
            this.$emit('handle-complete', { message: 'completing todo: ' + id, todoId: id, isChecked: e.target.checked })
            this.isChecked = e.target.checked
        }
    }
}
</script>