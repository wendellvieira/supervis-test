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
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #26242a;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
