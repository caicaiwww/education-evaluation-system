<script setup lang="ts">
import { ref } from 'vue'
import  stulist from "./stuListCopy.vue"
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedGrades = ref(["一年级","2年级"])
const grades=["一年级","2年级","3年级","4年级","5年级"]
const handleCheckAllChange = (val: boolean) => {
  checkedGrades.value = val ? grades : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === grades.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < grades.length
}
</script>

<template >
    <div class="rank">
        <div class="head">
            <div class="plg"></div>
            <p>排行榜</p>
        </div>
        <div class="stuList">
                <stulist></stulist>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .rank{
        display: flex;
        flex-direction: column; //上下排列
        margin-left: 250px;
   
    }
    .head{
            width: 100%;
            margin-top: 60px;
            margin-bottom: 30px;

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
    .gradeSel{
        width: 100%;
        display: flex;
        margin: 20px 0;
       .el-checkbox__inner{
             border-radius :50%
            }
        .el-checkbox{
                margin-left: 10px;
            }
    }
    .stuList{
        width:1050px;
    }
</style>