<template>
<el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu class="el-menu-vertical-demo" @select="handleSelect">
      <el-menu-item index="1">
        <a :class="{ 'selectA': selectedKey==1 }" href="#qcharts-type-line">
          <i class="el-icon-document"></i>
          <span slot="title">折线图</span>
        </a>
      </el-menu-item>
      <el-menu-item index="2">
        <a :class="{ 'selectA': selectedKey==2 }" href="#qcharts-type-bar">
          <i class="el-icon-document"></i>
          <span slot="title">柱状图</span>
        </a>
      </el-menu-item>
      <el-menu-item index="3">
        <a :class="{ 'selectA': selectedKey==3 }" href="#qcharts-type-pie">
          <i class="el-icon-document"></i>
          <span slot="title">饼图</span>
        </a>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-row class="content">
      <el-row>
        <el-row>
          <h3 id="qcharts-type-line" class="title">折线图</h3>
        </el-row>
        <el-row>
          <el-col :span="6">1</el-col>
          <el-col :span="6">2</el-col>
          <el-col :span="6">3</el-col>
          <el-col :span="6">4</el-col>
          <el-col :span="6">5</el-col>
          <el-col :span="6">6</el-col>
        </el-row>
      </el-row>
    </el-row>
  </el-container>
</el-container>
</template>
<script>
    export default {
        name: "mainExamples",
        data() {
            return {
              selectedKey: 0
            }
        },
        methods: {
          handleSelect(key, keyPath) {
            this.selectedKey = key;
          }
        }
    }
</script>
<style scoped>
  a {
    display: block;
    color: #303133;
    font-family: 'Alibaba-PuHuiTi-Regular';
    font-weight: 400;
    transition: color .3s;
  }
  .selectA {
    color: #409EFF;
  }
  .el-menu-item.is-active {
    background-color: #ecf5ff;
  }
  .content {
    flex: 1;
    padding: 0 2rem;
  }
  .title {
    border-bottom: 1px solid #E1E5F2;
    padding: 8px 0;
    font-family: 'Alibaba-PuHuiTi-Medium';
    font-weight: 400;
  }
</style>