<template>
  <div id="app">
    <router-view/>
    <modal-stack :stack="$store.state.modals.stack" />
  </div>
</template>

<script>
import * as components from 'src/components'

export default {
  name: 'app',
  components
}
</script>

<style>
  #app {
    height: 100%;
  }
</style>
