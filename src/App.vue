<template>
  <div id="app">
    <btn label="text" />
    <btn label="text" icon="save" />
    <btn label="text" icon="save" disabled />
    <btn label="text" icon="save" type="secondary" />
    <btn round icon="save" type="secondary" />
    <btn round icon="save" />
    <btn round icon="save" disabled />
  </div>
</template>

<script>
import btn from './components/btn.vue'

export default {
  name: 'App',
  components: {
    btn,
  },
}
</script>
