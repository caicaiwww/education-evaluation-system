<script setup >
  import footear from '@/components/footear.vue';
// 解决ERROR ResizeObserver loop completed with undelivered notifications.
 
//问题的
 
const debounce = (fn, delay) => {
 
 let timer = null;

 return function () {

   let context = this;

   let args = arguments;

   clearTimeout(timer);

   timer = setTimeout(function () {

     fn.apply(context, args);

   }, delay);

 }

}

// 解决ERROR ResizeObserver loop completed with undelivered notifications.

//问题的

const _ResizeObserver = window.ResizeObserver;

window.ResizeObserver = class ResizeObserver extends _ResizeObserver {

 constructor(callback) {

   callback = debounce(callback, 16);

   super(callback);

 }

}
</script>
<template>
  <div class="menu">
    <div class="menu-logo">
      <span class="menu-logo">
        <img src="@/assets/logo1.png" alt="niu" class="menu-logo-img"  />
      </span>
    </div>   
    <div class="menu-pc">
       <el-menu
          default-active="/club"
          class="el-menu-demo"
          :router="true"
          :ellipsis="false"
           mode="horizontal"
         >
          <el-menu-item index="/subject"> 我的课程 </el-menu-item>
          <el-menu-item index="/club"> 我的社团 </el-menu-item>
          <el-menu-item index="/discipline"> 班风班纪 </el-menu-item>
          <el-menu-item index="/lessons"> 听课与评课 </el-menu-item>
          <el-menu-item index="/rank"> 排行榜 </el-menu-item>
          <div class="flex-grow"></div>
          <el-menu-item index="/message"> 消息 </el-menu-item>
          <el-menu-item index="/personal"> 个人中心 </el-menu-item>
          <el-menu-item index="/login"> 退出 </el-menu-item>
        </el-menu>
     </div>
  </div>
  <div class="content">
    <RouterView/>
  </div>
  <div class="footer"> <footear/> </div>

</template>

<style >
    body{
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      background: url(@/assets/background.png);
      background-color: rgb(224, 233, 242);
      background-repeat: no-repeat;
      background-position: 88% 35%;
    }
    .menu{
      width: 100%;
      height: 78px;
      background-color: white;
      display: flex;
      align-items: center;
      .menu-logo{
        margin: 0 20px;
        .menu-logo-img {
            height:48px;
          }
      }
      .menu-pc{
        width: 100%;
      }
    }

.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-demo {
  height: 78px;
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}

/* 中心 */
.content{
  height: 800px;
  width: 100%;
  /* opacity:0.5; */
  margin-top: 20px;
  /* background-color: aqua; */
}

/* 脚部 */
.footer{
  width: 100%;
  height: auto;
  display: flex;
}




</style>


