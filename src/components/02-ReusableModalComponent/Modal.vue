<template>

    <div @keydown.esc="handleClose" @click.self="handleClose"
        class="fixed w-screen h-screen bg-blur-md flex flex-col backdrop-blur-sm items-center justify-center">
        <div
            :class="`bg-white rounded-md p-4 flex flex-col gap-1 relative min-h-1/4 max-h-5/6 max-w-5/6 shadow-lg ${widthClass}`">
            <div class="flex justify-between">
                <h3 class="text-lg font-bold max-w-9/12">{{ title }}</h3>
                <!-- <button @click="handleClose"
                    class="px-3 py-1 rounded-sm bg-gray-100 max-h-max hover:bg-gray-200 cursor-pointer">X</button> -->
            </div>
            <!-- content -->
            <slot>
                <p>Default content if none is passed</p>
            </slot>
        </div>
    </div>

</template>

<script>
export default {
    name: "Modal",
    props: {
        title: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: false
        },
        isOpen:{
            type:Boolean,
            required:true
        }
    },
    data() {
        // Sets up reactive local state
        return {

        }
    },
    methods: {
        handleClose() {
            this.$emit('handle-click-close', { message: "Closing Modal" })
        },
        widthClass() {
            let sizes = {
                sm: 'max-w-sm',
                md: 'max-w-md',
                lg: 'max-w-lg',
                xl: 'max-w-xl'
            }

            return sizes[this.width] || 'max-w-md';
        }
    },
    mounted() {
        document.addEventListener('keydown', (e)=>{
            if(e.key === 'Escape' && this.isOpen){
                this.handleClose()
            }else{
                return
            }
        })
    }
}
</script>