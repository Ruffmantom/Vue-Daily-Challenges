<template>
  <div class="app min-h-screen flex flex-col relative">

    <!-- <Tabs></Tabs> -->
    <Modal v-if="modalOpen" :isOpen="modalOpen" :width="'xl'" @handle-click-close="handleCloseModal"
      :title="'This is a reusable modal!'">
      <p>Here is the content for the modal.</p>
    </Modal>

    <!-- Filler content -->
    <div class="p-3 m-auto flex flex-col">

      <div class="mb-4 max-w-3/4  m-auto">

        <button class="py-2 px-4 font-medium text-white w-max bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-sm"
          @click="modalOpen = true">Learn More</button>
      </div>

    </div>
    <!-- Filler content -->

  </div>
</template>
<script>
import Tabs from "@/components/01-DynamicTabComponent/Tabs.vue";
import Modal from "@/components/02-ReusableModalComponent/Modal.vue";
export default {
  name: "App",
  props: {

  },
  data() {
    // Sets up reactive local state
    return {
      modalOpen: false
    }
  },
  components: {
    Tabs,
    Modal
  },
  methods: {
    handleCloseModal(event) {
      console.log(event.message)
      if (this.modalOpen) {
        this.modalOpen = false
      }
    }
  }
}
</script>