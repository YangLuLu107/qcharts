<template>
    <el-row type="flex" id="header" align="middle">
        <el-col :span="4">
            <a href="/index" class="logo-link">
                <img class="logo-img" src="../assets/images/logo.png">
            </a>
        </el-col>
        <el-col :span="20">
            <ul>
                <li><a href="/index">首页</a></li>
                <li><a href="/examples">示例</a></li>
            </ul>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {

        }
    }
}
</script>
<style scoped>
    #header {
        width: 100%;
        height: 3.5rem;
        background-color: white;
        z-index: 3;
        box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    }
    .logo-link {
        display: block;
        width: 8.5rem;
        margin: 0 20px;
    }
    .logo-img {
        width: 8.5rem;
        height: 3rem;
    }
    ul li {
        display: inline-block;
        margin: 0 1rem;
    }
    ul li a {
        color: #081642;
        font-size: 18px;
        font-weight: 600;
        font-family: Alibaba-PuHuiTi-Regular;
    }
    ul li a:hover {
        color: #80838f;
    }
</style>