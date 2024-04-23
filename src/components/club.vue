<script setup >
import router from '../router/index';

     const Club=[
        {id:"001",name:"英语社",num:42,time:"2024/04/10"},
        {id:"002",name:"轮滑社",num:30,time:"2023/10/10"},
        {id:"003",name:"文学社",num:30,time:"2023/10/10"},
        {id:"004",name:"学生会",num:30,time:"2023/10/10"},
        {id:"005",name:"摄像社",num:30,time:"2023/10/10"},
        {id:"006",name:"配音社",num:26,time:"2023/11/13"}]
    const toClubDetail=(id, val) => {   
      router.push('/clubindex/stueva');
     };    

</script>
<template>
    <div class="clubList">
        <div 
        v-for="(item, index) in Club" :key="index"
          class="listItem" 
          @click="toClubDetail(item.id, item)"
          >
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                            <span>{{item.name}}</span>
                   </div>
                </template>
                <div class="cardBody">
                    <img src="@/assets/logo.png" class="cardBodyPic" > 
                    <div class="cardBodyText">
                        <div class="cardBodyText1">
                            <p>人数：{{item.num}}</p>
                        </div>
                        <div class="cardBodyText2">
                            <p>最近评价：{{item.time}} </p>
                        </div>
                    </div>
                </div>
  </el-card>
        </div>
    </div>
    
</template>

<style >
.cardBodyText p{
    margin-bottom: 20px;
}
.clubList{
    width: 1100px;
    margin: 0 auto;
   
}
.listItem{
    width:300px;
    display: inline-table;
    margin: 20px;
}
.box-card {
    background-color: white;
    /* width:fit-content; */
    align-items: center;
  }

.card-header {
  }
  
  
 
  .cardBodyPic{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      float: left;
  }
  .cardBodyText{
    float: right;
    font-size: small;
  }


</style>