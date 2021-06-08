<template>
<el-container>
    <el-header><Header></Header></el-header>
    <el-main>
        <MainDetail></MainDetail>
    </el-main>
</el-container>
</template>
<script>
import Header from '@/components/header'
import MainDetail from '@/components/mainDetail'
export default {
    components: { Header, MainDetail },
    name: "detail",
    data() {
        return {

        }
    }
}
</script>
<style scoped>
    
</style>