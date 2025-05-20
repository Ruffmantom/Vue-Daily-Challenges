# Vue Challenge #1: Dynamic Tab Component
## 🧠 Challenge Objective
#### Create a dynamic tab component using the Vue Options API. You’ll build a reusable Tabs component where the content changes based on which tab is selected.

## ✅ Requirements
- Use the Options API
- Use props, slots, and v-bind
- Highlight the active tab
- Emit an event when the tab changes

## 🧩 Scenario
Imagine you’re building an onboarding dashboard. You want users to toggle between “Overview”, “Tasks”, and “Messages”.

## 🧱 What to Build
You’ll create:

- Tabs.vue – the parent wrapper for all tabs
- Tab.vue – a child component representing each tab
- App.vue – where you'll mount and test it

## 💡 Hints
- Use v-show or v-if to conditionally display content
- Use this.$emit('tab-selected', tabName) to emit tab changes
- Manage the active tab with data() in the parent