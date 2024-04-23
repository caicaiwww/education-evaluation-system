<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    />
  </template>
  
  <script >
 import { ref, watch } from 'vue';

  
  export default {
    props: {
      total: Number,
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    emits: ['update:currentPage'],
    setup(props, { emit }) {
      const currentPage = ref(props.currentPage);
      const pageSize = ref(props.pageSize);
      const pageSizes = [10, 20, 30, 50]; // 可选的每页条目数
  
      // 监听页码变化，更新父组件的 currentPage
      watch(currentPage, (newValue) => {
        emit('update:currentPage', newValue);
      });
  
      // 处理每页条目数变化
      const handleSizeChange = (val) => {
        pageSize.value = val;
      };
  
      // 处理页码变化
      const handlePageChange = (val) => {
        currentPage.value = val;
      };
  
      return {
        currentPage,
        pageSize,
        pageSizes,
        handleSizeChange,
        handlePageChange
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  