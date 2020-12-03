<template>
  <div id="app">
    <!-- @input="(val) => (value = val) -->
    <!-- <DatePicker v-model="now"></DatePicker> -->
    <vat-date-picker v-model="now"></vat-date-picker>
  </div>
</template>

<script>
// import DatePicker from './components/date-picker'
export default {
  name: 'App',
  components: {
    // DatePicker
  },
  data () {
    return {
      now: new Date()
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
