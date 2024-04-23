<template>
  <div class="stueva">
    <!-- 学生列表 -->
    <div class="stu">
      <div class="stu1">
        <div class="name">
          <div>       
            <span class="a">英语社</span>
          </div>
          <div>
            <!-- 搜索框 -->
            <el-input v-model="stuname" class="w-50 m-2" placeholder="输入关键字查找" :suffix-icon="Search"></el-input>
          </div>
        </div>
        <div class="stuna">
          <!-- 学生列表表格 -->
          <el-table :data="pagedStuList" :header-cell-style="{fontSize:'10px'}">
            <el-table-column prop="学号" label="学号" sortable />
            <el-table-column prop="名字" label="名字"  sortable />
            <el-table-column prop="总计得分" label="总计得分" sortable />
          </el-table>
        </div>
        <!-- 分页组件 -->
        <el-pagination 
           style="margin-left:20% ;"
          v-model:currentPage="currentPage"
          :total="filteredStuList.length"
          :page-size="pageSize"
          layout="prev, pager, next"
          @current-change="handlePageChange"
        />
      </div>    
    </div>
    <!-- 其他组件 -->
    <div class="eva">
      <evaShow/>
    </div>
  </div>
</template>

<script setup>
import clubname from '../../components/club/clubname.vue';
import evaShow from '../../components/club/evaShow.vue';
import { Search } from '@element-plus/icons-vue';
import { ref, computed } from 'vue';

const stuname = ref('');
const stuList = [
  { 学号: "23", 名字: "小李", 总计得分: "251" },
  { 学号: "24", 名字: "小白", 总计得分: "252" },
  { 学号: "25", 名字: "小晴", 总计得分: "253" },
  { 学号: "33", 名字: "张三", 总计得分: "251" },
  { 学号: "34", 名字: "李四", 总计得分: "252" },
  { 学号: "35", 名字: "王五", 总计得分: "253" },
  { 学号: "26", 名字: "赵六", 总计得分: "254" },
  { 学号: "27", 名字: "小红", 总计得分: "255" },
  { 学号: "28", 名字: "小明", 总计得分: "256" },
  { 学号: "29", 名字: "小丽", 总计得分: "257" },
  { 学号: "30", 名字: "小刚", 总计得分: "258" },
  { 学号: "31", 名字: "小美", 总计得分: "259" },
  { 学号: "32", 名字: "小强", 总计得分: "260" }

];

// 分页相关属性
const pageSize = 10; // 每页显示的条数
const currentPage = ref(1); // 当前页码

// 计算属性，根据当前页和每页条数对学生列表进行分页处理
const pagedStuList = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = currentPage.value * pageSize;
  return filteredStuList.value.slice(startIndex, endIndex);
});

// 计算属性，根据搜索关键字对学生列表进行过滤
const filteredStuList = computed(() => {
  if (!stuname.value) {
    return stuList;
  } else {
    const keyword = stuname.value.trim().toLowerCase();
    return stuList.filter(student => {
      return student.学号.toLowerCase().includes(keyword) || student.名字.toLowerCase().includes(keyword);
    });
  }
});

// 分页改变时触发的方法
const handlePageChange = (val) => {
  currentPage.value = val;
};
</script>


  
  <style lang="scss" scoped>
  .stueva {
    width: 100%;
    height: 780px;
  
    .stu {
      width: 350px;
      height: 780px;
      padding: 0%;
      float: left;     
      background: #fff;  
  
      .stu1 {
        width: 320px;
        margin: 0 auto;
        margin-top: 20px;
        height: 100%;
  
        .stuna {
          margin: 10px 0;
  
          .el-table {
            border-radius: 15px;
            height: max-content;
            width: 320px;
            display: flex;
          }
        } 
      } 
    }
    .eva {
      width: 800px;
      float: right;
      height: 780px;
    }
  }
  
  /* 搜索框样式 */
  .name {
    line-height: 40px;
  }
  .a {
    font-weight: bolder;
  }
  .b {
    font-size: 10px;
  }
  .el-select {
    width: 72px;
    float: right;
    padding: 0%;
  }
  .el-input {
    margin-top: 10px;
    display: flex;
  }
  .addgroup {
    width: fit-content;
  }
  .el-pagination {
}

  </style>
  