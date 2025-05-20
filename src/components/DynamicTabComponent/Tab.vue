<template>
    <div :class="`py-1  px-2 bg-gray-100 rounded-t-md hover:bg-gray-200  ${tabName === current.title ? 'bg-gray-200 cursor-default' : 'cursor-pointer'}`"
        @:click="handleClick(tabName)">
        <p class="">{{ tabName }}</p>
    </div>
</template>
<script>
export default {
    name: "Tab",
    props: {
        tabName: {
            type: String,
            required: true
        },
        current: {
            type: Object,
            required: true
        }
    },
    data() {
        // Sets up reactive local state
        return {

        }
    },
    methods: {
        handleClick(tabTitle) {
            this.$emit('handle-click-tab', {tabTitle})
        }
    },
    mounted() {
        // console.log(this.current)
    }
}
</script>