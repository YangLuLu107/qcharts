<template>
<el-row>
    <el-col :span="10">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="配置编辑" name="first">配置编辑</el-tab-pane>
        <el-tab-pane label="代码查看" name="second">代码查看</el-tab-pane>
    </el-tabs>
    </el-col>
    <el-col :span="14">1</el-col>
</el-row>
</template>
<script>
export default {
    name: 'mainDetail',
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style scoped>
    .el-row {
        height: 100%;
    }
    .el-col {
        height: 100%;
    }
    .el-tabs {
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
