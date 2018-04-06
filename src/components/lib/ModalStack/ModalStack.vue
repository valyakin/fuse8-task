<template>
  <section class="root-modal-stack">
    <transition name="fade">
      <modal v-for="item in stack" :modal="item.modal" :key="item.id"></modal>
    </transition>
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
    transition: all .2s;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to  {
    transform: translateY(-2rem);
    opacity: 0;
  }
</style>
