<template>
  <section class="root-modal-stack">
    <modal v-for="item in stack" :modal="item.modal" :key="item.id"></modal>
  </section>
</template>

<script>
import Modal from './Modal.vue'

export default {
  props: {
    stack: Array
  },
  components: {
    Modal
  }
}
</script>

<style scoped lang="scss">
  .root-modal-stack {
    position: relative;
    overflow: visible;
    z-index: 100;
  }
</style>
