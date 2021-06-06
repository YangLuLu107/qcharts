<template>
<el-container>
  <el-header><Header></Header></el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'index',
  data () {
    return {
      msg: 'visualArt'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    padding: 0;
  }
</style>
