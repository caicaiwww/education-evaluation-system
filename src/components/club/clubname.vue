    <!--已经没用了!-->

<template >
    <div class="name">
        <div >       
            <span class="a">英语社</span>
        </div>
        <div>
             <el-input  v-model="stuname" class="w-50 m-2" placeholder="输入关键字查找" :suffix-icon="Search"></el-input>
        </div>
    </div>
</template>
<script  setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
const stuname=ref()

</script>
<style lang="scss" scoped>
    .name{
        line-height: 40px;
    }
    .a{
        font-weight: bolder;
    }
    .b{
        font-size: 10px;
    }
    .el-select{
        width: 72px;
        float: right;
        padding: 0%;

    }
    .el-input {
        margin-top: 10px;
        display: flex;
    }
    .addgroup{
        width: fit-content;
    }
</style>