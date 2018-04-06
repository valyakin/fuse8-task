<template>
  <div class="root-modal" @click.self="$store.dispatch('modals/close')">
    <transition name="fade">
      <proxy :component="modal.factory()" :pass="modal.data"></proxy>
    </transition>
  </div>
</template>

<script>
import Proxy from './Proxy.vue'

export default {
  props: {
    modal: Object
  },
  components: {
    Proxy
  }
}
</script>

<style scoped lang="scss">
.root-modal {
  transition: all .2s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2.5rem;
  background-color: #181818;
  overflow: auto;
  display: flex;
  opacity: 1;
  > * {
    margin: auto;
  }
}
.fade-enter, .fade-leave-to  {
  transform: translateY(2rem);
  opacity: 0;
}
</style>
