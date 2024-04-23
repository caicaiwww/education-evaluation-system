<script setup >
import clubname from '../../components/club/clubname.vue';
import evaShow from '../../components/club/evaShow.vue'
const stuList=[{学号:"23",名字:"小李",本周得分:"24",总计得分:"25"},{学号:"23",名字:"小李",本周得分:"24",总计得分:"25"},{学号:"23",名字:"小李",本周得分:"24",总计得分:"25"},{学号:"23",名字:"小李",本周得分:"24",总计得分:"25"}]
</script>
<template>
    <div class="stueva">
        <div class="stu">
            <div class="stu1">
                <div class="clubna">
                    <clubname></clubname>
                </div>
                <div class="stuna">
                    <el-table :data="stuList" :header-cell-style="{fontSize:'10px'}" >
                        <el-table-column prop= "学号" label="学号" sortable  min-width="70px"/>
                        <el-table-column prop="名字" label="名字"  sortable  width="80px"/>
                        <el-table-column prop="本周得分" label="本周得分"  sortable  width="90px"/>
                        <el-table-column prop="总计得分" label="总计得分"  sortable width="90px"/>
                </el-table>
                </div>
            </div>    
        </div>
        <div class="eva">
                <evaShow/>
            </div>
    </div>
</template>

<style lang="scss" scoped>
    .stueva{
        width: 100%;
        height: 780px;

        .stu{
            width: 350px;
            height: 780px;
            padding: 0%;
            float: left;     
            background: #fff;  


            .stu1{
                width: 320px;
                margin: 0 auto;
                margin-top: 20px;
                height: 100%;
               .stuna{
                margin: 10px 0;
                .el-table{
                    border-radius: 15px;
                    height:max-content;
                    width: 320px;
                    display: flex;
                }
               
               }
            } 
        }
        .eva{
            width: 800px;
            float: right;
            height: 780px;
            

        }
    }
</style>