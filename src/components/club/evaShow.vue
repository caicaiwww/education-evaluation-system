<!--evaShow.vue 父组件--> 
<script lang="ts" setup>
import action from './action.vue'
import history from './history.vue';
</script>
<template>
    <div>
        <el-tabs class="demo-tabs"  >
            <el-tab-pane label="行为评分"><action /></el-tab-pane>

            <el-tab-pane label="历史评价"><history/></el-tab-pane>
         </el-tabs>
    </div>
</template>

<style lang="scss">
    .el-tabs__active-bar{
        display: none;
    }
    .el-tabs__item  {
        margin-right: 10px;
        background-color: rgb(181, 211, 241);
        border: 1px rgb(181, 211, 241) solid;
        width: 80px;
        border-radius: 15px 15px 0 0;
        padding: 0%;
    }
    .el-tabs__header{
        margin: 0;
        padding: 0%;
    }
    .el-tabs__item.is-active{
        color: black;
    }
    .el-tabs__content{
        height: 100%;
        width: 700px;
        

    }
    .is-active{
        background-color: #fff;
        color: black;
        border-bottom: #fff;
    }

</style>