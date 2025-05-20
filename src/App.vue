<template>
  <div class="app min-h-screen">

    <Tabs></Tabs>

  </div>
</template>
<script>
import Tabs from "@/components/DynamicTabComponent/Tabs.vue";
export default {
  name: "App",
  props: {

  },
  components: {
    Tabs
  }
}
</script>