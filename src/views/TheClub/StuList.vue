<script setup >
import { ref } from 'vue';
import {Search} from '@element-plus/icons-vue'
const input=ref('')
const stuList=[
{
    班级:"三年级一班",
    每周之星:"荔枝汁",
    语文:"98",
    数学:"94",
    英语:"98",
    品德:"98",
    科学:"98",
    美术:"98",
    音乐:"98",
    信息:"98",
    体育:"98",
    班风班纪:"98",
    总计:"1205"
  },
{
    班级:"三年级一班",
    每周之星:"荔枝汁",
    语文:"98",
    数学:"93",
    英语:"98",
    品德:"98",
    科学:"98",
    美术:"98",
    音乐:"98",
    信息:"98",
    体育:"98",
    班风班纪:"98",
    总计:"1205"
  },
{
    班级:"三年级一班",
    每周之星:"荔枝汁",
    语文:"98",
    数学:"91",
    英语:"98",
    品德:"98",
    科学:"98",
    美术:"98",
    音乐:"98",
    信息:"98",
    体育:"98",
    班风班纪:"98",
    总计:"1205"
  },

]



</script>
<template>
    <div style="width: 100%;height: 700px;background-color: #fff;">
        <div style="width: 100%;height: 30px;background-color: rgb(99, 170, 241);"></div>
        <div style="width: 100%; background-color: white;">
            <div class="header">
                <el-input
                    v-model="input"
                    class="search"
                    placeholder="输入关键字查找"
                   :suffix-icon="Search"/>
                <span class="title">英语社</span>
                <span style="font-size: 10px;font-weight:100"> 人数：43人</span>
            </div>
          <div class="list">
            <el-table :data="stuList"  height="250" style="width: 100%">
            <el-table-column type="index" index="1" />
            <el-table-column prop=  "班级" label="班级" width="110"  />
            <el-table-column prop="每周之星" label="每周之星" width="100" />
            <el-table-column prop="语文" label="语文"  sortable width="80" />
            <el-table-column prop="数学" label="数学" width="80" sortable />
            <el-table-column prop="英语" label="英语" width="80" sortable/>
            <el-table-column prop="品德" label="品德" width="80" sortable/>
            <el-table-column prop="科学" label="科学" width="80" sortable/>
            <el-table-column prop="美术" label="美术" width="80" sortable/>
            <el-table-column prop="音乐" label="音乐" width="80" sortable />
            <el-table-column prop="信息" label="信息" width="80" sortable/>
            <el-table-column prop="体育" label="体育" width="80" sortable/>
            <el-table-column prop= "班风班纪" label="班风班纪" width="110" sortable/>
            <el-table-column prop="总计" label="总计" width="100" sortable/>
         </el-table>
          </div>   

        </div>
       
    </div>
</template>

<style scoped>
/* 设置圆角以及边框颜色 */

.header{
    width: 100%;
    height: fit-content;
    .search{
        width: 250px;
        margin: 20px;
      .el-input__wrapper{
        background-color: aquamarine;
      }}
    .title{
        margin-left: 200px;
    }
    .selectWeek{
        margin-left: 20px;
        width: 120px;
        .el-input__inner{
            font-size: 10px;

        }
    }


}
.list{
    width: 100%;
    .el-table {
        width: 99%;
        margin: 0 auto;
        border: 2px  solid rgb(170, 166, 166);
        border-radius: 15px;
        margin-bottom: 10px;
    }
}

</style>