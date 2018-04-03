<template>
  <div class="root-modal">
    <div class="content" @click.self="$store.dispatch('modals/close')">
      <proxy :component="modal.factory()" :pass="modal.data"></proxy>
    </div>
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;

  >.content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 0 0 auto;
    height: 100%;
    width: 100%;
  }
}
</style>
