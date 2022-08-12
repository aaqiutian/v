<template>
    <main>
        <div class="top">
         <van-row>
             <van-col span="4">
                <router-link to="/my"><van-icon name="arrow-left" color="red"/></router-link>            
             </van-col>
             <van-col span="10" offset="8">注册</van-col>
       </van-row>

       </div>

        <div class="conter">
             <van-field  class="z" size="60px"
              
               label="请输入手机号"
             
              placeholder=""
               />

  <van-field class="z1"
            
                label="图片验证码"
                
                format-trigger="onBlur"
                placeholder="" 
                />
                 <van-field class="z4"
             
                label="短信验证码"           
                format-trigger="onBlur"
                placeholder="" 
                />

                <van-field class="z3"
                label="请设置密码"          
                format-trigger="onBlur"
                placeholder="" 
                />

             <van-icon class="z2" name="closed-eye" />
                <div class="send">发送验证码</div>
                <div class="tu"><img src="../assets/img/yz1.png" alt=""></div>
        </div>
       
        
       <p class="log" @click="zhuce">注册</p>
    </main>
</template>

<style scoped>

main{
    background: #f7f7f7;
    /* height: 170vw; */
    padding-top: 30px;
}

.top{
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.conter{
    margin: 10px;
}

.z3{
    position: relative;
}

.z2{
    position: absolute;
    top:200px;
    right:35px;
}

.z4{
    position: relative;
}

.send{
    position: absolute;
    top:153px;
    right:20px;
  color: azure;
    background: #c62f2e;
    line-height: 20px;

     text-align: center;
}

.z1{
    position: relative;
}

.tu{
    position: absolute;
    top:97px;
    right:20px;
}


.log{
    background: #c62f2e;
    line-height: 40px;
    margin-top: 30px;
    text-align: center;
}

</style>

<script>
export default {
    methods:{
        zhuce(){
            this.$router.push('/my')
        }
    }
}
</script>