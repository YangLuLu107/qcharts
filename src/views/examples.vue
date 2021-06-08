<template>
<el-container>
  <el-header><Header></Header></el-header>
  <el-main>
      <MainExamples></MainExamples>
  </el-main>
</el-container>
</template>
<script>
    import Header from '@/components/header'
    import MainExamples from '@/components/mainExamples'
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
    .el-main {
        overflow-y: auto;
        padding: 0;
    }
</style>