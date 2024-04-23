<template>
  <div class="history">
    <div class="con">
      <div class="mes">
        <!-- 使用 el-table 显示评价历史 -->
        <el-table :data="currentComments" border style="width: 100%">
          <!-- 日期列 -->
          <el-table-column prop="date" label="日期" width="180" />
          <!-- 评语列 -->
          <el-table-column prop="content" label="评语" />
        </el-table>
      </div>
      <!-- 分页器 -->
      <el-pagination
      style="margin-left: 35%;"
        v-model="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="comments.length"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { ElPagination } from 'element-plus';

const store = useStore();
const comments = ref(store.state.comments);
const currentPage = ref(1);
const pageSize = ref(10);

// 计算当前页的评价数据
const currentComments = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = currentPage.value * pageSize.value;
  return comments.value.slice(startIndex, endIndex);
});

// 处理分页器变化
const handleCurrentChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style lang="scss" scoped>
.history {
  width: 100%;
  height: 740px;
  background-color: #fff;
  padding-top: 10px;
  .con {
    width: 95%;
    height: 80%;
    margin: 20px auto;
    border: 1px solid black;
  }
  .mes {
    margin-bottom: 20px;
  }
}
</style>
