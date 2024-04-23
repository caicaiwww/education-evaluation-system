<template >
    <div class="index">
      <div class="select">
          <div style="height: 20px;width: 90px; background:blue"></div>
          <el-radio-group v-model="activeName" class="demo-tabs"  v-for="(item, index) in menuitem" :key="index" >
            <el-radio-button :label="item.title" @click="tomore(item.path)" ></el-radio-button>
        </el-radio-group>
        </div>
        <div class="show">
          <div class="selected">
              <el-breadcrumb :separator-icon="ArrowRight" style="line-height:  30px; margin-left: 10px ;">
                   <el-breadcrumb-item :to="{ path: '/' }">我的社团</el-breadcrumb-item>
                   <el-breadcrumb-item  >{{ activeName }}</el-breadcrumb-item>
              </el-breadcrumb>
           </div>
           <div class="showed">
            <router-view></router-view>
           </div>
        </div>
    </div>
</template>
<script setup >
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import router from '../../router/index';

const activeName = ref('学生评价');

const tomore = (id) => {
  router.push(id); // 将ID作为参数传递给router.push
};

const menuitem = [
  {
    title: '学生评价',
    path: '/clubindex/stueva',
  },

  {
    title: '审批管理',
    path: '/clubindex/exammeg', 
  },
  {
    title: '发布通知',
    path: '/clubindex/makeann', 
  },

];


</script>
<style scoped lang="scss">

    .select{
      height: 300px;
      width: 100px;
      margin-top: 150px;
      margin-left: 80px;
      float: left;
    }
    .show{
      width: 1200px;
      height: 800px;
      flex-direction: column; //上下排列
      margin-left: 200px;
      .selected{
         background: white;
         height: 30px;
         width: auto;
         margin-bottom: 30px;
        }
      
        .showed{
          height: 800px;
        }
    }

</style>