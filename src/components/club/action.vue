<!--action.vue  行为评价-->
<!-- action.vue -->
<script setup lang="ts">
import { useStore } from 'vuex';
import { ref ,getCurrentInstance} from 'vue';
import { ElMessage, ElMessageBox, UploadProps, UploadUserFile } from 'element-plus'
const store=useStore();


const descore = ref("");

const addComment = () => {
  const date = new Date().toISOString().slice(0, 10);
  const newComment = {
    date,
    content: descore.value,
  };

  store.commit('addComment',newComment);

  descore.value = '';
};


const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>

<template>
  <div class="act">
    <div class="select">
      <div class="check">
        <!-- 循环显示评价内容 -->
        <div class="checkbox" v-for="(item, index) in store.state.comments" :key="index">
          <el-radio disabled :label="item.content" /> 
        </div>
      </div>
      <div class="define">
        <span>自定义评价：</span>
        <el-input v-model="descore" placeholder="评语" @keydown.enter="addComment" />
        <el-button @click="addComment">点评</el-button>
      </div>
    </div>
    <div class="mes">
      <h4 style="text-align: center;margin-top: 5px;">评语</h4>
      <div class="file">
        <el-upload
            v-model:file-list="fileList"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            >
            <el-button type="primary">上传文件</el-button>
            <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
            </div>
            </template>
        </el-upload>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
    .act{
        width: 100%;
        
        .select{
            width: 100%;
            background-color: #fff;
            padding-top: 10px;

            .check{
              padding-top: 10px;
              background-color: rgb(185, 174, 174);
              margin: 20px auto 5px;
              width: 95%;
              height: 250px;
              overflow-y: auto; /* 添加此行以显示垂直滚动条 */
               .checkbox{
                background-color:#fff;
                margin: 10px;
               }
               .el-checkbox{
                margin-left: 10px;
               }
               .score{
                    width: 40px;
                    float: right;
                    text-align: center;
                    background: rgb(186, 124, 134);
                    margin:5px;
               }
               }

               .define{
                width: 95%;
                margin:0 auto;
                height:fit-content;
                
                
                .el-input{
                    width: 150px;
                    margin-bottom: 10px;
                    margin-right: 10px;

                }
                .el-input-number{
                    width: 80px;
                    height:31px;
                    margin-right: 10px;
                }
               }
            }

        }
        .mes{
            width: 100%;
            height: 380px;
            background-color: #fff;
            margin-top: 20px;

        }
        .upload-demo{
                width: 95%;
                background-color: rgb(226, 222, 222);
                height: 250px;
                margin: auto;
            }

            //搜索框
            
</style>

