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
          <h3 id="qcharts-type-line" class="content-title">折线图</h3>
        </el-row>
        <el-row class="sub-content">
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/line-simple.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>基础折线图</span></el-row>
            </a>
          </el-col>
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/line-smooth.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>基础平滑折线图</span></el-row>
            </a>
          </el-col>
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/area-basic.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>基础面积图</span></el-row>
            </a>
          </el-col>
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/line-stack.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>折线图堆叠</span></el-row>
            </a>
          </el-col>
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/area-stack.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>基堆叠面积图</span></el-row>
            </a>
          </el-col>
          <el-col :span="6">
            <a target="_blank" href="#" class="detail-link">
              <el-row><img src="../assets/images/area-stack-gradient.webp" class="thumbnail"></el-row>
              <el-row class="sub-title"><span>渐变堆叠面积图</span></el-row>
            </a>
          </el-col>
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
  .content-title {
    border-bottom: 1px solid #E1E5F2;
    padding: 8px 0;
    font-family: 'Alibaba-PuHuiTi-Medium';
    font-weight: 400;
  }
  .thumbnail {
    width: 95%;
    height: 95%;
    border-radius: 0.25rem;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    margin-top: 1rem;
  }
  .sub-content .el-col {
    padding: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    transition: all 0.5s;
    transform: scale(1);
  }
  .sub-content .el-col:hover {
    transform: scale(1.08);
  }
  .sub-title {
    
  }
</style>