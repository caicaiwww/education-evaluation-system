<template>
    <div class="footerd">
        <div class="img" style="width: 100%;display: flex;" >
            <el-image fit="contain" src="https://files.axshare.com/gsc/1PCUT4/b5/d2/f3/b5d2f32136544d6e9f81cdc85f846421/images/%E6%88%91%E7%9A%84%E7%A4%BE%E5%9B%A2/u4.svg?pageId=c5f02469-1921-42ba-9629-bb9ae7e34c16"></el-image>
        </div>
    <!-- <el-text class="demonstration"><br></el-text> -->
        <div class="text"  style="width: 100%;display: flex;" >
                    <el-space direction="vertical" >
                <el-text>扫码下载移动端app</el-text>
                <el-text tag="p">专业学生评价系统</el-text>
            </el-space>
        </div>

    </div>
    
</template>
<script setup lang="ts">
</script>
<style scoped>
    .footerd{
        width: 100%;
        background-color: #fff;
        height: 100px;
        margin-top: 30px;
        
        .el-image{
            width:50px;
            height: 50px;
            margin: 0 auto ;
        }
        .el-space{
            margin: 0 auto ;

        }
    }
    .el-text{
        font-family: Microsoft YaHei;
    }
    

</style>