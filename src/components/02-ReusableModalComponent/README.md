# Vue Challenge #2: Reusable Modal Component

---

### 🧠 Challenge Objective
#### Build a reusable modal dialog component using the Vue Options API. This modal should be easily dropped into any part of your app, triggered by events, and controlled via props or slot content.

### ✅ Requirements
- Use the Options API
- Support slot content inside the modal
- Use a prop to control visibility (show)
- Emit a close event when the modal is dismissed
- Add basic keyboard (ESC) and backdrop click to close it
- Use <transition> for enter/leave animations

### 🧩 Scenario
You’re working on a dashboard and want users to be able to open modal dialogs for editing items, confirming actions, or viewing more info.

### 📦 What to Build
1. Modal.vue (reusable component)
2. App.vue (test page that uses it)

### Expected Usage
```
<Modal :show="isModalVisible" @close="isModalVisible = false">
  <h2 class="text-lg font-bold mb-2">Edit Task</h2>
  <p>You can add task details here.</p>
  <button @click="isModalVisible = false">Close</button>
</Modal>
```

### 🔐 Bonus
- Add props like width or title
- Add optional header and footer slots