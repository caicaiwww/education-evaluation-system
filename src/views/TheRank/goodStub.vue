<template>
    <div style="width: 100%;">
      <div style="width: 100%; height: 30px; background-color: rgb(99, 170, 241);"></div>
      <div style="width: 100%; background-color: white; padding: 20px;">
        <div class="header">
          <!-- 年级下拉菜单 -->
          <el-select v-model="selectedGrade" placeholder="选择年级" @change="fetchClasses" style="margin-right: 20px;">
            <el-option v-for="grade in grades" :key="grade.id" :label="grade.name" :value="grade.id" />
          </el-select>
          
          <!-- 班级下拉菜单 -->
          <el-select v-model="selectedClass" placeholder="选择班级" @change="fetchStudentData">
            <el-option v-for="cls in classes" :key="cls.id" :label="cls.label" :value="cls.id" />
          </el-select>
        </div>
        
        <!-- 显示学生成绩 -->
        <div >
          <h2>学生成绩</h2>
          <el-table :data="students" style="width: 100%;">
            <el-table-column prop="name" label="学生姓名"></el-table-column>
            <el-table-column v-for="(subject, index) in subjects" :key="index" :prop="'subject' + index" :label="subject"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { ElSelect, ElOption, ElTable, ElTableColumn } from 'element-plus';
  import axios from 'axios';
  
  // 声明变量
  const grades = ref([]); // 存储年级数据
  const classes = ref([]); // 存储班级数据
  const selectedGrade = ref(''); // 存储选中的年级
  const selectedClass = ref(''); // 存储选中的班级
  const students = ref([]); // 存储学生数据
  const subjects = ref([]); // 存储科目数据
  
  // 登录
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
  const fetchGrades = async () => {
    try {
      const response = await axios.get('/api/api/class/teachClasses');
      const gradeData = response.data.result.data;
      // 将年级数据转换为下拉菜单需要的格式
      grades.value = gradeData.map(grade => ({
        id: grade.gradeName,
        name: grade.gradeName
      }));
  
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
      // 将班级数据转换为下拉菜单需要的格式，显示 className
      classes.value = classData.map(cls => ({
        id: cls.classId,
        label: cls.className,
      }));
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };
  
  // 获取学生数据的函数
  const fetchStudentData = async () => {
    try {
      const response = await axios.get(`/api/api/integral-statictis/class/${selectedClass.value}/week/1?target=subject&pindex&number`);
      const studentData = response.data.result.data;
      // 学生数据转换
      students.value = studentData.items.map(student => ({
        name: student.name,
        ...Object.fromEntries(student.scores.map((score, index) => [`subject${index}`, score]))
      }));
      // 获取科目数据
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
  /* 样式 */
  </style>
  