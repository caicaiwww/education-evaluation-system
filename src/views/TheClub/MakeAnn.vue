<script setup>
import { ref ,reactive} from 'vue'
import { dialogEmits, ElMessage, ElMessageBox } from 'element-plus'
import {EditPen ,Delete} from '@element-plus/icons-vue'

const dialogForm = ref(false)
const formLabelWidth = '80px'
const form = reactive({
  name: '',
  contents:'',
  range:'',
})
const activeName = ref('1')
const formData = ref( [
  {
    rangeStu: '全体同学',
    time: '2016/5/3',
    name: 'Tom',
    contents: '本次放假为12月31号~1月2日3天，假期间同学们在家学习。'
  },
  {
    rangeStu: '全体同学',
    time: '2016/5/3',
    name: 'Tom',
    contents: '本次放假为12月31号~1月2日3天，假期间同学们在家学习。'
  },
  {
    rangeStu: '全体同学',  
    time: '2016/5/3',
    name: 'Tom',
    contents: '本次放假为12月31号~1月2日3天，假期间同学们在家学习。'
  }
])

// 编辑弹窗相关数据
const editDialogVisible = ref(false)

const editedItem = reactive({
  name: '',
  contents: '',
  rangeStu: '',
})

// 新建通知方法
const addNotice = () => {
  if (!form.name || !form.contents || !form.range) {
    ElMessage.error('请填写完整信息')
    return
  }

  formData.value.push({
    rangeStu: form.range,
    name: form.name,
    contents: form.contents,
    time: new Date().toLocaleDateString() // 获取当前时间
  })

  // 清空表单数据
  form.name = ''
  form.contents = ''
  form.range = ''
  dialogForm.value = false
}

// 编辑通知方法
const handleEdit = (item) => {
  if (!editDialogVisible.value) {
    editedItem.name = item.name
    editedItem.contents = item.contents
    editedItem.rangeStu = item.rangeStu
    editDialogVisible.value = true
  }
  
}

// 删除通知方法
const handleDelete = (item) => {
  const index = formData.value.indexOf(item)
  if (index !== -1) {
    formData.value.splice(index, 1) // 从数组中删除选中的通知
  }
}


const saveEdit = () => {
  const index = formData.value.findIndex(item => item.name === editedItem.name && item.contents === editedItem.contents && item.rangeStu === editedItem.rangeStu)+1
console.log(index);
  // 更新通知信息
  if (index !== -1) {
    // 更新通知信息
    formData.value[index].name = editedItem.name
    formData.value[index].contents = editedItem.contents
    formData.value[index].rangeStu = editedItem.rangeStu
  }
  console.log(editedItem);
  console.log(formData.value);
  // 关闭编辑弹窗
  editDialogVisible.value = false
}

</script>

<template>
  <div class="ann">
    <div class="OneHead">
      <div class="plg"></div>
      <p>通知发布</p>
    </div>
    <div class="con">
      <div class="ann1">
        <div class="TwoHead">
          <span style="font-weight:bolder;">英语社</span>
          <div class="add">
            <el-button @click="dialogForm = true" type="primary" round>新建通知</el-button>
            <el-dialog v-model="dialogForm" title="添加通知" width="400px" center>
              <el-form :model="form">
                <el-form-item label="发布人:" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="发布范围:" :label-width="formLabelWidth">
                  <el-input v-model="form.range" autocomplete="off" />
                </el-form-item>
                <el-form-item label="发布内容:" :label-width="formLabelWidth">
                  <el-input v-model="form.contents" autocomplete="off" type="textarea" />
                </el-form-item>
              </el-form>
              <template #footer>
                <div class="dialog-footer">
                  <el-button @click="dialogForm = false">取消</el-button>
                  <el-button type="primary" @click="addNotice">确定</el-button>
                </div>
              </template>
            </el-dialog>
          </div>
        </div>
        <div class="ann2">
          <div class="item" v-for="(item, index) in formData" :key="index">
            <div class="head">
              <span class="head-img">
                <img src="@/assets/logo1.png" alt="niu" class="" />
              </span>
            </div>
            <div class="content">通知：{{ item.contents }}</div>
            <div class="range">
              <a>@</a>{{ item.rangeStu }}
            </div>
            <div class="ope">
              <el-icon @click="handleEdit(item)"><EditPen /></el-icon>
              <el-icon @click="handleDelete(item)"><Delete /></el-icon>
            </div>
            <div class="time">
              <a class="tea">{{ item.name }}</a> 发布时间：{{item.time}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- 编辑通知的弹窗 -->
    <el-dialog v-model="editDialogVisible" title="编辑通知" width="400px" center>
    <el-form :model="editedItem">
      <el-form-item label="发布人:" :label-width="formLabelWidth">
        <el-input v-model="editedItem.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="发布范围:" :label-width="formLabelWidth">
        <el-input v-model="editedItem.rangeStu" autocomplete="off" />
      </el-form-item>
      <el-form-item label="发布内容:" :label-width="formLabelWidth">
        <el-input v-model="editedItem.contents" autocomplete="off" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.ann{
    width: 100%;
    height: 700px;
    display: contents;
}
        .OneHead{
            width: 100%;
            margin: 10px 0;

       .plg {
           background-color: black;
           height: 20px;
           width: 12px;
           float: left;
           margin-right: 10px;
        //    margin: 15px;
        }
        p {
            font-weight: 600;
            color: var(--s-color-theme5);
            display: inline;

            }}
        .con{
            padding-top: 10px;
            background-color: #fff;
            width: 100%;
            height: 600px;
            .TwoHead{
                margin-bottom: 10px;
                .add{
                        float: right;
                        background-color:#79bbff;
                        border-radius: 10px;
                    }
            }
            .ann1{
                width: 96%;
                height: 100%;
                margin: 10px auto;
            }
            .ann2{
              width: 99%;
              height: 500px; /* 设置合适的高度 */
              margin: 10px auto;
              background-color: #a7ccf0;
              padding-top: 10px;
              overflow-y: auto; /* 添加垂直滚动条 */
                .item{
                  width: 95%;
                  height: 180px;
                  background-color: #fff;
                  margin: 10px auto;
                  border: 1px black solid;
                    .head{
                        width: 5%;
                        height: 50px;

                        background-color: #f68585;
                        margin: 10px;
                        border-radius: 50%;
                        border: 1px black solid;
                        float: left;
                        .head-img{

                          img{width: 50px;
                          height: 50px;}
                          
                        }
                    }
                    .content{
                        width: 92%;
                        height: 120px;
                        margin: 0%;
                        float: left;
                        margin-top: 5px;
                    }
                    .range{
                        width: 97%;
                        height: 30px;
                        background-color: pink;
                        float: left;
                        margin-left: 10px;
                    }
                    .ope{
                        width: 200px;
                        height: 30px;
                        float: left;
                        margin-left: 10px;
                        .el-icon{
                          margin-right: 10px;
                          margin-top: 5px;
                        }
                    }
                    .time{
                        width: 300px;
                        height: 30px;
                        float: right;
                        margin-right: 23px;
                    }

                }
            }
        }

</style>