<template>
    <div class="p-2 flex flex-col min-h-screen">

        <!-- Header -->
        <div class="flex gap-0" v-if="currentTab">
            <Tab v-for="tab in tabs" :current="currentTab" @handle-click-tab="handleClickTab" :tabName="tab.title"
                :key="tab.title"></Tab>
        </div>

        <!-- content area -->
        <div class="p-2 bg-gray-100 rounded-b-md grow">
            {{ currentTab.description }}
        </div>
    </div>
</template>
<script>
import Tab from './Tab.vue'

export default {
    name: "Tabs",
    props: {

    },
    data() {
        // Sets up reactive local state
        return {
            // set state here
            tabs: [
                {
                    title: "Overview",
                    description: "Welcome to the overview!",
                },
                {
                    title: "Tasks",
                    description: "Here's your task list.",
                },
                {
                    title: "Messages",
                    description: "Check your latest messages.",
                },
            ],
            currentTab: {
                title: "Overview",
                description: "Welcome to the overview!",
            },
            message: "Here is a message"
        }
    },
    components: {
        Tab
    },
    methods: {
        // handle click tab
        handleClickTab(event) {
            // // don't do anything if its the same tab
            if (event.tabTitle === this.currentTab.title) {
                alert("your on this tab!")
                return
            }
            // find the new tab
            let a = null
            this.tabs.forEach(element => {
                if (element.title === event.tabTitle) {
                    a = element
                }
            });
            this.currentTab = a



            // AI's suggestion to clean this function up
            /*
            handleClickTab({ tabTitle }) {
                if (tabTitle === this.currentTab.title) {
                    alert("You're on this tab!");
                    return;
                }
                this.currentTab = this.tabs.find(tab => tab.title === tabTitle);
            }
            */
        }
    }
}

</script>