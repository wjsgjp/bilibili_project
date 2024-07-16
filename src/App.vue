<template>
  <router-view />
</template>

<script>
import GOGO from './views/upsearch_views.vue'
import home from './views/home.vue'
export default {
  name: 'App',
  components: {
  GOGO, home 
  }
}
</script>

<style>
body {
  margin: 0;
}

:root {
  --el-color-primary-light-2: #66b1ff;
  --el-color-primary-light-3: #3375b9;
  --el-color-primary-light-5: #2a598a;
  --el-color-primary-light-7: #213d5b;
  --el-color-primary-light-8: #1d3043;
  --el-color-primary-light-9: #18222c;
  --el-text-color-primary: rgb(8, 7, 7);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(240, 242, 245);
}
</style>
