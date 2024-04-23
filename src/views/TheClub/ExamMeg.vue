<template>
  <div class="exam">
    <div class="OneHead">
      <div class="plg"></div>
      <p>申请管理</p>
    </div>
    <div class="con">
      <div class="meg">
        <div class="TwoHead">
          <p style="font-weight:bolder;">英语社</p>
        </div>
        <div class="table">
          <div class="tab">
            <el-radio-group v-model="activeName">
              <el-radio-button label="1">未审批</el-radio-button>
            </el-radio-group>
          </div>
          <div class="table1">
            <el-table :data="meg" style="width: 100%">
              <el-table-column prop="date" label="时间" width="180" />
              <el-table-column prop="name" label="姓名" width="180" />
              <el-table-column prop="address" label="申请理由" />
              <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                  <el-button link type="primary" size="small" @click="handleClick(scope.row)">
                    同意
                  </el-button>
                  <el-button link type="primary" size="small" @click="handleReject(scope.row)">
                    拒绝
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('1');

const meg = ref([
  {
    date: '2024-04-11',
    name: '小李',
    address: '请假开会，身体不舒服',
  },
  {
    date: '2024-04-11',
    name: '小白',
    address: '请假开会，不在学校',
  },
  {
    date: '2024-04-11',
    name: '王五',
    address: '请假开会，看牙医',
  },
  {
    date: '2024-04-11',
    name: '小天',
    address: '退社团，协调不了学习等方面',
  },
  {
    date: '2024-04-11',
    name: '小天',
    address: '退社团，协调不了学习等方面',
  },
  {
    date: '2024-04-11',
    name: '小天',
    address: '退社团，协调不了学习等方面',
  },
]);

const handleClick = (row) => {
  const index = meg.value.indexOf(row);
  meg.value.splice(index, 1);
  console.log('Agreed:', row);
};

const handleReject = (row) => {
  const index = meg.value.indexOf(row);
  meg.value.splice(index, 1);
  console.log('Rejected:', row);
};
</script>

<style lang="scss" scoped>
.exam {
  width: 100%;
  height: 700px;
}

.OneHead {
  width: 100%;
  margin: 10px 0;
}

.plg {
  background-color: black;
  height: 20px;
  width: 12px;
  float: left;
  margin-right: 10px;
}

p {
  font-weight: 600;
  color: var(--s-color-theme5);
  display: inline;
}

.con {
  background-color: #fff;
  width: 100%;
  height: 600px;
}

.meg {
  width: 96%;
  height: 100%;
  margin: 0 auto;
}

.table1 {
  border: 1px black solid;
  border-bottom: none;
}
</style>
