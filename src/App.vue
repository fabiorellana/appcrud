<template>
  <div id="app">
    <div class="container">
      <Names/>
    </div>
  </div>
</template>

<script>
import Names from './components/Names'

export default {
  name: 'App',
  components: {
    Names
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
