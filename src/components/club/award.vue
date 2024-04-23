<template >
    <div class="award">
        <div class="con">
            <div class="item">
                <el-checkbox>
                    <div class="img1"><div class="text">熊猫11</div><div class="img2"><img src="./@/../../../assets/logo.png"></div></div>
                </el-checkbox>
            </div>


        </div>
        <div class="reason">
               <span>原因：</span>   <el-input v-model="input" />
                <el-button >确认提交</el-button>

            </div>
    </div>
</template>
<script  setup>
</script>
<style lang="scss" scoped>
    .award{
        height: 400px;
        background-color: #fff;
        padding-top: 10px;
        .con{
            width: 95%;
            height:80% ;
            background-color:rgb(166, 159, 159) ;
            margin:10px auto ;
            .item{
                width: 150px;
                height: 200px;
                margin: 20px;
                background-color: #fff;
                border-radius: 15px; 
                float: left;
                .el-checkbox{
                    width: 100%;  
                    height: 100%; 
                    margin-left: 10px;
                    .el-checkbox__input{
                        background-color: aquamarine;
                    }

                    .img1{
                        width: 100px;
                        height: 150px;
                        .text{
                            width: fit-content;
                            height: fit-content;
                            margin: 10px auto;
                        }

                        img{
                                width:50px;
                                height: 50px;
                                margin: auto;
                                margin-left: 10px;
                                border:1px black solid ;
                                border-radius: 50%;
                                padding: 20px;
                            }

                    }

                }
            }
        }
            .reason{
                width: 95%;
                margin: 10px auto;
                .el-input{
                    width: 200px;
                    height: fit-content;
                }
                .el-button{
                    float: right;
                }

            }
    }

</style>