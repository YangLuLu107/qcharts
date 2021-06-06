<template>
<el-container>
  <el-header><Header></Header></el-header>
  <el-main>
      <MainExamples></MainExamples>
  </el-main>
</el-container>
</template>
<script>
    import Header from '../components/header.vue'
    import MainExamples from '../components/mainExamples.vue'
    export default {
        components: { Header, MainExamples },
        name: "examples",
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .el-container {
        height: 100%;
    }
    .el-header {
        padding: 0;
    }
    .el-main {
        overflow-y: auto;
        padding: 0;
    }
</style>