<template>
  <div style="width: 100%;">
    <div style="width: 100%;height: 30px;background-color: rgb(99, 170, 241);"></div>
    <div style="width: 100%; background-color: white;">
      <div class="header">
        <el-select v-model="selectedGrade" class="selectGrade" @change="fetchStudentData">
          <el-option v-for="grade in grades" :key="grade.value" :label="grade.label" :value="grade.value" />
        </el-select>
        <!-- 班级选择器 -->
        <el-select v-model="selectedClass" class="selectClass" @change="fetchStudentData" :disabled="!selectedGrade">
          <el-option v-for="cls in classes" :key="cls" :label="cls" :value="cls" />
        </el-select>
        <span class="schoolName">北师珠小学</span>
        <!-- 搜索框 -->
        <el-input  v-model="searchText" placeholder="输入姓名搜索" @input="searchStudents" class="search" />
      </div>
      <div class="list">
        <el-table :data="displayStuList">
          <el-table-column type="index" index="1" />
          <el-table-column prop="name" label="姓名" width="100" />
          <el-table-column v-for="(subject, index) in subjects" :key="index" :prop="`scores[${index}]`" :label="subject" width="80" sortable />
        </el-table>
        <!-- 分页组件 -->
        <Pagination :total="filteredStuList.length" v-model:currentPage="currentPage" :pageSize="pageSize" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import Pagination from '../../components/Pagination.vue';

// 假数据
const stuList = ref([
  // 一年级
  { name: '张三', grade: '一年级', class: '一班', scores: [80, 90, 85, 88, 92, 87, 86, 95, 91, 89, 93, 94] },
  { name: '李四', grade: '一年级', class: '一班', scores: [85, 88, 90, 92, 93, 91, 89, 86, 87, 80, 94, 95] },
  { name: '王五', grade: '一年级', class: '二班', scores: [90, 92, 88, 85, 91, 87, 89, 93, 94, 95, 80, 86] },
  { name: '王六', grade: '二年级', class: '二班', scores: [90, 92, 88, 85, 91, 87, 89, 93, 94, 95, 80, 86] },
  // 其他年级其他班级的数据，请根据实际情况补充
]);

const subjects = ref(["英语","劳动","道德","生活","实践","美术","音乐","德育","数学","体育","阅读"]);

const grades = ref([
  { value: '一年级', label: '一年级' },
  { value: '二年级', label: '二年级' },
  { value: '三年级', label: '三年级' },
  // 其他年级的数据，请根据实际情况补充
]);

const selectedGrade = ref('一年级'); // 默认选中的年级
const selectedClass = ref('一班'); // 默认选中的班级
const classes = ref(); // 根据选中的年级动态设置班级列表
const pageSize = ref(10);
const currentPage = ref(1);
const searchText = ref(''); // 搜索框中的文本

// 根据选中的年级过滤班级列表
const filteredClasses = computed(() => {
  return Array.from(new Set(stuList.value.filter(student => student.grade === selectedGrade.value).map(student => student.class)));
});

// 监听选中的年级变化，根据年级动态设置班级列表和重置选中的班级
watch(selectedGrade, () => {
  classes.value = filteredClasses.value;
  selectedClass.value = filteredClasses.value[0] || ''; // 重置选中的班级
  fetchStudentData(); // 获取对应年级和班级的学生数据
});

// 获取学生数据
const fetchStudentData = () => {
  // 根据选中的年级和班级过滤学生数据
  return stuList.value.filter(student => student.grade === selectedGrade.value && student.class === selectedClass.value);
};

// 根据搜索文本过滤学生列表
const filteredStuList = computed(() => {
  return fetchStudentData().filter(student => student.name.includes(searchText.value));
});

// computed property to display student list
const displayStuList = computed(() => {
  return filteredStuList.value;
});

// 处理搜索逻辑
const searchStudents = () => {
  currentPage.value = 1; // 搜索时重置当前页码为第一页
};
</script>

<style scoped>
/* 设置圆角以及边框颜色 */
.header {
  width: 100%;
  height: fit-content;
}

.list {
  width: 100%;
  display: block;

  .el-table {
    width: 99%;
    margin: 0 auto;
    border: 2px solid rgb(170, 166, 166);
    border-radius: 15px;
    margin-bottom: 10px;
  }
}
.el-pagination{
  margin-left:30%;
}
.selectGrade{
    width: 150px;
}
.selectClass{
  width: 100px;

}
.search{
  width: 250px;
  float: right;
}
.schoolName{
  margin: 0 20px;
  margin-left: 200px;

}
</style>
