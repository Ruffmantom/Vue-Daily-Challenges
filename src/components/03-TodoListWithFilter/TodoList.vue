<template>
    <div class="mt-2 p-2 border-zinc-700 rounded-md border-1">

        <form action="submit" v-on:submit.prevent="addTodo" class="w-full flex justify-between">

            <input type="text" :value="todoTitle" @input="e => todoTitle = e.target.value"
                class="px-2 dark:text-zinc-200 w-full rounded-sm outline-none border-1 border-zinc-600 mr-1"
                placeholder="Add todo...">

            <button v-on:click.prevent="addTodo"
                class="px-3 py-1 rounded-sm hover:dark:text-zinc-200 dark:text-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer dark:bg-zinc-900 border-1 border-zinc-600">
                Add
            </button>
        </form>

        <div class="flex items-center gap-2 my-2">
            <span class="dark:text-zinc-200">Filter by:</span>
            <button v-on:click.prevent="handleChangeFilterBy()"
                class="px-3 py-1 rounded-sm dark:text-zinc-600 hover:dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer dark:bg-zinc-900 border-1 dark:border-zinc-600">
                {{ filterKeys[currentFilter] }}
            </button>
        </div>

        <div class="p-2 rounded-sm border-1 border-zinc-600 mt-2">
            <h4 class="dark:text-zinc-200">Todos</h4>
            <div class="pr-1 mt-1 max-h-[300px] overflow-y-auto">
                <TodoItem v-for="todo of viewableTodos" :createdAt="todo.created_at" :key="todo.id"
                    :todoIdProp="todo.id" :status="todo.status" :filterStatus="currentFilter" :title="todo.title"
                    @handle-delete-todo="deleteTodo" @handle-complete="markTodoComplete" @handle-toggle-status="toggleTodoActive"></TodoItem>
                <h1 v-if="viewableTodos.length === 0" class="dark:text-zinc-200">There are no Todos for this filter.
                </h1>
            </div>
        </div>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
import { createCustomId, createTimeStamp } from '../../utils/helpers'


export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    data() {
        // Sets up reactive local state
        return {
            todoTitle: '',
            currentFilter: 1,
            filterKeys: ['All Tasks', 'Active', 'Completed'],
            todoListItems: [
                {
                    id: 'AASLKAGL2N24JLH3BGKJBWKJB',
                    title: 'Todo One',
                    status: 0,
                    created_at: 1749497593687
                },
                {
                    id: 'AKHBWE345B3IB324IBHKHB22I',
                    title: 'Todo Two',
                    status: 1,
                    created_at: 1749497593687
                },
                {
                    id: 'WBWUJBWGUWG882W8GB282B2J4',
                    title: 'Todo Three',
                    status: 2,
                    created_at: 1749497593687
                },
            ],
            viewableTodos: []
        }
    },
    methods: {
        addTodo() {
            if (!this.todoTitle || this.todoTitle === "") {
                return
            }
            console.log(this.todoTitle)
            let newTodo = {
                id: createCustomId(),
                title: this.todoTitle,
                status: 1,
                created_at: createTimeStamp()
            }

            this.todoListItems.push(newTodo)
            this.viewableTodos = this.todoListItems
            this.filterTodos()
            this.todoTitle = ""
        },
        deleteTodo(event) {
            // remove from the todoList
            let updatedTodos = this.todoListItems.filter(t => t.id !== event.todoId)
            this.viewableTodos = this.todoListItems.filter(t => t.id !== event.todoId)
            this.todoListItems = updatedTodos
            // filter
            this.filterTodos()
        },
        handleChangeFilterBy() {
            this.currentFilter++
            if (this.currentFilter === 3) {
                this.currentFilter = 0
            }
            // filter
            this.filterTodos()
        },
        filterTodos() {
            if (this.currentFilter === 1) {
                this.viewableTodos = this.todoListItems.filter(t => t.status === 1)
            } else if (this.currentFilter === 2) {
                this.viewableTodos = this.todoListItems.filter(t => t.status === 2)
            } else {
                this.viewableTodos = this.todoListItems
            }

            /*
            --------------------------------------------------------------------------
            AI's Optimization
            // make it an object
            const filters = {
                0: () => this.todoListItems,
                1: () => this.todoListItems.filter(t => t.status === 1),
                2: () => this.todoListItems.filter(t => t.status === 2)
            };
            // use like this
            this.viewableTodos = filters[this.currentFilter]();
            --------------------------------------------------------------------------
            */
        },
        markTodoComplete(event) {
            // make todo complete in todo list
            let updatedTodos = this.todoListItems.map(t => {
                if (t.id === event.todoId) {
                    if (event.isChecked) {
                        return { ...t, status: 2 };
                    } else {
                        return { ...t, status: 1 };
                    }
                }

                return t
            })

            this.todoListItems = updatedTodos
            this.viewableTodos = updatedTodos
            // filter
            this.filterTodos()

        },
        toggleTodoActive(event) {
             /*
            Statuses
             - 0: inactive
             - 1: active
             - 2: complete
            */
             // make todo complete in todo list
            let updatedTodos = this.todoListItems.map(t => {
                if (t.id === event.todoId) {
                    if (event.currentStatus === 0) {
                        return { ...t, status: 1 };
                    } else {
                        return { ...t, status: 0 };
                    }
                }

                return t
            })

            this.todoListItems = updatedTodos
            this.viewableTodos = updatedTodos
            // filter
            this.filterTodos()
        }
    },
    beforeMount() {
        this.viewableTodos = this.todoListItems.map(t => t)
        // filter
        this.filterTodos()
    },
}
</script>