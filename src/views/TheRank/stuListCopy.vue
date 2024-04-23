<template>
  <div style="width: 100%;">
    <div style="width: 100%;height: 30px;background-color: rgb(99, 170, 241);"></div>
    <div style="width: 100%; background-color: white;">
      <div class="header">
          <!-- 年级下拉菜单 -->
          <el-select v-model="selectedGrade" placeholder="选择年级" @change="fetchClasses" >
            <el-option v-for="grade in grades" :key="grade.id" :label="grade.name" :value="grade.id" />
          </el-select>
          <!-- 班级下拉菜单 -->
          <el-select v-model="selectedClass" placeholder="选择班级" @change="fetchStudentData">
            <el-option v-for="cls in classes" :key="cls.id" :label="cls.label" :value="cls.id" />
          </el-select>
          <span style="margin-left:200px;">北师珠小学</span>
          <el-input v-model="searchKeyword" placeholder="搜索学生姓名" style="width: 200px;" class="search"></el-input>
        </div>
      <div class="list" >
        <el-table :data="filteredStudents" style="width: 100%;">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column v-for="(subject, index) in subjects" :key="index" :label="subject">
            <template v-slot="scope">{{ scope.row.scores[index] }}</template>
          </el-table-column>
        </el-table>
        <Pagination :total="filteredStudents.length" v-model:currentPage="currentPage" :pageSize="pageSize" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted ,computed} from 'vue';
import { ElSelect, ElOption, ElTable, ElTableColumn } from 'element-plus';
import axios from 'axios';
import Pagination from '../../components/Pagination.vue';
const pageSize = ref(10);
const currentPage = ref(1);
// 声明变量
const grades = ref([]); // 存储年级数据
const classes = ref([]); // 存储班级数据
const selectedGrade = ref(''); // 存储选中的年级
const selectedClass = ref(''); // 存储选中的班级
const students = ref([]); // 存储学生数据
const subjects = ref([]); // 存储科目数据
const searchKeyword = ref(''); // 存储搜索关键词
// 学生姓名列
const name = 'name';
const filteredStudents = computed(() => {
  return students.value.filter(student => student.name.includes(searchKeyword.value));
});

// 登录并获取年级数据的函数
const loginAndFetchGrades = async () => {
  try {
    const formData = new FormData();
    formData.append('role', 'teacher');
    formData.append('schoolId', '4404001');
    formData.append('teacherName', '监测');
    formData.append('password', '0098765aa67dba3ceedad7158ad25c2a836bfee4');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
        'Accept': '*/*',
        'Host': '172.20.13.12:8082',
        'Connection': 'keep-alive',
      }
    };

    const response = await axios.post('/api/api/login', formData, config);
    console.log(response.data); // 处理登录成功后的响应数据

    // 登录成功后获取年级数据
    fetchGrades();
  } catch (error) {
    console.error('Error logging in and fetching grades:', error);
  }
};

// 获取年级数据的函数
// 获取年级数据的函数
const fetchGrades = async () => {
  try {
    const response = await axios.get('/api/api/class/teachClasses');
    const gradeData = response.data.result.data;

    // 将年级数据转换为下拉菜单需要的格式并去重
    const uniqueGrades = [];
    gradeData.forEach(grade => {
      if (!uniqueGrades.some(existingGrade => existingGrade.id === grade.gradeName)) {
        uniqueGrades.push({
          id: grade.gradeName,
          name: grade.gradeName
        });
      }
    });

    // 设置年级数据
    grades.value = uniqueGrades;

    // 如果年级数据不为空，自动获取第一个年级的班级数据
    if (grades.value.length > 0) {
      selectedGrade.value = grades.value[0].id;
      fetchClasses();
    }
  } catch (error) {
    console.error('Error fetching grades:', error);
  }
};


// 获取班级数据的函数
const fetchClasses = async () => {
  try {
    const response = await axios.get(`/api/api/class/teachClasses?gradeName=${selectedGrade.value}`);
    const classData = response.data.result.data;
    
    // 直接将接口返回的班级数据设置给 classes
    classes.value = classData.map(cls => ({
      id: cls.classId,
      label: cls.className,
    }));

    // 设置选中的班级为第一个班级
    if (classes.value.length > 0) {
      selectedClass.value = classes.value[0].id;
      fetchStudentData();
    }
  } catch (error) {
    console.error('Error fetching classes:', error);
  }
};

// 获取学生数据的函数
// 获取学生数据的函数
const fetchStudentData = async () => {
  try {
    const response = await axios.get(`/api/api/integral-statictis/class/${selectedClass.value}/week/1?target=subject&pindex&number`);
    const studentData = response.data.result.data;
    
    // 处理学生数据
    const processedStudents = studentData[0].items.map(student => {
      const scores = student.scores;
      return {
        name: student.name,
        scores: scores,
      };
    });
    // 更新学生数据和科目数据
    students.value = processedStudents;
    subjects.value = studentData[0].cols;
  } catch (error) {
    console.error('Error fetching student data:', error);
  }
};


// 当选中的年级发生变化时调用获取班级数据的函数
watch(selectedGrade, () => {
  fetchClasses();
});

// 组件挂载时登录并加载年级数据
onMounted(loginAndFetchGrades);
</script>
<style scoped>
/* 设置圆角以及边框颜色 */
.header {
  width: 100%;
  height: fit-content;
  margin-left: 50px;
  padding: 20px;

.el-select{
  width: 100px;
  margin-left: 0px;
}

  .search {
    width: 250px;
    margin-left: 200px;
    .el-input__wrapper {
      background-color: aquamarine;
    }
  }

  .title {
    margin-left: 200px;
  }

  .selectClass {
    margin-left: 20px;
    width: 120px;

    .el-input__inner {
      font-size: 10px;
    }
  }

  .selectWeek {
    margin-left: 20px;
    width: 120px;

    .el-input__inner {
      font-size: 10px;
    }
  }
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
</style>
